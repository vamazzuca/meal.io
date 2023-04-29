import Meal from "./Meal"


export default function Day({index, state}) {
    return (
        <div className={state === index ? "meals-active" : "meals-inactive"}>
            <Meal mealName={"Breakfast"} state={state}   />
            <Meal mealName={"Lunch"} state={state}  />
            <Meal mealName = {"Dinner"} state={state} />
        </div>
    )
}