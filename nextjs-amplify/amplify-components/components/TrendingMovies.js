import { Card, Text, Image, View, Flex } from "@aws-amplify/ui-react";

export default function TrendingMovies({ trendingMovies }) {
  return (
    <>
      <View as="div">
        <Flex direction="row">
          {trendingMovies.map((movie) => (
            <View key={movie.title} as="div" position="relative">
              <Image
                position="absolute"
                width="250px"
                objectFit="cover"
                src={movie.thumbnail.trending.large}
                alt="movie photo"
              ></Image>
              <Text key={movie.title}>{movie.title}</Text>
            </View>
          ))}
        </Flex>
      </View>
    </>
  );
}
