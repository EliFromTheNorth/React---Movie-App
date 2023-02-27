import "./DeleteButton.css"

const DeleteButton = (props) => {
    return (
        <button className="delete-button" onClick={props.deleteMovie}>Delete movie</button>
    )

}

export default DeleteButton