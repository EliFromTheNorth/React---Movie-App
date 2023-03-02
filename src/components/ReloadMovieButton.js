import "./ReloadMovieButton.css"

const ReloadMovieButton = (props) => {
    return (
        <button className="reload-movies-button" onClick={props.reloadMovies}>Reload All</button>
    )
}

export default ReloadMovieButton