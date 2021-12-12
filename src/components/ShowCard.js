import React from "react";
import "./MyFolder_classes/menu_style.css"

function ShowCard({props}) {
    let {id, title, description} = props;

    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}

export default ShowCard;