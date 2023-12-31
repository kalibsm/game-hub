import { Box, Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSlector from "../components/PlatformSlector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`, //mobile && ipad version
        lg: `"aside main"`, //1024
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px  1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <Heading fontSize="2xl" marginBottom={3}>
            Genres
          </Heading>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={2} marginBottom={5}>
            <PlatformSlector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
