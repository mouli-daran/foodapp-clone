import React from "react";

class Userclass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name : "Dummy",
                location : "Dummy",
            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/mouli-daran");
        const json = await data.json();

        console.log(json);

        this.setState ({
            userInfo: json,
        })
    };

    render () {
        const {name , location , avatar_url
        } = this.state.userInfo;
        return (
            <div className="user-class leading-10">
            
                <h1>{name} , Developer</h1>
                <h2></h2>
                <h3>{location}</h3>
            </div>
        );
    }
}

export default Userclass;