import { CHANGE_NOTIFY } from "../constants/actionType";
import { NOTIFY_READ } from "../constants/message";
const initialState = NOTIFY_READ;
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