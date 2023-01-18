import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../Utils/ErrorFallback";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";
import RoutesPaths from "../../Utils/RoutePaths.json";
import CreateBill from "../CreateBill";

export default function Layout() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${RoutesPaths.home}`} element={<Home />} />
        <Route path={`/${RoutesPaths.createBill}`} element={<CreateBill />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}
