import Board from "../components/Board"
import AddNewRecipeButton from "../components/AddNewRecipeButton"
import { connect } from "react-redux"
import RecipeItem from "../components/RecipeItem"

function Recipes(props) {


    const { lists } = props;
    return (
        <div className="board">
            <Board />
            <div className="recipe-content">
                <div className="recipe-container">
                    <div className="recipes">
                        {lists.map(list => (list.isInRecipeList === true
                        ? <RecipeItem name={list.name} key={list.id} listID={list.id} description={list.description } ingredients={list.ingredients } instructions={ list.instructions} />
                        : null))}
                    </div>
                    <AddNewRecipeButton size={60} isInRecipeList={true} />
                </div>
            </div>
        </div>
        
    )
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps)(Recipes);