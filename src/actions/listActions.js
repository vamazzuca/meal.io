import { CONSTANTS } from "../actions";

export const addMealItem = (name, day, meal) => {
    return {
        type: CONSTANTS.ADD_MEAL_ITEM,
        name,
        day,
        meal,
    };
}