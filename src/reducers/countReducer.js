import { CONSTANTS } from "../actions"


const initialState = [
    {
        name: "Sunday",
        id: 0,
        breakfastCount: 2,
        lunchCount: 0,
        dinnerCount: 0

    },
    {
        name: "Monday",
        id: 1,
        breakfastCount: 0,
        lunchCount: 0,
        dinnerCount: 0

    },
    {
        name: "Tuesday",
        id: 2,
        breakfastCount: 0,
        lunchCount: 0,
        dinnerCount: 0

    },
    {
        name: "Wednesday",
        id: 3,
        breakfastCount: 0,
        lunchCount: 0,
        dinnerCount: 0

    },
    {
        name: "Thursday",
        id: 4,
        breakfastCount: 0,
        lunchCount: 0,
        dinnerCount: 0

    },
    {
        name: "Friday",
        id: 5,
        breakfastCount: 0,
        lunchCount: 0,
        dinnerCount: 0

    },
    {
        name: "Saturday",
        id: 6,
        breakfastCount: 0,
        lunchCount: 0,
        dinnerCount: 0

    },

]

const countReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_COUNT: {
            
            const name = action.mealName;
            const day = action.day;
            const num = action.num;


            const count = state.find((listItem => listItem.name === day))

            if (name === "Breakfast") {
                count.breakfastCount = count.breakfastCount + num;
            } else if (name === "Lunch") {
                count.lunchCount = count.lunchCount + num;
            } else if (name === "Dinner"){
                count.dinnerCount = count.dinnerCount + num;
            }
            
           
            
            return [...state]
        }
        case CONSTANTS.SUB_COUNT: {
            const name = action.mealName;
            const day = action.day;
            const num = action.num;


            const count = state.find((listItem => listItem.name === day))

            if (name === "Breakfast") {
                count.breakfastCount = count.breakfastCount - num;
            } else if (name === "Lunch") {
                count.lunchCount = count.lunchCount - num;
            } else if (name === "Dinner"){
                count.dinnerCount = count.dinnerCount - num;
            }
            
           
            
            return [...state]
        }
        default:
            return state;
    }
};

export default countReducer;