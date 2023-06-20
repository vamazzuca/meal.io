import { useState } from "react"
import Meal from "../components/Meal";
import { connect } from "react-redux"
import Navbar from "../components/NavBar";

function Planner(props) {

    const [toggleState, setToggleState] = useState(0);

    const { counts } = props;
    
    const daysArr = [
        { key: 1, dayName: "Sunday"},
        { key: 2, dayName: "Monday"},
        { key: 3, dayName: "Tuesday"},
        { key: 4, dayName: "Wednesday"},
        { key: 5, dayName: "Thursday"},
        { key: 6, dayName: "Friday"},
        { key: 7, dayName: "Saturday"}
    ];

    

    const toggleTab = (index) => {
        setToggleState(index);
    }





    return (
        <div className="board">
            <Navbar />
            
            <div className="content">             
                
                <div className="week">            
                    {daysArr.map((day, index) =>
                    (<DaySelector
                        index={index}
                        dayName={day.dayName}
                        key={day.key}
                        state={toggleState}
                        callback={toggleTab}
                        counts={counts}
                        
                    />))}
                </div>


                {daysArr.map((day, index) =>
                (<Day
                    index={index}
                    state={toggleState}
                    key={day.key}
                />))}

            </div>
        </div>
    )
}


function DaySelector({ index, dayName, state, callback, counts}) {

    const day = counts.find((listItem => listItem.day === index))
    
    const checkmark = "\u2713"
    return (    
        <div className={state === index ? "day active-day" : "day"} onClick={() => callback(index)}>
            {dayName}
            <div className="day-icons">
                <div className={day.breakfastCount > 0 ? "number-circle-check" : "number-circle"}>{day.breakfastCount > 0 ? checkmark : "B"}</div>          
                <div className={day.lunchCount > 0 ? "number-circle-check" : "number-circle"}>{day.lunchCount > 0 ? checkmark : "L"}</div>
                <div className={day.dinnerCount > 0 ? "number-circle-check" : "number-circle"}>{day.dinnerCount > 0 ? checkmark : "D"}</div>
            </div>
        </div>  
        
    )
    
}

function Day({index, state}) {
    return (
        <div className={state === index ? "meals-active" : "meals-inactive"}>
            <Meal mealName={"Breakfast"} state={state}   />
            <Meal mealName={"Lunch"} state={state}  />
            <Meal mealName = {"Dinner"} state={state} />
        </div>
    )
}

const mapStateToProps = state => ({
    counts: state.counts
})

export default connect(mapStateToProps)(Planner);
