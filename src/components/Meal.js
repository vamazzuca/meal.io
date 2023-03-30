import RecipeItem from "./RecipeItem"
import { connect } from "react-redux"
import AddNewRecipeButton from "./AddNewRecipeButton";

function Meal(props) {

    const { lists } = props;
    return (
        <div className="meal-container">
            <h1>{props.mealName}</h1>
            <div className="meal-plan">
                <div className="plans">
                    {lists.map(list => (list.meal === props.mealName && list.day === props.state ? <RecipeItem name={list.name} key={ list.id} /> : null))}
                </div>
            <AddNewRecipeButton />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps) (Meal);