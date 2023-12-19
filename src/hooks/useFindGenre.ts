import useGenres from "./useGenres";

const useFindGenre = (selectedGenre_id?: number) => {
    const {data: genres} = useGenres();

    return genres.results.find(genre => genre.id === selectedGenre_id);
}
export default useFindGenre;