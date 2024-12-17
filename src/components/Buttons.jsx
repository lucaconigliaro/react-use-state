function Buttons({ title, buttonType, handleOnClick }) {
    return (
        <button
            onClick={handleOnClick}
            className={`btn btn-${buttonType}`}
        >
            {title}
        </button>
    )
}

export default Buttons;