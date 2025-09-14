
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Homes from "./pages/Homes";

export default function App() {
  return (
    <BrowserRouter 
    // future={{ v7_startTransition:true,v7_relativeSplatPath:true}}
    >
    {/* <Toaster position="top-right"/> */}
    <Routes>
      <Route path="/" element={<Homes/>}>
        
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
