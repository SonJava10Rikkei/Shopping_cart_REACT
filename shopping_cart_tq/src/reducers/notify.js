import { CHANGE_NOTIFY } from "../constants/actionType";
const initialState = "Ready to buy!!!";
const notify = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NOTIFY:
            state = action.payload;
            return state;
        default:
            return state;
    }

}
export default notify;