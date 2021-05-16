
export default function compare(prevMovie, actualMovie) {
    const titlePrevMovie = prevMovie.title.toUpperCase();
    const titleActualMovie = actualMovie.title.toUpperCase();

    if(titlePrevMovie > titleActualMovie) {
        return 1;
    }
    else if( titlePrevMovie < titleActualMovie) {
        return -1;
    }
}