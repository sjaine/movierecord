interface Post {
  id: string;
  title: string;
  year: string;
  ratings: string[];
  poster: string;
}

export default function MovieCard({ movie }: { movie: Post }) {
  return (
    <div className="movie-card select-none pointer-events-none">
      <div className="flex justify-between">
        <p className="text-xl">{movie.year}</p>
        <p className="text-xl">{movie.ratings}</p>
      </div>
      <img
        loading="lazy"
        decoding="async"
        src={movie.poster}
        alt={movie.title}
        width="270"
        height="380"
        className="w-[270px] h-[380px] object-cover"
      />
    </div>
  );
}