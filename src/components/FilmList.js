import React from "react";
import Film from "./Film";


const FilmList = ({ films }) => {

    const filmDetails = films.map((film) => {

        return (

            <Film id={film.id} title={film.title} url={film.url} />
        )
    })

    return (
        <>
        {filmDetails}
        </>
    )
}

export default FilmList;