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

        // console.log("Inside constructor")
    }

    async componentDidMount() {
        // console.log("Inside componentDidMount")
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo: {
                name: json.name,
                company: json.company,
                avatar_url: json.avatar_url
            }
        })
    }
    render() {
        // console.log("Inside render")
        const {name, company, avatar_url} = this.state.userInfo
        return (
            <div className="user-card">
                <h1> User</h1>
                <h2>name:{name}</h2>
                <h2>Company: {company}</h2>
                <h2>Avatar: {avatar_url}</h2>
            </div>
        ) 
    }   
}

export default UserClass;