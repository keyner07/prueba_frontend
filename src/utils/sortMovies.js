
export default function compare(prevMovie, actualMovie) {
    const titlePrevMovie = prevMovie.name.toUpperCase();
    const titleActualMovie = actualMovie.name.toUpperCase();

    if(titlePrevMovie > titleActualMovie) {
        return 1;
    }
    else if( titlePrevMovie < titleActualMovie) {
        return -1;
    }
}