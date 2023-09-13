import { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'

export const Carousel = () => {
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
        <Box>
            <Typography fontWeight={600}
                sx={{ color: '#1e1e1e', fontSize: '20px', marginBottom: 1 }}>
                Best rated ⭐🏆</Typography>
            <div>
                {
                    movies.map(movie => {
                        return (
                            <div key={movie.id}>
                                <img
                                    style={{
                                        width: '252px',
                                        height: '400px',
                                        objectFit: 'scale-down',
                                    }}
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.name} />
                                {/* <Typography>{movie.name}</Typography> */}
                            </div>
                        )
                    })
                }
            </div>
        </Box>

    )
}