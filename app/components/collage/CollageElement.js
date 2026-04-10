"use client";

import { useRef } from "react";

const DeleteButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-7 top-1/2 -translate-y-1/2 w-6 h-6 bg-red-400 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600 cursor-pointer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </button>
);

const BringFrontButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-6 h-6 text-background rounded-full text-xs flex items-center justify-center bg-orange-400 hover:bg-orange-900 cursor-pointer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  </button>
);

const BringBackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-6 h-6 text-background rounded-full text-xs flex items-center justify-center bg-orange-400 hover:bg-orange-900 cursor-pointer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  </button>
);

const RotateHandle = ({ onPointerDown }) => (
  <div
    onPointerDown={onPointerDown}
    className="absolute flex items-center justify-center -top-7 left-1/2 -translate-x-1/2 w-6 h-6 text-background bg-orange-400 rounded-full cursor-grab active:cursor-grabbing"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3 h-3"
    >
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  </div>
);

const ResizeHandle = ({ onPointerDown }) => (
  <div
    onPointerDown={onPointerDown}
    className="absolute flex items-center justify-center -bottom-2 -right-2 w-5 h-5 rotate-90 rounded-xs text-white bg-orange-400 cursor-nwse-resize z-10"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
    >
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  </div>
);

const ZIndicator = ({ zIndex }) => (
  <div className="absolute -bottom-2 -left-2 text-xs text-white bg-orange-400 px-1 rounded z-10">
    Z: {zIndex}
  </div>
);

const CollageElement = ({ element, isEditing, onUpdate, onDelete }) => {
  const dragRef = useRef(null);
  const elementRef = useRef(null);

  const handleMoveDown = (e) => {
    if (!isEditing) return;
    e.stopPropagation();
    e.target.setPointerCapture(e.pointerId);
    dragRef.current = {
      type: "move",
      px: e.clientX,
      py: e.clientY,
      x: element.x,
      y: element.y,
    };
  };

  const handleResizeDown = (e) => {
    e.stopPropagation();
    e.target.setPointerCapture(e.pointerId);
    const ratio = element.width / element.height;
    dragRef.current = {
      type: "resize",
      px: e.clientX,
      width: element.width,
      height: element.height,
      ratio,
    };
  };

  const handleRotateDown = (e) => {
    e.stopPropagation();
    e.target.setPointerCapture(e.pointerId);
    dragRef.current = { type: "rotate" };
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current) return;
    e.stopPropagation();

    const d = dragRef.current;

    if (d.type === "move") {
      onUpdate(element.id, {
        x: d.x + (e.clientX - d.px),
        y: d.y + (e.clientY - d.py),
      });
    } else if (d.type === "resize") {
      const newWidth = Math.max(40, d.width + (e.clientX - d.px));
      onUpdate(element.id, { width: newWidth, height: newWidth / d.ratio });
    } else if (d.type === "rotate") {
      const rect = elementRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const angle =
        Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI) + 90;
      onUpdate(element.id, { rotation: Math.round(angle) });
    }
  };

  const handlePointerUp = () => {
    dragRef.current = null;
  };

  return (
    <div
      ref={elementRef}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        position: "absolute",
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        transform: `rotate(${element.rotation}deg)`,
        zIndex: element.zIndex,
        pointerEvents: isEditing ? "auto" : "none",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={element.src}
        alt=""
        draggable={false}
        onPointerDown={handleMoveDown}
        loading="lazy"
        className={`w-full h-full object-contain select-none ${isEditing ? "cursor-grab active:cursor-grabbing" : ""}`}
      />

      {isEditing && (
        <>
          <DeleteButton
            onClick={(e) => {
              e.stopPropagation();
              onDelete(element.id);
            }}
          />

          <div className="absolute -left-7 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
            <BringFrontButton
              onClick={(e) => {
                e.stopPropagation();
                onUpdate(element.id, { zIndex: element.zIndex + 1 });
              }}
            />
            <BringBackButton
              onClick={(e) => {
                e.stopPropagation();
                onUpdate(element.id, {
                  zIndex: Math.max(0, element.zIndex - 1),
                });
              }}
            />
          </div>

          <RotateHandle onPointerDown={handleRotateDown} />

          <ResizeHandle onPointerDown={handleResizeDown} />

          <ZIndicator zIndex={element.zIndex} />

          {/* Selection outline */}
          <div className="absolute inset-0 border-2 border-dashed border-orange-900 pointer-events-none" />
        </>
      )}
    </div>
  );
};

export default CollageElement;
