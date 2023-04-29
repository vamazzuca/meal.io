import { useState } from "react"
import Board from "../components/Board"
import Day from "../components/day";

export default function Planner() {

    const [toggleState, setToggleState] = useState(0);
    const [breakfastCount, setbreakfastCount] = useState("0,0,0,0,0,0,0");
    const [lunchCount, setLunchCount] = useState("0,0,0,0,0,0,0");
    const [dinnerCount, setDinnerCount] = useState("0,0,0,0,0,0,0");


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


    const getBreakfastCount = (data, day) => {

        let countArr = breakfastCount.split(",");
        countArr[day] = data;
        let countStr = countArr.toString();
        setbreakfastCount(countStr);
        
        
    }

    const getLunchCount = (data, day) => {
        let countArr = lunchCount.split(",");
        countArr[day] = data;
        let countStr = countArr.toString();
        setLunchCount(countStr);
    }

    const getDinnerCount = (data, day) => {
        let countArr = dinnerCount.split(",");
        countArr[day] = data;
        let countStr = countArr.toString();
        setDinnerCount(countStr);
    }
    
    const getCountNum = (index, state) => {
        let countArr= state.split(","); 
        return countArr[index]
    }

   
    return (
        <div className="board">
            <Board />
            
            <div className="content">             
                
                <div className="week">            
                    {daysArr.map((day, index) =>
                    (<DaySelector
                        index={index}
                        dayName={day.dayName}
                        key={day.key}
                        state={toggleState}
                        callback={toggleTab}
                        breakfastCount={getCountNum(index, breakfastCount)}
                        lunchCount={getCountNum(index, lunchCount)}
                        dinnerCount = {getCountNum(index, dinnerCount)}
                    />))}
                </div>


                {daysArr.map((day, index) =>
                (<Day
                    index={index}
                    state={toggleState}
                    key={day.key}
                    getBreakfastCount={getBreakfastCount}
                    getLunchCount={getLunchCount}
                    getDinnerCount = {getDinnerCount}
                />))}

            </div>
        </div>
    )
}


function DaySelector({ index, dayName, state, callback, breakfastCount, lunchCount, dinnerCount }) {
    
    
    const checkmark = "\u2713"
    return (    
        <div className={state === index ? "day active-day" : "day"} onClick={() => callback(index)}>
            {dayName}
            <div className="day-icons">
                <div className={breakfastCount > 0 ? "number-circle-check" : "number-circle"}>{breakfastCount > 0 ? checkmark : "B"}</div>          
                <div className={lunchCount > 0 ? "number-circle-check" : "number-circle"}>{lunchCount > 0 ? checkmark : "L"}</div>
                <div className={dinnerCount > 0 ? "number-circle-check" : "number-circle"}>{dinnerCount > 0 ? checkmark : "D"}</div>
            </div>
        </div>  
        
    )
    
}
