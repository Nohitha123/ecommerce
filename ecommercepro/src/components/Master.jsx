import {BrowserRouter,Route,Routes} from "React-router-dom";
import Lipsticks from "./Lipsticks";
import Kitchen from "./Kitchen";
import Dresses from "./Dresses";
import Oils from "./Oils";
import Perfumes from "./Perfumes";
import Error from "./Error";
import Dashboard from "./Dashboard";
import Login from "./Login";
const Master=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                  <Route path="lipstick" element={<Lipsticks></Lipsticks>}></Route>
                  <Route path="kitchen" element={<Kitchen></Kitchen>}></Route>
                  <Route path="dresses" element={<Dresses></Dresses>}></Route>
                  <Route path="oils" element={<Oils></Oils>}></Route>
                  <Route path="perfumes" element={<Perfumes></Perfumes>}></Route>
            </Route>
            <Route path="/error" element={<Error></Error>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Master