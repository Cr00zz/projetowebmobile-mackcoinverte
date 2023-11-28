import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ValeQuanto from "./pages/quantovale";

export default function App(){
    return(
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/valequanto" element={<ValeQuanto />} />
        </Routes>
      </BrowserRouter>
    );
}