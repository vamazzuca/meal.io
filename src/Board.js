export default function Board() {
    return <nav className="board">
        <div className="sidebar">
            <div className="title">
                <h1>Meal.io</h1>
            </div>
            <div className="options">
                <div className="option">
                    <h2>Planner</h2>
                </div>
                <div className="option">
                    <h2>Recipes</h2>
                </div>
                
            </div>
        </div>

        <div className="content"></div>
    </nav>
}