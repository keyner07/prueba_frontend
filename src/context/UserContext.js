import React, {useState, useEffect} from 'react'

import createGuestSession from 'services/createGuestSession';

const Context = React.createContext({})

export function UserContextProvider ({children}) {
  const [favs, setFavs] = useState([])
  const [sessionId, setSessionId] = useState(
    () => window.localStorage.getItem('sessionId')
  )

  useEffect(() => {
    if (!sessionId) {
        createGuestSession().then((sessionId) => {
            setSessionId(sessionId)
            window.localStorage.setItem("sessionId", sessionId);
        });
    }
  }, [sessionId])

  return <Context.Provider value={{
    favs,
    sessionId,
    setFavs,
    setSessionId
  }}>
    {children}
  </Context.Provider>
}

export default Context