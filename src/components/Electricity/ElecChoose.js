import { useContext } from "react";
import { Box, Page, Main, Text, CheckBoxGroup } from "grommet";
import RouterContext from "../../Context/RouterContext";
import Navigationbar from "../Boilerplate/Navigationbar";
import FooterComp from "../Boilerplate/FooterComp";

const ElecChoose = () => {
  const { push } = useContext(RouterContext);

  return (
    <Box align="center" justify="center" flex>
      <Page background={{ color: "dark-1" }}>
        <Navigationbar />
        <Main
          overflow="auto"
          justify="start"
          align="start"
          fill="horizontal"
          flex
          pad="medium"
        >
          <Box align="center" justify="center">
            <Text size="xxlarge">Click Checkbox to add appliance:</Text>
          </Box>
          <Box
            align="start"
            justify="center"
            direction="column"
            pad="small"
            responsive
          >
            <CheckBoxGroup
              options={[
                "Air Conditioner",
                "Heater",
                "Fridge",
                "Washing Machine",
                "Lighting ",
              ]}
            />
          </Box>
        </Main>
        <FooterComp />
      </Page>
    </Box>
  );
};

export default ElecChoose;
