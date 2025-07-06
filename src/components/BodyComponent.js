import RestaurantCard, { PromotedRestaurant } from './RestaurantCard'
import { useState, useEffect, useRef } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router'
import useOnlineStatus from '../utils/useOnlineStatus'

const BodyComponent = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    const fetchData = async () =>{
        const data = await fetch("https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        const restaurantData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurantData)
        setFilteredRestaurants(restaurantData)
        localStorage.setItem('restaurantData', JSON.stringify(restaurantData))
        
    }

    useEffect(()=>{
        const restaurantData = localStorage.getItem('restaurantData')   
        if (restaurantData) {
            setListOfRestaurants(JSON.parse(restaurantData))
            setFilteredRestaurants(JSON.parse(restaurantData))
        }
        else {
            fetchData();
        }
    }, [])

    const PromotedRestaurantComponent = PromotedRestaurant(RestaurantCard)


    const onlineStatus = useOnlineStatus()
    if (!onlineStatus) return <h1>Offline, please check your internet connection</h1>

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex justify-between items-center mx-20">
                <div className='search'>
                    <input type="text" className='border border-black rounded-md p-2 mr-2' value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        const filteredList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredList)
                    }} className='bg-blue-500 text-white p-2 rounded-md'>Search</button>
                </div>
                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setFilteredRestaurants(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    filteredRestaurants.map((restaurant) => 
                        (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            {
                                restaurant.info?.veg ? ( <PromotedRestaurantComponent resData={restaurant}x/>) : ( <RestaurantCard resData={restaurant}/>)
                            }
                        </Link>
                    )
                )
                    
                }
            </div>
        </div>
    )
} 

export default BodyComponent;