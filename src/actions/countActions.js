import { CONSTANTS } from "../actions";


export const addCount = (mealName, day, num ) => {
    return {
        type: CONSTANTS.ADD_COUNT,
        mealName,
        day,
        num,
    };
}

export const subCount = (mealName, day, num ) => {
    return {
        type: CONSTANTS.SUB_COUNT,
        mealName,
        day,
        num,
    };
}