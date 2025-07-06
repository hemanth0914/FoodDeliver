import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return <div className="flex flex-col items-center h-screen">
        <h1 className="text-2xl font-bold m-10">About Us Page</h1>
        <UserClass name="boy"/>
    </div>
}

export default About;