import React from "react";


const Film = ({id, title, url}) => {

    return (
        <>
        <li><a href={url} target="_blank">{title}</a></li>
        </>
    )
}
export default Film;