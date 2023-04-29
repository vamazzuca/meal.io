import { CONSTANTS } from "../actions"


const initialState = [
    {
        day: 0,
        id: 0,
        breakfastCount: 2,
        lunchCount: 0,
        dinnerCount: 0

    },
    {
        day: 1,
        id: 1,
        breakfastCount: 0,
        lunchCount: 0,
        dinnerCount: 0

    },
    {
        day: 2,
        id: 2,
        breakfastCount: 0,
        lunchCount: 0,
        dinnerCount: 0

    },
    {
        day: 3,
        id: 3,
        breakfastCount: 0,
        lunchCount: 0,
        dinnerCount: 0

    },
    {
        day: 4,
        id: 4,
        breakfastCount: 0,
        lunchCount: 0,
        dinnerCount: 0

    },
    {
        day: 5,
        id: 5,
        breakfastCount: 0,
        lunchCount: 0,
        dinnerCount: 0

    },
    {
        day: 6,
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


            const count = state.find((listItem => listItem.day === day))

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


            const count = state.find((listItem => listItem.day === day))

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