import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ValeQuanto from "./pages/QuantoVale";

export default function App(){
    return(
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home isCripto={false}/>} />
          <Route path="/isCripto" element={<Home isCripto={true}/>} />
          <Route path="/valequanto" element={<ValeQuanto isCripto={false}/>} />
          <Route path="/valequanto/isCripto" element={<ValeQuanto isCripto={true}/>} />
        </Routes>
      </BrowserRouter>
    );
}