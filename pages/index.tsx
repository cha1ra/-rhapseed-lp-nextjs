import type { NextPage } from 'next'
import {
  Box,
  Container,
  Stack,
  Text
} from "@chakra-ui/react";
import HeaderDiv from "../components/HeaderDiv";
import NewsDiv from "../components/NewsDiv";
import BusinessDev from "../components/BusinessDev";

const Home: NextPage = () => {
  return (
    <Container maxW='container.lg' py={6}>
      <Stack spacing={12}>
        <HeaderDiv />
        <NewsDiv />
        <BusinessDev />
      </Stack>
    </Container>
  )
}

export default Home
