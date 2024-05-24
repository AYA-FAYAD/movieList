import { useGetMovieNameQuery, displayInputShearch } from "../stors";
import { useDebonced } from "../hooks/debounce";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function MoveieSearch() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.movies);
  const debouncedTitle = useDebonced(inputValue.searchInput, 500);
  const handleChangeInput = (e) => {
    dispatch(displayInputShearch(e.target.value));
  };
  const { data, isLoading, error } = useGetMovieNameQuery(debouncedTitle);
  // console.log(data.Search.imdbID);

  return (
    <div className="container py-52 px-1 md:px-8 text-center relative text-black overflow-auto">
      <input
        type="text"
        value={inputValue.searchInput}
        onChange={handleChangeInput}
        className="border border-gray-300 px-4 shadow-md rounded-md mr-2 focus:outline-none focus:border-blue-500 md:w-1/2"
      />

      <div className="flex justify-center mt-4">
        <div className="text-left rounded-t-none rounded-b-2xl shadow max-h-40 overflow-auto  md:w-1/2">
          {isLoading ? (
            <p className="text-red-500">Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : data && data.Search ? (
            <ul>
              {data.Search.map((movie) => (
                <li key={movie.imdbID} className="flex items-center mb-2">
                  <Link to={`/movie`} className="text-black hover:underline">
                    <img
                      src={movie.Poster}
                      alt="poster"
                      className="w-16 h-20 object-cover mr-4"
                    />
                    {movie.Title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoveieSearch;
