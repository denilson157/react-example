import React, { useEffect, useState } from 'react'
import MovieLine from '../movies/MovieLine'
import MoviesService from '../../services/movies'


const Movie = () => {
    const [horrorMoviesList, setHorrorMoviesList] = useState([])

    useEffect(() => {

        const loadAll = async () => {
            let list = await MoviesService.getHorrorMovieList()

            setHorrorMoviesList(list)
        }

        loadAll();

    }, [])


    return (
        <div>
            {
                horrorMoviesList.map((item, index) => <MovieLine key={index} title={item.title} items={item.items} />)
            }
        </div>
    )
}


export default Movie;
