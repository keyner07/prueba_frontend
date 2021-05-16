import { useCallback, useContext } from "react";
import Context from "context/UserContext";

export default function useUser() {
  const { favs, sessionId, setFavs, setSessionId } = useContext(Context);

  const addFav = useCallback(
    (newFav) => {
      setFavs(prevFavs => prevFavs.concat(newFav))
    },
    [setFavs]
  );

  const deleteFav = useCallback(
    (id) => {
      setFavs(prevFavs => {
        const movies = prevFavs.filter(movie => movie.id !== id);
        return movies;
      })
    },
    [setFavs]
  )

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("sessionId");
    setSessionId(null);
  }, [setSessionId]);

  return {
    addFav,
    favs,
    logout,
    sessionId,
    deleteFav
  };
}
