import { Link } from "react-router-dom"


export default function Board(props) {
    return <div className="board">
        <div className="sidebar">
            <div className="title">
                <h1>Meal.io</h1>
            </div>
            <ul className="options">
                <li className="active">
                    <Link to="/planner">Planner</Link>
                </li>
                <li>
                    <Link to="/recipes">Recipes</Link>
                </li>
            </ul>
        </div>

        <div className="content">
            <h1>{props.name}</h1>
        </div>

        
    </div>
}