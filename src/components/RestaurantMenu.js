import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShowCategoryItems from "./ShowCategoryItems";

const RestaurantMenu = () => {
	const [categories, setCategories] = useState([]);
    const [expandedMap, setExpandedMap] = useState({});

	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);

    const toggleCategory = (index) => {
        setExpandedMap((prev) => (
            {...prev, [index]: !prev[index]}
        ) ) 
    }

	useEffect(() => {
		if (resInfo) {
			const allCards =
				resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards || [];
			const categoriesArray = allCards.filter((card) => {
				return (
					card.card.card["@type"] ===
					"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
				);
			});
			setCategories(categoriesArray);
		}
	}, [resInfo]);

	if (resInfo === null || resInfo === undefined) return <Shimmer />;

	return (
		<div className="flex flex-col items-center">
			{categories.map((category, index) => {
				return (
					<div
						key={category.card.card.title}
						className="p-2 m-2 border-b-2 border-gray-200 w-3/4 items-center"
					>
						<div onClick={() => (
                            toggleCategory(index)
                        )} className="text-lg font-bold p-10 shadow-lg bg-gray-100 flex justify-between">
                            <h2>{category.card.card.title} </h2>
                            {expandedMap[index] ? "▼" : "▲"}
                        </div>
                        {
                            expandedMap[index] ? <ShowCategoryItems category={category}/> : null
                        }
					</div>
				);
			})}
		</div>
	);

	// return (
	//     <div className="menu">
	//         <h1>{resInfo.cards[0].card.card.text}</h1>
	//         <h2>{resInfo.cards[2].card.card.info.avgRatingString} ratings</h2>
	//         <h2>Menu</h2>
	//         <ul>
	//             {
	//                 menuItems.map((item) => {
	//                     return <li key={item.card.info.id}>{item.card.info.name}</li>
	//                 })
	//             }
	//         </ul>

	//     </div>
	// )
};

export default RestaurantMenu;
