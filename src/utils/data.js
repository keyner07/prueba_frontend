const movie = {
    name: "The avengers",
    date: "2020-10-07",
    vote: "5",
    image: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    id: 550,
  };

const movieRating = {
    ...movie,
    rating: 7
}

const detailMovie = {
    ...movie,
    description: 'Es un test'
}

const detailMovieFull = {
    ...detailMovie,
    genres: [
        {
            id: 1,
            name: 'Romance'
        },
        {
            id:2,
            name: 'Comedy'
        }
    ]
}

const movies = [
    {
        name: "The avengers",
        date: "2020-10-07",
        vote: "5",
        image: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        id: 20,
    },
    {
        name: "Matrix",
        date: "2020-11-07",
        vote: "6",
        image: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        id: 21,
    },
    {
        name: "Taken",
        date: "2021-10-07",
        vote: "7",
        image: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        id: 22,
    },
    {
        name: "The rock",
        date: "2020-10-07",
        vote: "8",
        image: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        id: 23,
    },
    {
        name: "Endgame",
        date: "2020-10-07",
        vote: "9",
        image: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        id: 24,
    }
  ]

  export { movie, movies, movieRating, detailMovie, detailMovieFull };