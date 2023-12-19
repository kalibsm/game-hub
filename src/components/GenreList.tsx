import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../services/genreService";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre_id?: number;
}

const GenreList = ({ selectedGenre_id, onSelectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  const genreSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return null;
  if (isLoading)
    return (
      <List>
        {genreSkeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY="5px">
            <GenreListSkeleton />
          </ListItem>
        ))}
      </List>
    );

  return (
    <List>
      {genres.results.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              objectFit="cover"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre_id ? "bold" : "normal"}
              colorScheme={genre.id === selectedGenre_id ? "teal" : ""}
              onClick={() => onSelectedGenre(genre)}
              fontSize="lg"
              variant="link"
              whiteSpace="normal"
              textAlign="left"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
