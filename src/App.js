import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Workspace from "./Workspace";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/workspace' element={<Workspace />} />

          <Route path='*' element={<Navigate to='/home' replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
