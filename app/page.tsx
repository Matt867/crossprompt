'use client'

import Crossword from '@jaredreisinger/react-crossword';
import { Card, CardBody, CardHeader, Container, Flex, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react'

export default function Home() {
  const data = {
    across: {
      1: {
        clue: 'one plus one',
        answer: 'TWO',
        row: 0,
        col: 0,
      },
    },
    down: {
      2: {
        clue: 'three minus two',
        answer: 'ONE',
        row: 0,
        col: 2,
      },
    },
  };

  return (
    <Container maxW="container.xl" pt={15}>
      <Card mb={15} variant={'outline'}>
        <CardHeader>
          <Flex flexDirection={'column'}>
            <Heading size={'3xl'}>
              CrossPrompt
            </Heading>
            <Text fontWeight={'bold'}>A Game by Matthew Sidaway</Text>
          </Flex>
        </CardHeader>
      </Card>
      <Flex flexDirection={'row'} wrap={'wrap'}>
        <Container minW={'container.xs'} p={0} m={0}>
          <Crossword data={data} />
        </Container>
        <Card variant={'outline'} minW={'container.xs'}>
          <CardBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lectus consequat, pellentesque ligula eu, eleifend eros. Fusce tristique ullamcorper augue, sed tempus sem tristique non. Aenean convallis mi nec ultrices consequat. Nulla malesuada leo nec tellus efficitur, eu interdum mauris euismod. Nam pharetra mi vitae tellus tempor, a finibus justo laoreet. Cras sed dolor magna. Maecenas in sapien ultrices, finibus orci id, dapibus justo.
            </Text>
          </CardBody>
        </Card>
      </Flex>
    </Container>
  );
}
