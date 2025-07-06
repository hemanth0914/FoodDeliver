import { CDN_URL } from "../utils/constants";

const ShowCategoryItems = ({category}) => {
    return (
        category.card.card.itemCards.map((item) => {
            return (
                <div
                    key={item.card.info.id}
                    className="flex flex-row shadow-lg hover:bg-gray-100 rounded-md items-center mx-2 px-5 py-2 my-2 justify-between"
                >
                    <div>
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
                    <img
                        src={CDN_URL + item.card.info.imageId}
                        alt="food"
                        className="w-40 h-40 rounded-md"
                    ></img>
                </div>
            );
        })
    )
}

export default ShowCategoryItems;