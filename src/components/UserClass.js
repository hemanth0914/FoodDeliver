import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            userInfo: {
                name: "Hemanth",
                company: "Uber",
                avatar_url: "dummy"
            }
        }

    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()
        this.setState({
            userInfo: {
                name: json.name,
                company: json.company,
                avatar_url: json.avatar_url
            }
        })
    }
    render() {
        const {name, company, avatar_url} = this.state.userInfo
        return (
            <div className="flex flex-col w-200 bg-gray-50 p-4 rounded-md shadow-md">
                <h1> User</h1>
                <h2>name: Hemanth</h2>
                <h2>Company: FAANG</h2>
            </div>
        ) 
    }   
}

export default UserClass;