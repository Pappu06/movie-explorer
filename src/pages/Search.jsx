
import { useState } from 'react';
import { searchMovies } from '../api';
import MovieCard from '../components/MovieCard';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const res = await searchMovies(query);
        setResults(res.data.results);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <form onSubmit={handleSearch} className="flex justify-center mt-6">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-2/3 sm:w-1/2 px-4 py-2 rounded-l-md outline-none bg-[#1F1F1F] text-white placeholder-gray-400 border border-gray-600"
                    style={{ fontFamily: 'Arial, sans-serif', 
                        fontSize: '1.5rem', 
                        color: '#FFFFFF', 
                        backgroundColor: '#1F1F1F',  
                        padding: '25px', // Adjust padding for better appearance
                        borderRadius: '12px', 
                        width: '66.6667%', // 2/3 of the container
                        maxWidth: '600px', // Limit the maximum width
                        minWidth: '300px', // Ensure it doesn't get too small
                        height: '30px', // Consistent height  
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        margin: '0 auto', // Center the input
                        marginTop: '20px',  // Add some space above the input
                     }}
                />
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md text-white"
                    style={{
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '1rem',
                        color: '#FFFFFF',
                        backgroundColor: 'green',
                        padding: '18px', // Adjust padding for better appearance
                        borderRadius: '12px', // Rounded corners
                        height: '30px', // Consistent height
                        display: 'flex',
                        justifyContent: 'center',   
                        alignItems: 'center',
                    
                        marginTop: '20px', // Align with the input  
                

                    }}
                >
                    Search
                </button>
            </form>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
                {results.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

        </div>
    );
};

export default Search;
