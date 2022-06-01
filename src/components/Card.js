function Card({item, id, handleClick}) {

    const itemClass = item.status ? " active " + item.status : ""

    return(
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="memory card"></img>
        </div>
    )
}

export default Card;