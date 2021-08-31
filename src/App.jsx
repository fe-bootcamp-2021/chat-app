import React from "react";
import { lazy, Suspense } from "react";

import { useAuth } from "./hooks/useAuth.hook";
const AuthenticatedApp = lazy(() =>
  import("./components/AuthenticatedApp/AuthenticatedApp")
);
const UnAuthenticatedApp = lazy(() =>
  import("./components/UnAuthenticatedApp/UnAuthenticatedApp")
);

import "./root.css";
import "./App.css";

export function App() {
  const { user } = useAuth();

  if (user === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </Suspense>
    </>
  );
}
