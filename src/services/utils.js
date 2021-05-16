const fromApiResponseToMovies = apiResponse => {
    const {results} = apiResponse;
    if (Array.isArray(results)) {
      const movies = results.map(movie => {
        const {title, original_language, release_date, poster_path, vote_average, id} = movie;
        return { title, id, original_language, release_date, poster_path, vote_average }
      })
      return movies
    }
    return []
  }

export { fromApiResponseToMovies }