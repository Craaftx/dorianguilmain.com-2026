"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { SECTIONS } from "./sections";

const SectionContext = createContext();

export function SectionProvider({ children }) {
  const [currentId, setCurrentId] = useState("home");

  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash.replace("#", "") || "home";
      if (SECTIONS.some((s) => s.id === hash)) {
        setCurrentId(hash);
      }
    }
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const currentIdRef = useRef(currentId);
  useEffect(() => {
    currentIdRef.current = currentId;
  }, [currentId]);

  const setSection = useCallback((id) => {
    if (id === currentIdRef.current) return;
    window.history.replaceState(null, "", `#${id}`);
    setCurrentId(id);
  }, []);

  return (
    <SectionContext value={{ currentId, setSection }}>
      {children}
    </SectionContext>
  );
}

export function useSection() {
  return useContext(SectionContext);
}
