import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav"  "main"`, //mobile && ipad version
        lg: `"nav nav"  "aside main"`, //1024
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px  1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Outlet />
    </Grid>
  );
};

export default Layout;
