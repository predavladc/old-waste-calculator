import {
  Grommet,
  Box,
  Page,
  Header,
  Grid,
  Menu,
  Nav,
  Button,
  Main,
  Text,
  Carousel,
  Image,
  Footer,
  Form,
  RangeInput,
  CheckBoxGroup,
  ResponsiveContext,
} from "grommet";
import {
  Menu as MenuIcon,
  Cycle,
  Twitter,
  Instagram,
  Facebook,
} from "grommet-icons";

const FooterComp = () => {
  return (
    <Footer
      align="start"
      direction="column"
      flex={false}
      justify="center"
      gap="xxsmall"
      background={{ color: "dark-1" }}
      pad="xsmall"
    >
      <Box align="start" justify="center" margin={{ left: "small" }}>
        <Text size="xlarge">Share and Save the World:</Text>
        <Box
          align="center"
          justify="center"
          direction="row"
          pad="small"
          gap="small"
        >
          <Twitter />
          <Instagram />
          <Facebook />
        </Box>
      </Box>
      <Box align="center" justify="center" pad="small" />
      <Box
        align="start"
        justify="start"
        direction="column"
        gap="small"
        margin={{ left: "small" }}
      >
        <Text truncate={false} weight="bold" textAlign="center" size="medium">
          Waste Calculator
        </Text>
        <Text weight="bold" size="medium">
          About Us
        </Text>
      </Box>
    </Footer>
  );
};

export default FooterComp;
