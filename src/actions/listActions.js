import { CONSTANTS } from "../actions";

export const addMealItem = (name, day, meal,description, ingredients, instructions ) => {
    return {
        type: CONSTANTS.ADD_MEAL_ITEM,
        name,
        day,
        meal,
        description,
        ingredients,
        instructions
    };
}

export const deleteMealItem = (listID) => {
    return {
        type: CONSTANTS.DELETE_MEAL_ITEM,
        listID
    }
}


export const editMealDescription = (listID, newDescription) => {
    return {
        type: CONSTANTS.EDIT_MEAL_DESCRIPTION,
        listID,
        newDescription
    }
}

export const editMealIngredients = (listID, newIngredeients) => {
    return {
        type: CONSTANTS.EDIT_MEAL_INGREDIENTS,
        listID,
        newIngredeients
    }
}

export const editMealInstructions = (listID, newInstructions) => {
    return {
        type: CONSTANTS.EDIT_MEAL_INSTRUCTIONS,
        listID,
        newInstructions
    }
}


export const editMealTitle = (listID, newTitle) => {
    return {
        type: CONSTANTS.EDIT_MEAL_TITLE,
        listID,
        newTitle
    }
}