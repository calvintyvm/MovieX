import React from "react";
import "./main.css";
import Navigation from "./navigation/navigation";
import Movies from "./movies/movies";

class Main extends React.Component{
    render(){
        return(
            <section className="main">
            <Navigation />
            <Movies />
            </section>
        )
    }
}
export default Main;