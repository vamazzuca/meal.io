import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function Board() {
    return (
        <div className="sidebar">
            <div className="title">
                <h1>Meal.io</h1>
            </div>
            <ul className="options">
                <CustomLink to="/planner">Planner</CustomLink>
                <CustomLink to="/recipes">Recipes</CustomLink> 
            </ul>
        </div>
    
    )
}


function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}