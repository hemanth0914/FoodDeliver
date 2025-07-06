import { CDN_URL } from '../utils/constants'



const RestaurantCard = (props) => {
    
    const {resData, veg} = props;
    const {name, cuisines, avgRating, sla} = resData?.info;
    return (
        <div className="m-5 flex flex-col shadow-lg hover:bg-gray-100 rounded-md p-2 w-70">
            <img className="w-70 h-70" src={CDN_URL + resData.info.cloudinaryImageId} />
            <div className="flex items-center gap-2">
                <h3 className="res-info">{name}</h3>
                {
                    veg ? (
                        <div className="bg-green-500 p-2 rounded-full"></div>
                    ) : (
                        <div className="bg-red-500 p-2 rounded-full"></div>
                    )
                }
            </div>
            
            <h4 className="res-info">{cuisines.join(", ")}</h4>
            <h4 className="res-info">{avgRating} stars</h4>
            <h5 className="res-info">{sla.deliveryTime} minutes</h5>
        </div>
        )
}


export const PromotedRestaurant = (RestaurantCard) =>{
    return (props) => {
        const veg = true;
        return (
            <div>
                {/* Pass veg along with props */}                   
                <RestaurantCard {...props} veg={veg} />
            </div>
        )
    }
}

export default RestaurantCard;