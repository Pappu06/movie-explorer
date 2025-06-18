import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../api';
import MovieCard from '../components/MovieCard';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchPopularMovies().then((res) => setMovies(res.data.results));
    }, []);

    return (
        <div>
            <h2 style={{textAlign:"center",color:"white"}}>Popular Movies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6"
            style={{ display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1.5rem",
                padding: "1.5rem",
                backgroundColor: "#0D0D0D",
                color: "#FFFFFF",
                fontFamily: "Arial, sans-serif",
                fontSize: "1rem",
                lineHeight: "1.5",
                textAlign: "center",}}>
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

        </div>
    );
};

export default Home;
