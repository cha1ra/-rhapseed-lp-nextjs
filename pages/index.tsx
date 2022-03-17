import type { NextPage } from 'next'
import {
  Box,
  Container,
  Center,
  Image,
  Text
} from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container  py={6}>
      <Box bg={'red'} >
        <Center>
          <Text>
            {'発想を紡げば、新発見の"種"になる。'}
          </Text>
        </Center>
        <Center>
          <Image src='/logo.svg' alt='rhapseed' />
        </Center>
      </Box>

    </Container>
  )
}

export default Home
