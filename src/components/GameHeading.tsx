import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const selectedGenre = genres.results.find(
    (genre) => genre.id === gameQuery.genre_id
  );
  const { data: platforms } = usePlatforms();
  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === gameQuery.platform_id
  );
  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
