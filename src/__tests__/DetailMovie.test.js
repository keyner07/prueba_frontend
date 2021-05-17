import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest.setup";

import { detailMovie, detailMovieFull } from 'utils/data';
import DetailMovie from "components/DetailMovie";

describe('Tests for component DetailItem', () => {
    
    test('should have the next text', () => {
        const component = render(<DetailMovie {...detailMovie} />);
        component.getByText(/cast/i);
        component.getByText(detailMovie.name);
        component.getByText(detailMovie.description);
    });

    test('should have genre and actors', async () => {
        const { genres: [firstGenre, secondGenre] } = detailMovieFull;
        render(<DetailMovie {...detailMovieFull} />);

        screen.getByText(firstGenre.name);
        screen.getByText(secondGenre.name);
    })
})