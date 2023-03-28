import Meal from "./Meal"


export default function Day(props) {
    return (
        <div className="meals">
            <Meal mealName = "Breakfast"/>
            <Meal mealName = "Lunch"/>
            <Meal mealName = "Dinner"/>
        </div>
    )
}