import {Link} from "react-router-dom"
import "./Home.css"
export function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p className="parrafoHome">lorem</p>
            <div className="botones">
               <button> <Link to="/register"> Registro </Link> </button>
                <button> <Link to="/login"> Login </Link> </button> 
            </div>
            
        </div>
    )
}