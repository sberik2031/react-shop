import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const { example } = useContext(ShopContext);
    console.log(example);

    return (
        <li className="collection-item">
            {name}{' '}
            <i
                className="material-icons basket-quantity"
                onClick={() => decQuantity(id)}>
                remove
            </i>{' '}
            x{quantity}{' '}
            <i
                className="material-icons basket-quantity"
                onClick={() => incQuantity(id)}>
                add
            </i>
            ={quantity * price}
            <span className="secondary-content">
                <i
                    className="material-icons basket-delete"
                    onClick={() => removeFromBasket(id)}>
                    close
                </i>
            </span>
        </li>
    );
}

export { BasketItem };
