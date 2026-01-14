import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
    <Toaster position="top-center" toastOptions={{duration:4000,style:{fontSize:"14px"}}}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>

    </>
    
  );
}

export default App;
