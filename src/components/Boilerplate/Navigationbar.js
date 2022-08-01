import { Box, Header, Menu, Nav, Button } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";

const Navigationbar = () => {
  return (
    <Header
      align="center"
      direction="row"
      flex="grow"
      justify="between"
      gap="medium"
      wrap
      background={{ color: "accent-1", dark: true }}
    >
      <div className="lg-hidden">
        <Box align="center" justify="center">
          <Menu
            open={false}
            items={[
              { label: "Waste Calc." },
              { label: "Statistics" },
              { label: "Settings" },
              { label: "Sign In" },
            ]}
            size="medium"
            dropAlign={{
              top: "top",
              bottom: "bottom",
              left: "left",
              right: "right",
            }}
            icon={<MenuIcon />}
          />
        </Box>
      </div>
      <Box align="center" justify="center">
        <Nav align="center" flex={false} direction="row">
          <div className="lg-visible">
            <Box align="center" justify="center" direction="row">
              <Button label="Waste Calc." />
              <Button label="Statistics" />
              <Button label="Settings" />
            </Box>
          </div>
        </Nav>
      </Box>
      <div className="lg-visible">
        <Box align="end" justify="end" direction="column">
          <Button label="Account/Sign In" />
        </Box>
      </div>
    </Header>
  );
};

export default Navigationbar;
