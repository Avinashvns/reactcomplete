import { Increment, Decrement } from "../action/Count_action";

const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Increment:
            return {
                count: state.count + 1
            };
        case Decrement:
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

export default counterReducer;
