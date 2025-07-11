import {Link, Outlet} from "React-router-dom";
const Dashboard=()=>{
    return(
        <>
        <Link to="lipstick">
        lipstick
        </Link>
        <Link to="kitchen">
        kitchen
        </Link>
        <Link to="dresses">
        dresses
        </Link>
        <Link to="perfumes">
        perfumes
        </Link>
        <Link to="oils">
        oils
        </Link>
        <Outlet></Outlet>
        </>
    )
}
export default Dashboard