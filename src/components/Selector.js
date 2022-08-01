import { useContext } from "react";
import "../index.css";
import { Box, Page, Button, Main } from "grommet";

import RouterContext from "../Context/RouterContext";
import FooterComp from "./Boilerplate/FooterComp";
import Navigationbar from "./Boilerplate/Navigationbar";

const Selector = () => {
  const { push } = useContext(RouterContext);

  return (
    <Box align="center" justify="center" flex>
      <Page background={{ color: "dark-1" }}>
        <Navigationbar />
        <Main
          overflow="auto"
          justify="start"
          align="center"
          fill="horizontal"
          flex
          pad="medium"
        >
          <Box align="center" justify="center">
            <Button
              label="Electricity"
              primary={false}
              active={false}
              type="button"
              size="large"
              margin="medium"
              fill="vertical"
              onClick={() => push("/eleccalc")}
            />
            <Button
              label="Water"
              primary={false}
              active={false}
              type="button"
              size="large"
              margin="medium"
              fill="vertical"
            />
            <Button
              label="Plastics"
              primary={false}
              active={false}
              type="button"
              size="large"
              margin="medium"
              fill="vertical"
            />
          </Box>
        </Main>
        <FooterComp />
      </Page>
    </Box>
  );
};

export default Selector;
