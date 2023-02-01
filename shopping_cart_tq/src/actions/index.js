import * as types from "../constants/actionType"
export const act_buy_product = (product, quantity) => {
    return {
        type: types.BUY_PRODUCT,
        payload: { product, quantity }
    }
}
export const act_change_notify = (message) => {
    return {
        type: types.CHANGE_NOTIFY,
        payload: message
    }
}