import { BasketItem } from './BasketItem';
function BasketList(props) {
    const {
        orders,
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = orders.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {orders.length ? (
                orders.map((item) => (
                    <BasketItem
                        key={item.id}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
                ))
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active">
                Общая стоимость: {totalPrice}
            </li>
            <li className="collection-item">
                <button className="secondary-content btn btn-small">
                    Оформить
                </button>
            </li>
            <i
                className="material-icons basket-close"
                onClick={handleBasketShow}>
                close
            </i>
        </ul>
    );
}

export { BasketList };
