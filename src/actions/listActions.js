import { CONSTANTS } from "../actions";

export const addMealItem = (name, day, meal) => {
    return {
        type: CONSTANTS.ADD_MEAL_ITEM,
        name,
        day,
        meal,
    };
}

export const deleteMealItem = (listID) => {
    return {
        type: CONSTANTS.DELETE_MEAL_ITEM,
        listID
    }
}