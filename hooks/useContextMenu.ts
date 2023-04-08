import React, { MutableRefObject, useEffect, useRef, useState } from "react";

interface ClickPositionProps {
  x: null | number;
  y: null | number;
}

const clickPosition: ClickPositionProps = {
  x: null,
  y: null,
};

interface UseContextMenuReturn {
  openContextMenu: (e: any) => void;
  closeContextMenu: () => void;
  isContextMenuOpen: boolean;
}

interface UseContextMenuProps {
  contextMenuRef: MutableRefObject<HTMLUListElement | null>;
}

export function useContextMenu({
  contextMenuRef,
}: UseContextMenuProps): UseContextMenuReturn {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const updateContextMenuPosition = () => {
    if (contextMenuRef.current) {
      contextMenuRef.current.style.left = `${clickPosition.x}px`;
      contextMenuRef.current.style.top = `${clickPosition.y}px`;
    }
  };

  useEffect(() => {
    if (isContextMenuOpen) {
      updateContextMenuPosition();
    }
  }, []);

  const openContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    clickPosition.x = event.clientX;
    clickPosition.y = event.clientY;
    setIsContextMenuOpen(true);
  };

  const closeContextMenu = () => {
    setIsContextMenuOpen(false);
  };

  return {
    closeContextMenu,
    openContextMenu,
    isContextMenuOpen,
  };
}
