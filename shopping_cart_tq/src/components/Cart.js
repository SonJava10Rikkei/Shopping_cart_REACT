import React from 'react';
import { useState } from 'react';

export default function Cart(props) {
    let { cart, stt } = props;
    let [quantity, setQuantity] = useState(0);
    quantity = (cart.quantity == 0) ? quantity : cart.quantity;
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
                    value={quantity}
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