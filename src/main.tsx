import "@scss/main.scss"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Menu from "@/pages/Menu"
import Order from "@/pages/Order"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
