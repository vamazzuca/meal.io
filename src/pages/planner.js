import Board from "../components/Board"

export default function Planner() {
    return (
        <div className="board">
            <Board />
            
            <div className="content">
                

                <div className="week">
                    <div className="day">Sunday</div>
                    <div className="day">Monday</div>
                    <div className="day">Tuesday</div>
                    <div className="day">Wednesday</div>
                    <div className="day">Thursday</div>
                    <div className="day">Friday</div>
                    <div className="day">Saturday</div>
                        

                </div>

            </div>
        </div>
    )
}