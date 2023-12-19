import { LOGO_URL } from "../utils/constants";
import Userclass from "./Userclass";
import React from "react";

class About extends React.Component {

  constructor (props) {
    super(props);
  }
componentDidMount() {

}

componentWillUnmount () {
  
}


  render() {
    return (
      <div className="flex flex-col items-center text-center my-[8rem] text-3xl leading-10">
        <img className="h-48 rounded-full m-5" src={LOGO_URL} alt="" />
        <h1>Welcome to Meet Our Team.</h1>

        <Userclass name={"Mouli"} location={"Coimbatore"} />
      </div>
    );
  }
}

export default About;
