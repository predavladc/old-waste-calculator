import "../../index.css";
import { Box, Page, Button, Main, Text, Form, RangeInput } from "grommet";
import { useState, useContext } from "react";
import Navigationbar from "../Boilerplate/Navigationbar";
import FooterComp from "../Boilerplate/FooterComp";
import { CalcContext } from "../../calculationContext";

const ElecCalc = () => {
  const { electricityFormInfo, setElectricityFormInfo, persistToLS } =
    useContext(CalcContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(electricityFormInfo);
    persistToLS("electricityFormInfo", electricityFormInfo);
  };

  const handleChange = (event) => {
    setElectricityFormInfo(() => ({
      ...electricityFormInfo,
      [event.target.name]: event.target.value,
    }));
  };
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
          pad="large"
        >
          <Form onSubmit={handleSubmit}>
            <Box
              align="center"
              justify="center"
              direction="row"
              responsive
              wrap
              fill="horizontal"
            >
              <Text weight="bold">No. of AC units:</Text>
              <RangeInput
                max={50}
                min={1}
                // defaultValue="1"
                step={1}
                name="airconNo"
                value={electricityFormInfo.airconNo || ""}
                onChange={handleChange}
              />
              <Text weight="bold">Power Usage (in Watts):</Text>
              <RangeInput
                min={400}
                step={100}
                max={4500}
                name="airconPower"
                value={electricityFormInfo.airconPower || ""}
                onChange={handleChange}
              />
            </Box>
            {/* <Box
                align="start"
                justify="center"
                margin={{ top: "medium" }}
                gap="xsmall"
                fill="horizontal"
              >
                <Text weight="bold">Type of AC:</Text>
                <CheckBoxGroup
                  options={["Split AC", "Window AC", "Portable"]}
                  direction="column"
                />
              </Box> */}
            <Box align="center" justify="center">
              <Button label="Add!" type="submit" active={false} primary />
            </Box>
          </Form>
        </Main>
        <FooterComp />
      </Page>
    </Box>
  );
};

export default ElecCalc;
