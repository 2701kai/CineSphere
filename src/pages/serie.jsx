import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getSeriesById,
  saveSeriesById,
  removeSeriesById,
} from "../services/api";
import { getAllSeriesIds } from "../services/localstorage";
import { WatchButton } from "../components/watch.comp";
import { Rating } from "../components/rating.comp";

export default function Serie() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);
  const [modalImg, setModalImg] = useState(null);
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    async function fetchSerie() {
      try {
        const data = await getSeriesById(Number(id));
        setSerie(data);

        const watchedIds = getAllSeriesIds();
        setIsWatched(watchedIds.includes(Number(id)));
      } catch (error) {
        setSerie(null);
      }
    }
    fetchSerie();
  }, [id]);

  const toggleWatch = () => {
    if (isWatched) {
      removeSeriesById(Number(id));
    } else {
      saveSeriesById(Number(id));
    }
    setIsWatched(!isWatched);
  };

  if (!serie)
    return <div className="text-center mt-10">Serie nicht gefunden...</div>;

  return (
    <div className="p-16 flex justify-center items-center h-75vh rounded-box">
      <div className="card shadow-xl h-full flex flex-col justify-between p-4">
        <div className="carousel rounded-box flex flex-col md:flex-row justify-center items-center md:items-start h-100 gap-4 mb-4 ">
          <div className="carousel-item">
            <img
              src={serie.img_backdrop}
              alt="Backdrop"
              className="cursor-pointer object-cover rounded-box w-100 h-100 "
              onClick={() => setModalImg(serie.img_backdrop)}
            />
          </div>
          <div className="carousel-item ">
            <img
              src={serie.img}
              alt="Poster"
              className="cursor-pointer object-cover rounded-box w-100 h-100 "
              onClick={() => setModalImg(serie.img)}
            />
          </div>
        </div>

        <div className="card-body">
          <h1 className="card-title text-5xl font-bold">
            {serie.title}
            <div className="badge badge-secondary badge-lg text-xl">
              {serie.year}
            </div>
          </h1>

          {/* Rating bileşeni */}
          <Rating id={serie.id} type="series" />

          <p className="text-gray-500 ">{serie.genres?.join(", ")}</p>
          <p>{serie.overview}</p>

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
