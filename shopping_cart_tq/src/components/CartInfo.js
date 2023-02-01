import React from 'react';
import { useSelector } from 'react-redux';

export default function CartInfo() {
    const listCart = useSelector(state => state.listCart);
    // tính tổng tiền
    const calTotalAmount = () => {
        let totalAmout = 0;
        listCart.forEach(cart => {
            totalAmout += cart.product.price * cart.quantity;
        });
        return totalAmout;
    }
    let elementInfo = "";
    if (listCart.length == 0) {
        elementInfo = <tr>
            <th colSpan={6}>Empty product in your cart</th>
        </tr>;
    } else {
        elementInfo = <tr>
            <td colSpan={4}>
                There are <b>{listCart.length}</b> items in your shopping cart.
            </td>
            <td colSpan={2} className="total-price text-left">
                {calTotalAmount()} USD
            </td>
        </tr>;
    }
    return (
        <tfoot id="my-cart-footer">
            {/* CART FOOTER */}
            {elementInfo}

        </tfoot>
    )
}