import React, { useEffect, useState } from 'react'
import MoviesService from '../../services/movies'


const Movie = (props) => {
    const [horrorMovie, sethorrorMovie] = useState(null)

    useEffect(() => {

        const carregarFilme = async () => {
            const id = props.match.params.id
            if (id) {
                let movie = await MoviesService.getMovieInfo(id)

                
                sethorrorMovie(movie)
            }

        }

        carregarFilme()

    }, []);



    return (
        <div>

            {
                horrorMovie ?
                    <div className="row mx-0">
                        <div className="col-6">
                            <div className="d-block">
                                <label className="mr-2">Nome: </label>
                                <label className="h5">{horrorMovie.title}</label>
                            </div>
                            <div className="d-block">
                                <label className="mr-2">Gêneros: </label>
                                <label className="h5">{horrorMovie.genres.map(x => x.name).join(', ')}</label>
                            </div>

                            <div className="d-block">
                                <label className="mr-2">Sinopse: </label>
                                <label className="h5">{horrorMovie.overview}</label>
                            </div>


                            <div className="d-block">
                                <label className="mr-2">Data lançamento: </label>
                                <label className="h5">{horrorMovie.release_date}</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src={`https://image.tmdb.org/t/p/w400${horrorMovie.poster_path}`} alt={horrorMovie.original_title} />
                        </div>
                    </div>
                    :
                    <>
                        <label>Filme não encontrado</label>
                    </>
            }
        </div>
    )
}


export default Movie;
