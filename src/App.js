import Planner from "./pages/planner";
import Recipes from "./pages/recipes";
import {Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <>
      <div className="body">
        
        
          <Routes>
            <Route path="/" element={<Navigate replace to="/planner" />} />
            <Route path="/planner" element={<Planner />}/>
            <Route path="/recipes" element={<Recipes/>}/>
          </Routes>
        </div>
      
    </>
  )

}

export default App;
