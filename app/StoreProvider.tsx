"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store/store";

export default function StoreProvider({
  // count,
  children,
}: {
  // count: number;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // storeRef.current.dispatch()
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
