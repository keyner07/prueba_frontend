import { useCallback, useContext } from "react";
import Context from "context/UserContext";

export default function useUser() {
  const { favs, sessionId, setFavs, setSessionId } = useContext(Context);

  const addFav = useCallback(
    (content) => {
      setFavs(prevFavs => prevFavs.concat(content))
    },
    [setFavs]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("sessionId");
    setSessionId(null);
  }, [setSessionId]);

  return {
    addFav,
    favs,
    logout,
    sessionId
  };
}
