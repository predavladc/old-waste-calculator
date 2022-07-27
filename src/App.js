import React, { Children } from 'react'
import './index.css'
import { Grommet, Box, Page, Header, Grid, Menu, Nav, Button, Main, Text, Carousel, Image, Footer, Form, RangeInput, CheckBoxGroup, ResponsiveContext } from 'grommet'
import { Menu as MenuIcon, Cycle, Twitter, Instagram, Facebook } from 'grommet-icons'



const RouterContext = React.createContext({})

const Router = ({ children }) => {
  const [path, setPath] = React.useState("/")

  React.useEffect(() => {
    const onPopState = () => setPath(document.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const push = nextPath => {
    if (nextPath !== path) {
      window.history.pushState(undefined, undefined, nextPath)
      setPath(nextPath)
      window.scrollTo(0, 0)
    }
  }

  return (
    <RouterContext.Provider value={{ path, push }}>
      {children}
    </RouterContext.Provider>
  )
}

const Routes = ({ children }) => {
  const { path: contextPath } = React.useContext(RouterContext)
  let found
  Children.forEach(children, child => {
    if (!found && contextPath === child.props.path) found = child
  })
  return found
}

const Route = ({ Component, path }) => {
  const { path: contextPath } = React.useContext(RouterContext)
  return contextPath === path ? <Component /> : null
}

const theme = {
  "global": {
    "colors": {
      "background": {
        "light": "#ffffff",
        "dark": "#000000"
      }
    },
    "font": {
      "family": "-apple-system,\n         BlinkMacSystemFont, \n         \"Segoe UI\", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         \"Fira Sans\", \n         \"Droid Sans\",  \n         \"Helvetica Neue\", \n         Arial, sans-serif,  \n         \"Apple Color Emoji\", \n         \"Segoe UI Emoji\", \n         \"Segoe UI Symbol\""
    }
  },
  "button": {
    "extend": [
      null
    ]
  }
}
const Homepage = () => {
    const { push } = React.useContext(RouterContext)

  return (
    <Box align="center" justify="start" direction="column" wrap={false} responsive>
      <Page background={{"color":"dark-1"}} fill>
        <Header align="center" direction="row" flex="grow" justify="between" gap="medium" wrap background={{"color":"accent-1","dark":true}}>
          <Grid>
          <div >
            <Box align="start" justify="center" >
              <Nav align="center" flex={false} direction="row">
                <Box align="center" justify="center" direction="row">
                <span>
                  <Button label="Waste Calc." class="pc-nav" id="1000"/>
                  <Button label="Statistics" />
                  <Button label="Settings" />
                  </span>
                </Box>
              </Nav>
            </Box>
            </div>
            <Box align="start" justify="center">
              <Menu open={false} items={[{"label":"Waste Calc."},{"label":"Statistics"},{"label":"Settings"},{"label":"Sign In"}]} size="medium" dropAlign={{"top":"top","bottom":"bottom","left":"left","right":"right"}} icon={<MenuIcon />} />
            </Box>
          </Grid>
          <Box align="end" justify="end" direction="column">
          <div>
           <span>
            <Button label="Account/Sign In" />
            </span>
            </div>
          </Box>
          
        </Header>
        <Main overflow="hidden" justify="start" align="center" fill="horizontal" pad={{"vertical":"small","bottom":"xlarge"}}>
          <Text size="3xl" weight="bold" truncate={false} color="active-text">
            Waste Calculator
          </Text>
          <Box align="center" justify="center" height="medium" width="large">
            <Carousel controls="arrows" fill margin="medium" play={5000}>
              <Image src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2026&q=80" fit="cover" />
              <Image src="https://images.unsplash.com/photo-1616924416730-5566217be0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" fit="cover" />
            </Carousel>
          </Box>
          <Button label="Waste Away!" plain={false} icon={<Cycle />} type="button" primary disabled={false} reverse onClick={() => push("/select")} />
        </Main>
        <Footer align="start" direction="column" flex={false} justify="center" gap="xxsmall" background={{"color":"dark-1"}} pad="xsmall">
          <Box align="start" justify="center" margin={{"left":"small"}}>
            <Text size="xlarge">
              Share and Save the World:
            </Text>
            <Box align="center" justify="center" direction="row" pad="small" gap="small">
              <Twitter  />
              <Instagram  />
              <Facebook  />
            </Box>
          </Box>
          <Box align="center" justify="center" pad="small" />
          <Box align="start" justify="start" direction="column" gap="small" margin={{"left":"small"}}>
            <Text truncate={false} weight="bold" textAlign="center" size="medium">
              Waste Calculator 
            </Text>
            <Text weight="bold" size="medium">
              About Us
            </Text>
          </Box>
        </Footer>
      </Page>
    </Box>
  )
}

const Selector = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center" flex>
      <Page background={{"color":"dark-1"}}>
        <Header align="center" direction="row" flex="grow" justify="between" gap="medium" wrap background={{"color":"accent-1","dark":true}}>
          <Box align="center" justify="center">
            <Menu open={false} items={[{"label":"Waste Calc."},{"label":"Statistics"},{"label":"Settings"},{"label":"Sign In"}]} size="medium" dropAlign={{"top":"top","bottom":"bottom","left":"left","right":"right"}} icon={<MenuIcon />} />
          </Box>
          <Box align="center" justify="center">
            <Nav align="center" flex={false} direction="row">
              <Box align="center" justify="center" direction="row">
                <Button label="Waste Calc." />
                <Button label="Statistics" />
                <Button label="Settings" />
              </Box>
            </Nav>
          </Box>
          <Box align="end" justify="end" direction="column">
            <Button label="Account/Sign In" />
          </Box>
        </Header>
        <Main overflow="auto" justify="start" align="center" fill="horizontal" flex pad="medium">
          <Box align="center" justify="center">
            <Button label="Electricity" primary={false} active={false} type="button" size="large" margin="medium" fill="vertical" onClick={() => push("/addelec")} />
            <Button label="Water" primary={false} active={false} type="button" size="large" margin="medium" fill="vertical" />
            <Button label="Plastics" primary={false} active={false} type="button" size="large" margin="medium" fill="vertical" />
          </Box>
        </Main>
        <Footer align="start" direction="column" flex={false} justify="center" gap="xxsmall" background={{"color":"dark-1"}} pad="xsmall">
          <Box align="start" justify="center" margin={{"left":"small"}}>
            <Text size="xlarge">
              Share and Save the World:
            </Text>
            <Box align="center" justify="center" direction="row" pad="small" gap="small">
              <Twitter  />
              <Instagram  />
              <Facebook  />
            </Box>
          </Box>
          <Box align="center" justify="center" pad="small" />
          <Box align="start" justify="start" direction="column" gap="small" margin={{"left":"small"}}>
            <Text truncate={false} weight="bold" textAlign="center" size="medium">
              Waste Calculator 
            </Text>
            <Text weight="bold" size="medium">
              About Us
            </Text>
          </Box>
        </Footer>
      </Page>
    </Box>
  )
}

const AddElec = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Box align="center" justify="center" flex>
      <Page background={{"color":"dark-1"}}>
        <Header align="center" direction="row" flex="grow" justify="between" gap="medium" wrap background={{"color":"accent-1","dark":true}}>
          <Box align="center" justify="center">
            <Menu open={false} items={[{"label":"Waste Calc."},{"label":"Statistics"},{"label":"Settings"},{"label":"Sign In"}]} size="medium" dropAlign={{"top":"top","bottom":"bottom","left":"left","right":"right"}} icon={<MenuIcon />} />
          </Box>
          <Box align="center" justify="center">
            <Nav align="center" flex={false} direction="row">
              <Box align="center" justify="center" direction="row">
                <Button label="Waste Calc." />
                <Button label="Statistics" />
                <Button label="Settings" />
              </Box>
            </Nav>
          </Box>
          <Box align="end" justify="end" direction="column">
            <Button label="Account/Sign In" />
          </Box>
        </Header>
        <Main overflow="auto" justify="start" align="center" fill="horizontal" flex pad="large">
          <Form>
            <Box align="center" justify="center" direction="row" responsive wrap fill="horizontal">
              <Text weight="bold">
                No. of AC units:
              </Text>
              <RangeInput max={50} min={1} defaultValue="1" step={1} />
              <Text weight="bold">
                Power Usage (in Watts):
              </Text>
              <RangeInput min={400} defaultValue="900" step={100} max={900} />
            </Box>
            <Box align="start" justify="center" margin={{"top":"medium"}} gap="xsmall" fill="horizontal">
              <Text weight="bold">
                Type of AC: 
              </Text>
              <CheckBoxGroup options={["Split AC","Window AC","Portable"]} direction="column" />
            </Box>
            <Box align="center" justify="center">
              <Button label="Add!" type="submit" active={false} primary />
            </Box>
          </Form>
        </Main>
        <Footer align="start" direction="column" flex={false} justify="center" gap="xxsmall" background={{"color":"dark-1"}} pad="xsmall">
          <Box align="start" justify="center" margin={{"left":"small"}}>
            <Text size="xlarge">
              Share and Save the World:
            </Text>
            <Box align="center" justify="center" direction="row" pad="small" gap="small">
              <Twitter  />
              <Instagram  />
              <Facebook  />
            </Box>
          </Box>
          <Box align="center" justify="center" pad="small" />
          <Box align="start" justify="start" direction="column" gap="small" margin={{"left":"small"}}>
            <Text truncate={false} weight="bold" textAlign="center" size="medium">
              Waste Calculator 
            </Text>
            <Text weight="bold" size="medium">
              About Us
            </Text>
          </Box>
        </Footer>
      </Page>
    </Box>
  )
}

const App = () => (
  <Grommet full theme={theme}>
    <Router>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/select" Component={Selector} />
        <Route path="/addelec" Component={AddElec} />
      </Routes>
    </Router>
  </Grommet>
);

export default App;
