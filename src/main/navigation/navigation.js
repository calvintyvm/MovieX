import React from "react";
import "./navigation.css";
import Selection from "./selection";

class Navigation extends React.Component{
    render(){
        return(
            <section className = "navigation">
            <Selection/>
            </section>
        )
    }
}

export default Navigation;