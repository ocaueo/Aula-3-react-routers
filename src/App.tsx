import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./assets/pages/PageHome"
import PageAbout from "./assets/pages/PageAbout";
import './style.css'
import Header from "./assets/components/Header";

function App() {


  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<PageHome />}/>
          <Route path='/sobre' element={<PageAbout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
