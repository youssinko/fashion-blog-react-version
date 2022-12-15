import { Link } from "react-router-dom"
export default function Nav(){

    return(
        <div className="end">
    <Link to="/contiue" class="continue">Continues...</Link>
    
        <Link to="/women">
            <div>Women's</div>
            </Link>
        <Link to="/men">
            <div>Men's</div>
            </Link>
        <Link to="/on">
            <div>On The Street</div>
            </Link>
        <Link to="/cat">
            <div>The Catwalk</div>
            </Link>
        <Link to="/ad">
            <div>AdWatch</div>
            </Link>
        <Link to="/about">
            <div>About</div>
            </Link>
        <Link to="/tip">
            <div>Tips</div>
            </Link>
        </div>
    )
}