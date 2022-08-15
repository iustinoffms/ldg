import { Text } from "@aws-amplify/ui-react";
import TrendingMovies from "../components/TrendingMovies";
import { Flex } from "@aws-amplify/ui-react";
import data from "../data.json";

export default function Home() {
  const trendingMovies = data.filter((movie) => movie.thumbnail.trending);
  return (
    <>
      <Flex direction="column">
        <Text as="h1" color="white">
          Trending here
        </Text>
        <TrendingMovies trendingMovies={trendingMovies} />
      </Flex>
    </>
  );
}
