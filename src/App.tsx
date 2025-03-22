import { GridItem, Grid } from "@chakra-ui/react"
import NavBar from "./NavBar"
import SkipList from "./components/SkipList"

function App() {
  return(
    <>
     <Grid templateAreas={{
         base:`"nav" "main"`,
    }}>
    <GridItem area='nav'>
       <NavBar/>
    </GridItem>
    <GridItem area='main' >
       <SkipList/>
    </GridItem>
</Grid>
    </>
  )
}
export default App
