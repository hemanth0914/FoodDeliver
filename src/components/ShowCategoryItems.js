import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ShowCategoryItems = ({category}) => {
    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        category.card.card.itemCards.map((item) => {
            return (
                <div
                    key={item.card.info.id}
                    className="flex shadow-lg hover:bg-gray-100 rounded-md items-center mx-2 px-5 py-2 my-2 justify-between"
                >
                    <div className="flex flex-0.6">
                        <ul>
                            <li className="text-md font-bold">      
                                {item.card.info.name}
                            </li>
                            <li className="text-sm">
                                Rupees:
                                {item.card.info.price / 100 ||
                                    item.card.info.defaultPrice / 100}
                            </li>
                            <li className="text-sm">
                                Desc: {item.card.info.description}
                            </li>
                        </ul>
                    </div>
                    <div className="relative flex-0.4">
                        <div className="absolute top-2 left-2">
                            <button onClick={() =>handleAddItem(item)} className="bg-black text-white p-2 rounded-full cursor-pointer">Add +</button>
                        </div>
                        <img
                            src={CDN_URL + item.card.info.imageId}
                            alt="food"
                            className="w-50 h-50 rounded-md"
                        ></img>
                    </div>
                    
                </div>
            );
        })
    )
}

export default ShowCategoryItems;