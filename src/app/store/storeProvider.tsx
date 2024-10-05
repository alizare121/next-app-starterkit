"use client";

// store
import { AppStore, makeStore } from "./redux/store";

// types
import type { ReactNode } from "react";

// libraries
import { useRef } from "react";
import { Provider } from "react-redux";

interface ChildrenPropsInterface {
  children: ReactNode;
}

export default function StoreProvider({ children }: ChildrenPropsInterface) {
  //refs
  const storeRef = useRef<AppStore>();

  // Create the store instance the first time this renders
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
