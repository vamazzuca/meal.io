import { CONSTANTS } from "../actions"

let itemID = 0;

const initialState = []

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
                instructions: action.instructions,
                isInRecipeList: action.isInRecipeList
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
        case CONSTANTS.EDIT_MEAL_DESCRIPTION: {
            const listID = action.listID
            const newDescription = action.newDescription

            const list = state.find((listItem => listItem.id === listID))
            list.description = newDescription
            return [ ...state];
        }
        case CONSTANTS.EDIT_MEAL_INSTRUCTIONS: {
            const listID = action.listID
            const newInstructions = action.newInstructions

            const list = state.find((listItem => listItem.id === listID))
            list.instructions = newInstructions
            return [ ...state];
        }
        case CONSTANTS.EDIT_MEAL_INGREDIENTS: {
            const listID = action.listID
            const newIngredients = action.newIngredients

            const list = state.find((listItem => listItem.id === listID))
            list.ingredients = newIngredients
            return [ ...state];
        }
        default:
            return state;
    }
};

export default listReducer;