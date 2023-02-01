import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { act_change_notify, act_update_cart } from '../actions';
import { NOTIFY_UPDATE_SUCCESS } from '../constants/message';

export default function Cart(props) {
    let { cart, stt } = props;
    let [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    let cartQuantity = (quantity == 0) ? cart.quantity : quantity;
   
    const handleUpdateCart = () => {
        dispatch(act_update_cart(cart.product.productId, quantity))
        dispatch(act_change_notify(NOTIFY_UPDATE_SUCCESS))

    }
    return (
        <tr>
            <th scope="row">{stt}</th>
            <td>{cart.product.productName}</td>
            <td>{cart.product.price} USD</td>
            <td>
                <input
                    name="cart-item-quantity-1"
                    type="number"
                    min={1}
                    value={cartQuantity}
                    onChange={(event) => setQuantity(event.target.value)}
                />
            </td>
            <td>
                <strong>{cart.product.price * cart.quantity} USD</strong>
            </td>
            <td>
                <a
                    className="label label-info update-cart-item"
                    href="#"
                    data-product=""
                    onClick={handleUpdateCart}
                >
                    Update
                </a>
                <a
                    className="label label-danger delete-cart-item"
                    href="#"
                    data-product=""
                >
                    Delete
                </a>
            </td>
        </tr>
    )
}