import { Link } from "react-router-dom";

export const listOfContent = ["Alert", "Avatar", "Buttons"];

export function SideBar(){
    return <nav>
        {listOfContent.map((content,index)=>{
            let newpath= content.toLowerCase();
        return <Link to={`/${newpath}`}><li key={index}>{content}</li></Link>
    })}
    </nav>
}