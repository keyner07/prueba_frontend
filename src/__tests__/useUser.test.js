import { renderHook, act } from "@testing-library/react-hooks";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import "jest.setup";

import { UserContextProvider } from "context/UserContext";
import useUser from "hooks/useUser";
import MovieItem from "components/MovieItem";
import { detailMovie, movie } from 'utils/data';

describe("Test for custom hooks useUser", () => {
    let wrapper, result;
    beforeEach(() => {
        wrapper = ({ children }) => (
            <UserContextProvider>{children}</UserContextProvider>
          );
        result = renderHook(() => useUser(), { wrapper }).result;
    })

  test("should have one movie in fav when add a movie", () => {

    act(() => {
      result.current.addFav(detailMovie);
    });

    expect(result.current.favs).toHaveLength(1);
    expect(result.current.favs).toContain(detailMovie);
  });

  test("should have empty favs when delete a movie", () => {

    act(() => {
      result.current.deleteFav({ id: 20 });
    });

    expect(result.current.favs).toHaveLength(0);
  });

});
