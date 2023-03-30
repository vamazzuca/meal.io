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
        default:
            return state;
    }
};

export default listReducer;