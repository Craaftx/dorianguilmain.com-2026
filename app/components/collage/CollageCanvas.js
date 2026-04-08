"use client";

import { useState, useSyncExternalStore, useEffect, useRef, useCallback } from "react";
import CollageElement from "./CollageElement";
import CollageMenu from "./CollageMenu";
import { DEFAULT_COLLAGE } from "./collageDefaults";

const STORAGE_KEY = "collage-elements";

const defaultSnapshot = [...DEFAULT_COLLAGE];
let cachedRaw = null;
let cachedParsed = defaultSnapshot;

function getSnapshot() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      if (raw) {
        const parsed = JSON.parse(raw);
        cachedParsed = Array.isArray(parsed) ? parsed : defaultSnapshot;
      } else {
        cachedParsed = defaultSnapshot;
      }
    }
  } catch {}
  return cachedParsed;
}

function getServerSnapshot() {
  return defaultSnapshot;
}

function subscribe(callback) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

const CollageCanvas = ({ mode, setMode }) => {
  const storedElements = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [localElements, setLocalElements] = useState(null);
  const elements = localElements ?? storedElements;
  const saveTimerRef = useRef(null);

  // Debounced save to localStorage
  useEffect(() => {
    if (localElements === null) return;
    clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(localElements));
    }, 300);

    return () => clearTimeout(saveTimerRef.current);
  }, [localElements]);

  const updateElement = useCallback((id, partial) => {
    setLocalElements((prev) =>
      (prev ?? storedElements).map((el) => (el.id === id ? { ...el, ...partial } : el)),
    );
  }, [storedElements]);

  const deleteElement = useCallback((id) => {
    setLocalElements((prev) => (prev ?? storedElements).filter((el) => el.id !== id));
  }, [storedElements]);

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
    setLocalElements((prev) => [...(prev ?? storedElements), newEl]);
  }, [storedElements]);

  const handleSetDefault = useCallback(() => {
    setLocalElements([...DEFAULT_COLLAGE]);
  }, []);

  const handleResetAll = useCallback(() => {
    setLocalElements([]);
  }, []);

  const isEditing = mode === "editing";

  return (
    <div
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-screen w-screen overflow-hidden ${isEditing ? "" : "pointer-events-none"}`}
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
