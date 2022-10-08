import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  query getLaunches {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(FILMS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {data.launchesPast.map((launch) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
