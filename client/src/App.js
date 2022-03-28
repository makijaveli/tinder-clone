import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Boarding from "./pages/Boarding";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/boarding" element={<Boarding/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
