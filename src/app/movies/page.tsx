type Movie = {
  id: number
  movie_name: string
  genre: string
  launch_date: number
  stars: number
}

const movies: Movie[] = [
    {
        id: 1,
        movie_name: "Oppenheimer",
        genre: "History, Science",
        launch_date: 2023,
        stars: 4.5
    },
    {
        id: 2,
        movie_name: "Oblivion",
        genre: "Sci-fi",
        launch_date: 2013,
        stars: 4.3
    },
    {
        id: 3,
        movie_name: "Dune",
        genre: "Sci-fi",
        launch_date: 2021,
        stars: 4.8
    },
]

export default function Movies() {
    const movieItems = movies.map((movie) => (
        <li key={movie.id} className="border-b border-gray-200 py-4">
          <div className="flex items-center justify-between">
                <div>
                    <p className="text-lg font-semibold">{movie.movie_name}</p>
                    <p className="text-sm text-gray-600">{movie.genre}</p>
                    <p className="text-sm text-gray-600">{movie.launch_date}</p>
                </div>
                <p className="text-sm text-gray-600">{movie.stars}</p>
            </div>
        </li>
    ));

    return (
        <div className="mx-auto w-4/5">
            <h2 className="text-2xl font-semibold mb-4">Movie List</h2>
            <ul>{movieItems}</ul>
        </div>
    );
}
