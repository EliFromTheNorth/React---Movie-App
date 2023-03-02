import "./Movie.css"
import data from "../data"
import DeleteButton from "./DeleteButton"
import AllDeleteButton from "./AllDeleteButton"
import ReloadMovieButton from "./ReloadMovieButton"
import { useState } from "react"

const Movie = () => {
    const [movieList, setMovieList] = useState(data)

    const deleteOneMovie = (idNum) => {
      const filteredMovies = movieList.filter( (oneMovie) => {
        return oneMovie.id !== idNum
      })
      setMovieList(filteredMovies)
    }

    const deleteAllMovies = () => {
      setMovieList([])
    }

    const reloadAllMovies = () => {
      setMovieList(data)
    }

    return <section>
    <div className="all-movies">
      {
        data.map( (oneMovie) => {
            const {id, image, title, age, tags, description} = oneMovie

            return <div className="one-movie" key={id}>
                <img src={image} alt ="" />
                <h2>{title}</h2>
                <p>{age}</p>
                <p>{tags}</p>
                <p>{description}</p>
                <DeleteButton deleteMovie={ () => deleteOneMovie(id)}/>
            </div>
        })
      }   
      </div>
      <div className="button-box">
        <AllDeleteButton deleteMovies={deleteAllMovies}/>    
        <ReloadMovieButton reloadMovies={reloadAllMovies}/>
      </div>
    </section>
} 

export default Movie