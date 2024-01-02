import { Spinner } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface Prop {
  gameId: number;
}

const GameTrailer = ({ gameId }: Prop) => {
  const { data: trailer, isLoading, error } = useTrailer(gameId!);
  const first = trailer?.results[0];

  if (isLoading) return <Spinner />;

  if (error || !first) throw error;

  return <video src={first.data[480]} poster={first.preview} controls />;
};

export default GameTrailer;
