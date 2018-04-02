import React from "react";
import "./movies.css";
import MovieListItem from "./MovieListItem";

const movies = ["Breaking Bad","Narcos", "Game of Thrones"];

class Movies extends React.Component{
    componentDidMount(){
        const apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=e487d8aa73d8fceee7247c65a3379a4d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
        console.log("Before or After the data?");
    }



    render(){
        return(
            <section>
                <ul className ="movies">
                {
                    movies.map((title,index)=>(
                        <MovieListItem key={index.toString()} title={title}/>
                    ))
                }
                </ul>
            </section>
        )
    }
}

export default Movies;