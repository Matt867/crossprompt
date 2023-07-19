'use client'

import { Button, Card, CardBody, CardHeader, Container, Flex, Grid, GridItem, Heading, Input, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react';
import Guesses from './components/Guesses';

export default function Home() {
  const [guessValue, setGuessValue] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuessValue(e.target.value);
  }
  
  const handleSubmit = () => {
    if (guessValue === "") {
      return;
    }
    setGuesses([...guesses, guessValue]);
    setGuessValue("");
  }

  return (
    <Container maxW="container.xl" pt={15}>
      <Card mb={15} variant={'outline'}>
        <CardHeader>
          <Flex flexDirection={'column'} align={'center'}>
            <Heading size={'3xl'}>
              CrossPrompt
            </Heading>
            <Text fontWeight={'bold'}>A Game by Matthew Sidaway</Text>
          </Flex>
        </CardHeader>
      </Card>
      <Card variant={'outline'} p={15}>
        <Container size={'container.md'} p={0}>
          <Guesses guesses={guesses}/>
          <Input size={'lg'} placeholder='Enter your guess here' onChange={handleChange} value={guessValue} mb={15}/>
          <Button size={'lg'} colorScheme={'green'} onClick={handleSubmit} minW={'100%'}>Submit</Button>
        </Container>
      </Card>
      </Container>
  );
}
