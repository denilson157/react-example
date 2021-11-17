import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Movie = ({ title, items }) => {

    const [scrollx, setScrollx] = useState(-800)

    const handleLeftArrow = () => {
        let newValue = scrollx + Math.round(window.innerWidth / 2)
        if (newValue > 0)
            newValue = 0
        setScrollx(newValue)
    }

    const handleRightArrow = () => {
        let newValue = scrollx - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 350
        let calcValue = window.innerWidth - listW

        if ((calcValue) > newValue)
            newValue = (calcValue) - 60

        setScrollx(newValue)
    }

    return (
        <div className="movieLine">
            <h2>Filmes de {title} - clique para ler uma descrição</h2>

            <div className="movieLine--left" onClick={handleLeftArrow}>
                {`<`}
            </div>

            <div className="movieLine--right" onClick={handleRightArrow}>
                {`>`}
            </div>

            <div className="movieLine--listarea">
                <div className="movieLine--list" style={{ marginLeft: scrollx, width: items.results.length * 350 }}>
                    {
                        items.results.length > 0 &&
                        items.results.map((item, index) =>
                            <Link to={`/findMovie/${item.id}`}>
                                <div className="movieLine--item" key={index}>
                                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>)
}

export default Movie