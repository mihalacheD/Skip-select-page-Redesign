import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SkipList from "./components/SkipList";
import Footer from "./components/Footer";
import { useState } from "react";
import useSkips from "./hooks/useSkips";

function App() {

  const { data: skips } = useSkips();
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);


  const selectedSkip = skips?.find((skip) => skip.id === selectedSkipId) || null;

  return (
    <>
    <Grid templateAreas={{ base: `"nav" "main"` }} w="100%" overflowX="auto" mt={5} mb='8em'>

      <GridItem area="nav" overflowX="auto">
        <NavBar />
      </GridItem>

      <GridItem area="main">
        <SkipList selectedSkip={selectedSkipId} setSelectedSkip={setSelectedSkipId}/>
      </GridItem>

    </Grid>

    <Footer selectedSkip={selectedSkip} />
    </>
  );
}

export default App;