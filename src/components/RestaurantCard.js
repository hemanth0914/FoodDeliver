import { CDN_URL } from '../utils/constants'



const RestaurantCard = (props) => {
    
    const {resData} = props;
    const {name, cuisines, avgRating, sla} = resData?.info;
    return (
        <div className="res-card">
        <img className="res-logo" src={CDN_URL + resData.info.cloudinaryImageId } alt="logo" />
        <h3 className="res-info">{name}</h3>
        <h4 className="res-info">{cuisines.join(", ")}</h4>
        <h4 className="res-info">{avgRating} stars</h4>
        <h5 className="res-info">{sla.deliveryTime} minutes</h5>
    </div>
    )
}

export default RestaurantCard;