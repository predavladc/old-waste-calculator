import { useContext } from "react";
import { Home } from "grommet-icons";
import { Box, Page, Button, Main, Text, Carousel, Image } from "grommet";
import { Cycle } from "grommet-icons";
import { CalcContext } from "../calculationContext";
import Signup from "../Signup";
import RouterContext from "../Context/RouterContext";
import Navigationbar from "./Boilerplate/Navigationbar";
import FooterComp from "./Boilerplate/FooterComp";

const Homepage = () => {
  const { push } = useContext(RouterContext);
  // const { count } = useContext(CalcContext);

  return (
    <Box
      align="center"
      justify="start"
      direction="column"
      wrap={false}
      responsive
    >
      {/* <Signup /> */}
      <Page background={{ color: "dark-1" }} fill>
        <Navigationbar />
        <Main
          overflow="hidden"
          justify="start"
          align="center"
          fill="horizontal"
          pad={{ vertical: "small", bottom: "xlarge" }}
        >
          <Text size="3xl" weight="bold" truncate={false} color="active-text">
            Waste Calculator
          </Text>
          <Box align="center" justify="center" height="medium" width="large">
            <Carousel controls="arrows" fill margin="medium" play={5000}>
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2026&q=80"
                fit="cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1616924416730-5566217be0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
                fit="cover"
              />
            </Carousel>
          </Box>
          <Button
            label="Waste Away!"
            plain={false}
            icon={<Cycle />}
            type="button"
            primary
            disabled={false}
            reverse
            onClick={() => push("/select")}
          />
        </Main>
        <FooterComp />
      </Page>
    </Box>
  );
};

export default Homepage;
