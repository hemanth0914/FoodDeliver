import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router'
import useOnlineStatus from '../utils/useOnlineStatus'

const BodyComponent = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    useEffect(()=>{
        fetchData();
    }, [])


    const fetchData = async () =>{
        const data = await fetch("https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json)
        const restaurantData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restaurantData)
        setListOfRestaurants(restaurantData)
        setFilteredRestaurants(restaurantData)
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        
    }

    const onlineStatus = useOnlineStatus()
    if (!onlineStatus) return <h1>Offline, please check your internet connection</h1>

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className='search'>
                    <input type="text" className='search-box' value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        console.log(searchText)
                        const filteredList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredList)
                    }} className='search-btn'>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setFilteredRestaurants(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => 
                        (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            <RestaurantCard  resData={restaurant}/>
                        </Link>
                    )
                )
                    
                }
            </div>
        </div>
    )
} 

export default BodyComponent;