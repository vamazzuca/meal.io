export default function Meal(props) {
    return (
        <div className="meal-container">
            <h1>{props.mealName}</h1>
            <div className="meal-plan"></div>
        </div>
    )
}