"use client";

import { ASSET_CATALOG } from "./collageDefaults";

const CollageMenu = ({ onAddElement, onSetDefault, onResetAll, onDone }) => {
  return (
    <div className="absolute flex bottom-0 left-0 right-0 z-110 bg-background border-t-4 border-orange-400">
      <div className="flex gap-2 overflow-x-auto flex-1 p-2 bg-foreground">
        {ASSET_CATALOG.map((asset) => (
          <button
            key={asset.src}
            onClick={() => onAddElement(asset)}
            className="shrink-0 w-20 h-20 mt-1 bg-orange-100/10 rounded border border-orange-400/30 hover:border-orange-400 p-1 cursor-pointer transition-colors"
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
      <div className="flex flex-col h-full gap-2 bg-background pt-4 px-4">
        <div className="flex gap-2">
          <button
            onClick={onResetAll}
            className="px-3 py-1.5 bg-red-400 text-white text-sm rounded hover:bg-red-500 cursor-pointer transition-colors"
          >
            Clear All
          </button>
          <button
            onClick={onSetDefault}
            className="px-3 py-1.5 border-2 border-red-400 text-red-400 text-sm rounded hover:bg-red-400 hover:text-white cursor-pointer transition-colors"
          >
            Reset Default
          </button>
        </div>
        <button
          onClick={onDone}
          className="px-3 py-1.5 border-2 border-foreground text-foreground text-sm rounded hover:bg-foreground hover:text-background cursor-pointer transition-colors"
        >
          Done editing
        </button>
      </div>
    </div>
  );
};

export default CollageMenu;
