import Meal from "./Meal"


export default function Day({index, state, getBreakfastCount, getLunchCount, getDinnerCount}) {
    return (
        <div className={state === index ? "meals-active" : "meals-inactive"}>
            <Meal mealName={"Breakfast"} state={state} getCount={getBreakfastCount}  />
            <Meal mealName={"Lunch"} state={state} getCount={getLunchCount} />
            <Meal mealName = {"Dinner"} state={state} getCount={getDinnerCount}/>
        </div>
    )
}