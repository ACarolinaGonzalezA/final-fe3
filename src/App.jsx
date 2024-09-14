
import { Route, Routes } from "react-router-dom";
import {routes} from "./utils/routes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { useDentistStates } from "./utils/Context";



function App() {
    const { state} = useDentistStates();
   
    return (
      <div className={state.theme == "dark"? "app-dark": "app"}>
          <Navbar/>
          <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.home2} element={<Home />} />
              <Route path={routes.favs} element={<Favs />} />
              <Route path={routes.contact} element={<Contact />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path={routes.notFound} element={<h1>Page not Found</h1>} />
          </Routes>
          <Footer/>
         
      </div>
  );
}

export default App;
