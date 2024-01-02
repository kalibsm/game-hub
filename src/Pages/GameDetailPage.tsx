import { Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGameDetails from "../hooks/useGameDetails";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Grid
      templateAreas={{ base: `'main''aside'`, md: `' main aside'` }}
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      columnGap={4}
    >
      <GridItem area="main">
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes gameDetail={game} />
      </GridItem>
      <GridItem area="aside">
        <GameTrailer gameId={game.id} />
        <GameScreenshots game_pk={game.slug} />
      </GridItem>
    </Grid>
  );
};

export default GameDetailPage;
