import { useEffect, useState } from "react" 
import Shimmer from "./Shimmer"
import { useParams } from "react-router"
import useRestaurantMenu from "../utils/useRestaurantMenu"


const RestaurantMenu = () => {
    const [menuItems, setMenuItems] = useState([])

    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)
    
    useEffect(() => {
        if (resInfo) {
            setMenuItems(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        }
    }, [resInfo])

    if (resInfo === null || resInfo === undefined) return <Shimmer />

    return (
        <div className="menu">
            <h1>{resInfo.cards[0].card.card.text}</h1>
            <h2>{resInfo.cards[2].card.card.info.avgRatingString} ratings</h2>
            <h2>Menu</h2>
            <ul>
                {
                    menuItems.map((item) => {
                        return <li key={item.card.info.id}>{item.card.info.name}</li>
                    })
                }
            </ul> 
                
        </div>
    )
}

export default RestaurantMenu;