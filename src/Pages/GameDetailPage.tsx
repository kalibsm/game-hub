import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
