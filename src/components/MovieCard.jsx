const MovieCard = ({ movie }) => {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div
      style={{
        width: "200px",
        height: "350px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        border: "1px solid #333",
        transition: "transform 0.2s ease",
        cursor: "pointer",
        padding: "10px",
        backgroundColor: "#1F1F1F",
        color: "#FFFFFF",
        borderRadius: "0.5rem",
        fontFamily: "Arial, sans-serif",
        fontSize: "1rem",   
        
      }}>
      <img
        src={poster}
        alt={movie.title}
        className="w-full h-[350px] object-cover"
        style={{ objectPosition: "center", height: "220px" }}
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
        <div className="flex justify-between text-sm text-gray-400 mt-1">
          <span>⭐ {movie.vote_average.toFixed(1)}</span>
          <span>/{movie.release_date?.slice(0, 4)}</span>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;