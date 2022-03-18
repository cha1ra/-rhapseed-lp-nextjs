import type { NextPage } from 'next'
import {
  Box,
  Container,
  Center,
  Image,
  Text
} from "@chakra-ui/react";

// () => JSX.Element 型のままでOK
// cf.) https://kray.jp/blog/dont-have-to-use-react-fc-and-react-vfc/
const HeaderDiv = () => {
  return (
    <Box bg={'red'} >
      <Center>
        <Text>
          {'発想を紡げば、新発見の"種"になる'}
        </Text>
      </Center>
      <Center>
        <Image src='/logo.svg' alt='rhapseed' />
      </Center>
    </Box>
  )
}
export default HeaderDiv
