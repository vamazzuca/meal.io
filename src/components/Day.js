import Meal from "./Meal"


export default function Day({index, state}) {
    return (
        <div className={state === index ? "meals-active" : "meals-inactive"}>
            <Meal mealName={"Breakfast"}/>
            <Meal mealName = {"Lunch"}/>
            <Meal mealName = {"Dinner"}/>
        </div>
    )
}