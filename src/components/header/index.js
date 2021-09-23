import { Link } from "react-router-dom";

export function NavHead(){
    return (
        <header>
            <h3><Link to="/">Dragon CSS</Link></h3>
            <span><Link to="/">Home</Link></span>
            <input type="search" placeholder="Search"></input>
        </header>
    )
}