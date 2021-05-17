import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import "jest.setup";

import { movie, movieRating } from 'utils/data';

import MovieItem from "components/MovieItem";

describe("Tests for component MovieItem", () => {

    test("renders content MovieItem", () => {
        const component = render(
            <Router>
              <MovieItem {...movie} />
            </Router>
          );
    
        component.getByText(movie.name)
        component.getByText(`Date: ${movie.date} || Votes: ${movie.vote}`)
    });

    test("renders content with rating", () => {
        const component = render(
            <Router>
              <MovieItem {...movieRating} />
            </Router>
          );
        
          component.getByText(movieRating.name)
          component.getByText(`Date: ${movieRating.date} || Votes: ${movieRating.vote} Rate: ${movieRating.rating}`)
    });
})