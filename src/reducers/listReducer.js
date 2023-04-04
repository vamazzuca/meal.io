import { CONSTANTS } from "../actions"

let itemID = 2;

const initialState = [
    {
        name: "Grapes",
        id: 0,
        day: 0,
        meal: "Breakfast"

    },
    {
        name: "Oranges",
        id: 1,
        day: 0,
        meal: "Breakfast"

    }

]

const listReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_MEAL_ITEM:
            const newItem = {
                name: action.name,
                id: itemID,
                day: action.day,
                meal: action.meal
            };
            itemID += 1
            return [...state, newItem]
        case CONSTANTS.DELETE_MEAL_ITEM:
            const listID = action.listID

            const newList = state.filter(listItem => listItem.id !== listID)

            return [...newList]
        default:
            return state;
    }
};

export default listReducer;