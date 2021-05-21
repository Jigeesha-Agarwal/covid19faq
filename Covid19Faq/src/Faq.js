import React from 'react'
import {
    Box,
    Text,
    Flex,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react';
  import FAQ_LIST from './faq.json';
  import FAQ_LIST_2 from './faq2.json';
  import FAQ_LIST_3 from './faq_prevent.json';
  import FAQ_LIST_4 from './faq_ifSick.json';
  import FAQ_LIST_5 from './faq_children.json';
  import FAQ_LIST_6 from './faq_symptoms.json';
  import FAQ_LIST_7 from './faq_testing.json';
  import FAQ_LIST_8 from './faq_funerals.json';
  import FAQ_LIST_9 from './faq_vaccine.json';
 
export const Faq = ( {index , setIndex}) => {
    return (
        <Flex direction="column" p="4">
        <Box mb="8">
          <Heading size= "md" textAlign= "center">FREQUENTLY ASKED QUESTIONS</Heading>
        </Box>
        <Accordion allowToggle index={index} >
          {FAQ_LIST.map(faq => (
            <AccordionItem key={faq.id} name={`accordion-button-${faq.id}`}>
              <AccordionButton onClick={() => setIndex(faq.id -1)}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold">{faq.question}</Text>
                </Box>
                
              </AccordionButton >
              <AccordionPanel pb="4">{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
          <Box mb="8"></Box>
          <Box mb="8">
          <Heading size= "md" textAlign= "center">Spread</Heading>
        </Box>
          {FAQ_LIST_2.map(faq1 => (
            <AccordionItem key={faq1.id} name={`accordion-button-${faq1.id}`}>
              <AccordionButton onClick={() => setIndex(faq1.id -1)}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold">{faq1.question}</Text>
                </Box>
                
              </AccordionButton>
              <AccordionPanel pb="4">{faq1.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        <Box mb="8"></Box>
        <Box mb="8">
          <Heading size= "md" textAlign= "center">Prevention</Heading>
        </Box>
          {FAQ_LIST_3.map(faq2 => (
            <AccordionItem key={faq2.id} name={`accordion-button-${faq2.id}`}>
              <AccordionButton onClick={() => setIndex(faq2.id -1)}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold">{faq2.question}</Text>
                </Box>
                
              </AccordionButton>
              <AccordionPanel pb="4">{faq2.answer}</AccordionPanel>
            </AccordionItem>
          ))}
          <Box mb="8"></Box>
        <Box mb="8">
          <Heading size= "md" textAlign= "center">If You or Someone You Know is Sick or Had Contact with Someone who Has COVID-19</Heading>
        </Box>
          {FAQ_LIST_4.map(faq3 => (
            <AccordionItem key={faq3.id} name={`accordion-button-${faq3.id}`}>
              <AccordionButton onClick={() => setIndex(faq3.id -1)}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold">{faq3.question}</Text>
                </Box>
                
              </AccordionButton>
              <AccordionPanel pb="4">{faq3.answer}</AccordionPanel>
            </AccordionItem>
          ))}
          <Box mb="8"></Box>
        <Box mb="8">
          <Heading size= "md" textAlign= "center">Children</Heading>
        </Box>
          {FAQ_LIST_5.map(faq4 => (
            <AccordionItem key={faq4.id} name={`accordion-button-${faq4.id}`}>
              <AccordionButton onClick={() => setIndex(faq4.id -1)}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold">{faq4.question}</Text>
                </Box>
                
              </AccordionButton>
              <AccordionPanel pb="4">{faq4.answer}</AccordionPanel>
            </AccordionItem>
          ))}
          <Box mb="8"></Box>
        <Box mb="8">
          <Heading size= "md" textAlign= "center">Symptoms & Emergency Warning Signs</Heading>
        </Box>
          {FAQ_LIST_6.map(faq5 => (
            <AccordionItem key={faq5.id} name={`accordion-button-${faq5.id}`}>
              <AccordionButton onClick={() => setIndex(faq5.id -1)}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold">{faq5.question}</Text>
                </Box>
                
              </AccordionButton>
              <AccordionPanel pb="4">{faq5.answer}</AccordionPanel>
            </AccordionItem>
          ))}
          <Box mb="8"></Box>
        <Box mb="8">
          <Heading size= "md" textAlign= "center">Testing</Heading>
        </Box>
          {FAQ_LIST_7.map(faq6 => (
            <AccordionItem key={faq6.id} name={`accordion-button-${faq6.id}`}>
              <AccordionButton onClick={() => setIndex(faq6.id -1)}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold">{faq6.question}</Text>
                </Box>
                
              </AccordionButton>
              <AccordionPanel pb="4">{faq6.answer}</AccordionPanel>
            </AccordionItem>
          ))}
          <Box mb="8"></Box>
        <Box mb="8">
          <Heading size= "md" textAlign= "center">Funerals</Heading>
        </Box>
          {FAQ_LIST_8.map(faq7 => (
            <AccordionItem key={faq7.id} name={`accordion-button-${faq7.id}`}>
              <AccordionButton onClick={() => setIndex(faq7.id -1)}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold">{faq7.question}</Text>
                </Box>
                
              </AccordionButton>
              <AccordionPanel pb="4">{faq7.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        <Box mb="8"></Box>
        <Box mb="8">
          <Heading size= "md" textAlign= "center">Vaccine</Heading>
        </Box>
          {FAQ_LIST_9.map(faq8 => (
            <AccordionItem key={faq8.id} name={`accordion-button-${faq8.id}`}>
              <AccordionButton onClick={() => setIndex(faq8.id -1)}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold">{faq8.question}</Text>
                </Box>
                
              </AccordionButton>
              <AccordionPanel pb="4">{faq8.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
      
    )
}
