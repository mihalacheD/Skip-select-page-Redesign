import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";
import SkipList from "./components/SkipList";

function App() {
  return (
    <Grid templateAreas={{ base: `"nav" "main"` }} w="100%" overflowX="auto" mt={5} mb={9}>
    <GridItem area="nav" overflowX="auto">
      <NavBar />
    </GridItem>
    <GridItem area="main">
      <SkipList />
    </GridItem>
  </Grid>
  );
}

export default App;
