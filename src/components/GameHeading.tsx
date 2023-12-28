import { Heading } from "@chakra-ui/react";
import useFindGenre from "../hooks/useFindGenre";
import useFindPlatform from "../hooks/useFindPlatform";
import useGameQueryStore from "../stores/gameQueryStore";

const GameHeading = () => {
  const selectedGenre_id = useGameQueryStore((s) => s.gameQuery.genre_id);
  const selectedGenre = useFindGenre(selectedGenre_id);

  const selectedPlatform_id = useGameQueryStore((s) => s.gameQuery.platform_id);
  const selectedPlatform = useFindPlatform(selectedPlatform_id);

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
