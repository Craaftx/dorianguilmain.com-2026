"use client";

import { ASSET_CATALOG } from "./collageDefaults";

const CollageMenu = ({ onAddElement, onSetDefault, onResetAll }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-sm border-t-2 border-orange-400 p-3 flex items-center gap-4">
      <div className="flex gap-2 overflow-x-auto flex-1 py-1">
        {ASSET_CATALOG.map((asset) => (
          <button
            key={asset.src}
            onClick={() => onAddElement(asset)}
            className="shrink-0 w-14 h-14 bg-background/20 rounded border border-orange-400/30 hover:border-orange-400 p-1 cursor-pointer transition-colors"
            title={asset.label}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset.src}
              alt={asset.label}
              className="w-full h-full object-contain"
              draggable={false}
            />
          </button>
        ))}
      </div>
      <div className="flex gap-2 shrink-0">
        <button
          onClick={onSetDefault}
          className="px-3 py-1.5 bg-orange-400 text-foreground text-sm rounded hover:bg-orange-500 cursor-pointer transition-colors"
        >
          Set Default
        </button>
        <button
          onClick={onResetAll}
          className="px-3 py-1.5 bg-red-500 text-white text-sm rounded hover:bg-red-600 cursor-pointer transition-colors"
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default CollageMenu;
