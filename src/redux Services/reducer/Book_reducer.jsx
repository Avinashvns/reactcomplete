import { TITLE, AUTHOR } from "../action/Book_action"

const initialState = {
    mytitle: "Let Us C",
    myauthor: "Avinash"
}


const bookData = (state = initialState, action) => {
    switch (action.type) {
        case TITLE:
            return {
                title: "Java"
            }
        case AUTHOR:
            return {
                author: "Ram Ji"
            }
        default:
            return state;

    }
}
export default bookData;
