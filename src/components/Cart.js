import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
	const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)
    const getCartActualItems = () => {
        const itemCountMap = {};

        cartItems.forEach((item) => {
            const itemId = item.card.info.id
            const itemName = item.card.info.name
            const itemPrice = item.card.info.price / 100 || item.card.info.defaultPrice / 100
            const itemImage = CDN_URL + item.card.info.imageId

            if (item.card.info.id in itemCountMap) {
                itemCountMap[item.card.info.id].count += 1
            } else {
                itemCountMap[item.card.info.id] = {
                    name: itemName,
                    price: itemPrice,
                    image: itemImage,
                    count: 1
                }
            }
        })
        return itemCountMap
    }

    const cartActualItems = getCartActualItems()
    console.log(cartActualItems)


    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }
	return (
		<div className="m-4">
			<h1 className="text-3xl font-bold">Cart Items</h1>
			<div>
				{Object.entries(cartActualItems).map(([id, item]) => {
					return (
						<div
							key={id}
							className="flex justify-between items-center m-4 p-4 shadow-md bg-gray-100 rounded-md hover:bg-gray-200"
						>
							<img className="w-40 h-40" src={item.image} alt="food" />
							<div className="flex flex-col justify-between">
								<h2>{item.name}</h2>
								<h3>
									Rs.{" "}
									{item.price}
								</h3>
                                <p>Quantity: {item.count}</p>
							</div>
							<div>
								<button onClick={() => handleRemoveItem(id)} className="bg-black text-white p-2 rounded-md hover:bg-gray-800 cursor-pointer">
									Remove
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Cart;
