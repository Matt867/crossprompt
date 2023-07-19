'use client';

import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import { Container } from "postcss";

export interface GuessesProps {
    guesses: string[];
}

export default function Guesses({guesses}: GuessesProps) {
    return (
        <Stack gap={'0'}>
            {guesses.map(guess => {
                return <Card p={15} mb={15} variant={'filled'}><Heading size={'lg'}>{guess}</Heading></Card>;
            })}
        </Stack>
    )
}