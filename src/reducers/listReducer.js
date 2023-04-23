import { CONSTANTS } from "../actions"

let itemID = 2;

const initialState = [
    {
        name: "Grapes",
        id: 0,
        day: 0,
        meal: "Breakfast",
        description: "",
        ingredients: "",
        instructions: ""

    },
    {
        name: "Oranges",
        id: 1,
        day: 0,
        meal: "Breakfast",
        description: "",
        ingredients: "",
        instructions: ""

    }

]

const listReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_MEAL_ITEM: {
            const newItem = {
                name: action.name,
                id: itemID,
                day: action.day,
                meal: action.meal,
                description: action.description,
                ingredients: action.ingredients,
                instructions: action.instructions
            };
            itemID += 1
            return [...state, newItem]
        }
        case CONSTANTS.DELETE_MEAL_ITEM: {
            const listID = action.listID

            const newList = state.filter(listItem => listItem.id !== listID)

            return [...newList]
        }
        case CONSTANTS.EDIT_MEAL_TITLE: {
            const listID = action.listID
            const newTitle = action.newTitle

            const list = state.find((listItem => listItem.id === listID))
            list.name = newTitle
            return [ ...state];
        }
        default:
            return state;
    }
};

export default listReducer;