'use client'

import { useState } from "react";
import {
  Flex,
  VStack,
  Button,
  //Accordion,
  //AccordionItem,
  //AccordionButton,
  //AccordionPanel,
  //AccordionIcon,
  Box,
} from "@chakra-ui/react";

import {AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent } from "@/components/ui/accordion";

const StepsAccordion = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const content = [
    "Content for Step 1",
    "Content for Step 2",
    "Content for Step 3",
    "Content for Step 4",
  ];

  return (
    <Flex>
      {/* Left Side: Steps */}
      <VStack gap={4} p={4} align="start" bg="gray.100" w="200px">
        {steps.map((step, index) => (
          <Button
            key={index}
            variant={activeStep === index ? "solid" : "ghost"}
            colorScheme="blue"
            onClick={() => setActiveStep(index)}
          >
            {step}
          </Button>
        ))}
      </VStack>

      {/* Right Side: Accordion */}
      <Box flex="1" p={4}>
        <AccordionRoot defaultValue={[activeStep.toString()]}>
          {content.map((text, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <h2>
                <AccordionItemTrigger>
                  <Box flex="1" textAlign="left">
                    {steps[index]}
                  </Box>
                </AccordionItemTrigger>
              </h2>
              <AccordionItemContent pb={4}>{text}</AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Box>
    </Flex>
  );
};

export default StepsAccordion;
