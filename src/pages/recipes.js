import Board from "../components/Board"
import AddNewRecipeButton from "../components/AddNewRecipeButton"

export default function Recipes() {
    return (
        <div className="board">
            <Board />
            <div className="recipe-content">
                <div className="recipe-container">
                    <div className="recipes"></div>
                    <AddNewRecipeButton size={60} isInRecipeList={false} />
                </div>
            </div>
        </div>
        
    )
}