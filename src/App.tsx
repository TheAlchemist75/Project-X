import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./GameComponents/NavBar";
import GameGrid from "./GameComponents/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>

        <GridItem area={"aside"} display={{ base: "none", lg: "block" }}>
          Aside
        </GridItem>

        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
