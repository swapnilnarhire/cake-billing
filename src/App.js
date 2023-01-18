import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Containers/Layout";

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Suspense>
  );
}
