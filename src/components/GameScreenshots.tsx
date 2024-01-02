import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  game_pk: string;
}

const GameScreenshots = ({ game_pk }: Props) => {
  const { data: screenshots, isLoading, error } = useScreenshots(game_pk);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
        {screenshots.results.map((screenshot) => (
          <Image key={screenshot.id} src={screenshot.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
