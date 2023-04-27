import { useState } from "react"
import Board from "../components/Board"
import Day from "../components/day";

export default function Planner() {

    const [toggleState, setToggleState] = useState(0);

    
    const daysArr = [
        { key: 1, dayName: "Sunday", breakfastCount: 0, lunchCount: 0, dinnerCount: 0 },
        { key: 2, dayName: "Monday", breakfastCount: 0, lunchCount: 0, dinnerCount: 0  },
        { key: 3, dayName: "Tuesday", breakfastCount: 0, lunchCount: 0, dinnerCount: 0  },
        { key: 4, dayName: "Wednesday", breakfastCount: 0, lunchCount: 0, dinnerCount: 0  },
        { key: 5, dayName: "Thursday", breakfastCount: 0, lunchCount: 0, dinnerCount: 0  },
        { key: 6, dayName: "Friday", breakfastCount: 0, lunchCount: 0, dinnerCount: 0  },
        { key: 7, dayName: "Saturday", breakfastCount: 0, lunchCount: 0, dinnerCount: 0  }
    ];

    

    
    const toggleTab = (index) => {
        setToggleState(index);
    }

    var breakfastCount = 0;
    var lunchCount = 0;
    var dinnerCount = 0;

    const getBreakfastCount = (data) => {
        breakfastCount = data;
        console.log(breakfastCount)
    }

    const getLunchCount = (data, dayName) => {
        lunchCount = data;
    }

    const getDinnerCount = (data, dayName) => {
        dinnerCount = data;
    }
    

   console.log(lunchCount)
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
                        breakfastCount={breakfastCount}
                        lunchCount={lunchCount}
                        dinnerCount = {dinnerCount}
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


function DaySelector({index, dayName, state, callback, breakfastCount, lunchCount, dinnerCount }) {

    const checkmark = "\u2713"
    console.log(lunchCount)
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
