import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById, saveMovieById, removeMovieById } from "../services/api";
import { getAllMovieIds } from "../services/localstorage";
import { WatchButton } from "../components/watch.comp";
import { Rating } from "../components/rating.comp";

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [modalImg, setModalImg] = useState(null);
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMovieById(Number(id));
        setMovie(data);

        const watchedIds = getAllMovieIds();
        setIsWatched(watchedIds.includes(Number(id)));
      } catch (error) {
        setMovie(null);
      }
    }
    fetchMovie();
  }, [id]);

  const toggleWatch = () => {
    if (isWatched) {
      removeMovieById(Number(id));
    } else {
      saveMovieById(Number(id));
    }
    setIsWatched(!isWatched);
  };

  if (!movie)
    return <div className="text-center mt-10">Film nicht gefunden...</div>;

  return (
    <div className="p-16 flex justify-center items-center h-75vh rounded-box">
      <div className="card shadow-xl h-full flex flex-col justify-between p-4">
        <div className="carousel rounded-box flex flex-col md:flex-row justify-center items-center md:items-start h-100 gap-4 mb-4">
          <div className="carousel-item">
            <img
              src={movie.img_backdrop}
              alt="Backdrop"
              className="cursor-pointer object-cover rounded-box w-100 h-100"
              onClick={() => setModalImg(movie.img_backdrop)}
            />
          </div>
          <div className="carousel-item ">
            <img
              src={movie.img}
              alt="Poster"
              className="cursor-pointer object-cover rounded-box w-100 h-100"
              onClick={() => setModalImg(movie.img)}
            />
          </div>
        </div>

        <div className="card-body">
          <h1 className="card-title text-5xl font-bold">
            {movie.title}
            <div className="badge badge-secondary badge-lg text-xl">
              {movie.year}
            </div>
          </h1>

          <Rating id={movie.id} type="movie" />

          <p className="text-gray-500 ">{movie.genres?.join(", ")}</p>
          <p>{movie.overview}</p>

          <div className="card-actions justify-start items-center gap-4 mt-8">
            <WatchButton isWatched={isWatched} onToggle={toggleWatch} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalImg && (
        <dialog
          open
          className="modal modal-open"
          onClick={() => setModalImg(null)}
        >
          <div className="modal-box w-11/12 max-w-5xl">
            <img src={modalImg} alt="Großansicht" className="w-full rounded" />
            <div className="modal-action">
              <button className="btn" onClick={() => setModalImg(null)}>
                Schließen
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
