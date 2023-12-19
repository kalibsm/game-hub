import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useFindGenre from "../hooks/useFindGenre";
import useFindPlatform from "../hooks/useFindPlatform";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useFindGenre(gameQuery.genre_id);
  const selectedPlatform = useFindPlatform(gameQuery.platform_id);
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
