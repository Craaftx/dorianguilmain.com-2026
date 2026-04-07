"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import CollageElement from "./CollageElement";
import CollageMenu from "./CollageMenu";
import { DEFAULT_COLLAGE } from "./collageDefaults";

const STORAGE_KEY = "collage-elements";

function loadCollage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {}
  return [...DEFAULT_COLLAGE];
}

const CollageCanvas = ({ mode, setMode }) => {
  const [elements, setElements] = useState(loadCollage);
  const saveTimerRef = useRef(null);

  // Debounced save to localStorage
  useEffect(() => {
    if (elements === null) return;
    clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(elements));
    }, 300);

    return () => clearTimeout(saveTimerRef.current);
  }, [elements]);

  const updateElement = useCallback((id, partial) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, ...partial } : el)),
    );
  }, []);

  const deleteElement = useCallback((id) => {
    setElements((prev) => prev.filter((el) => el.id !== id));
  }, []);

  const addElement = useCallback((asset) => {
    const newEl = {
      id: `el_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      src: asset.src,
      x: Math.round(window.innerWidth / 2 - asset.defaultWidth / 2),
      y: Math.round(window.innerHeight / 2 - asset.defaultHeight / 2),
      width: asset.defaultWidth,
      height: asset.defaultHeight,
      rotation: 0,
      zIndex: 10,
    };
    setElements((prev) => [...prev, newEl]);
  }, []);

  const handleSetDefault = useCallback(() => {
    setElements([...DEFAULT_COLLAGE]);
  }, []);

  const handleResetAll = useCallback(() => {
    setElements([]);
  }, []);

  const isEditing = mode === "editing";

  // Don't render until loaded from localStorage
  if (elements === null) return null;

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${isEditing ? "" : "pointer-events-none"}`}
      style={{ zIndex: 0 }}
      onWheel={isEditing ? (e) => e.stopPropagation() : undefined}
    >
      {/* Collage elements */}
      <div className="absolute inset-0 opacity-100">
        {elements.map((el) => (
          <CollageElement
            key={el.id}
            element={el}
            isEditing={isEditing}
            onUpdate={updateElement}
            onDelete={deleteElement}
          />
        ))}
      </div>

      {/* Bottom menu in editing mode */}
      {isEditing && (
        <CollageMenu
          onAddElement={addElement}
          onSetDefault={handleSetDefault}
          onResetAll={handleResetAll}
          onDone={() => setMode("viewing")}
        />
      )}
    </div>
  );
};

export default CollageCanvas;
