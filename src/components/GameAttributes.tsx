import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Game } from "../services/GameService";
import CriticScore from "./CriticScore";

interface Props {
  gameDetail: Game;
}

const GameAttributes = ({ gameDetail }: Props) => {
  return (
    <Grid
      marginY={5}
      templateAreas={`'platforms metascore' 'genres publishers'`}
      templateColumns={"1fr 1fr"}
    >
      <GridItem area="platforms" marginBottom={10}>
        <Heading as="h4" fontSize="md" color="gray.600">
          Platforms
        </Heading>
        {gameDetail.parent_platforms.map((platform) => (
          <Text key={platform.platform.id}>{platform.platform.name}</Text>
        ))}
      </GridItem>
      <GridItem area="metascore">
        <Heading as="h4" fontSize="md" color="gray.600">
          Metascore
        </Heading>
        <CriticScore score={gameDetail.metacritic} />
      </GridItem>
      <GridItem area="genres">
        <Heading as="h4" fontSize="md" color="gray.600">
          Genres
        </Heading>
        {gameDetail.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GridItem>
      <GridItem area="publishers">
        <Heading as="h4" fontSize="md" color="gray.600">
          Publishers
        </Heading>
        {gameDetail.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GridItem>
    </Grid>
  );
};

export default GameAttributes;
