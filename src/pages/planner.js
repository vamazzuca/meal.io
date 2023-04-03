import { useState } from "react"
import Board from "../components/Board"
import Day from "../components/day";

export default function Planner() {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    
    const daysArr = [{ key:1, dayName: "Sunday" }, { key:2, dayName: "Monday" }, { key:3, dayName: "Tuesday" },
        { key:4, dayName: "Wednesday" }, { key: 5, dayName: "Thursday" }, { key:6, dayName: "Friday" }, { key: 7, dayName: "Saturday"}];

   
    return (
        <div className="board">
            <Board />
            
            <div className="content">             
                
                <div className="week">            
                    {daysArr.map((day, index) => (<DaySelector index={index} dayName={day.dayName} key={day.key} state={toggleState} callback={toggleTab} />))}
                </div>


                {daysArr.map((day, index) => (<Day index={index} state={toggleState} key={day.key} />))}

            </div>
        </div>
    )
}


function DaySelector({index, dayName, state, callback}) {

   
    return (    
        <div className={state === index ? "day active-day" : "day"} onClick={() => callback(index)}>{dayName}</div>  
        
    )
    
}
