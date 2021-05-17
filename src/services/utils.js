const fromApiResponseToMovies = apiResponse => {
    const {results} = apiResponse;
    if (Array.isArray(results)) {
      const movies = results.map(movie => {
        const {title : name, original_language: language, release_date: date, poster_path: image, vote_average: vote, id} = movie;
        return { name, id, language, date,image, vote }
      })
      return movies
    }
    return []
  }

export { fromApiResponseToMovies }