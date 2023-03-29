import { useState } from "react"
import Board from "../components/Board"
import Day from "../components/Day"

export default function Planner() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
        console.log(index)
    }
    

    const daysArr = [{ key:1, dayName: "Sunday" }, { key:2, dayName: "Monday" }, { key:3, dayName: "Tuesday" },
        { key:4, dayName: "Wednesday" }, { key: 5, dayName: "Thursday" }, { key:6, dayName: "Friday" }, { key: 7, dayName: "Saturday"}];

   

    return (
        <div className="board">
            <Board />
            
            <div className="content">
                
                
                <div className="week">            
                    {daysArr.map(day => (<DaySelector dayName={day.dayName} key={day.key} state={toggleState} callback={toggleTab} />))}
                </div>


                <Day />

            </div>
        </div>
    )
}


function DaySelector(props) {

    
    
    return (
       
        <div className="day">{props.dayName}</div>
            
    )
    
}