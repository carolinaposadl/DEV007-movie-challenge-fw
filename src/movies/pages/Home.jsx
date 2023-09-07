import { useEffect, useState } from 'react'

export const Home = () => {

    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=8a56be16917f797b5867143a2fa24e2f'
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>
            {
                movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.name} />
                            <p>{movie.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}