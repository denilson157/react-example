const API_KEY = 'e7a11df02151175c2b20f723cc8545ec'
const API_BASE = 'https://api.themoviedb.org/3'


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();

    return json
}

const auth = `&language=pt-BR&api_key=${API_KEY}`

const Retorno = {
    getHorrorMovieList: async () => {
        return [
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27${auth}`)
            }
        ]
    },
    getMovieInfo: async (movieId) => {
        let info = {}

        if (movieId) {
            info = await basicFetch(`/movie/${movieId}?${auth}`)
        }

        return info
    }
}

export default Retorno