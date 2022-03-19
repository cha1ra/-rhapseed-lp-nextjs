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
    <Box py={12}>
      <Center mb={-5}>
        <Text>
          発想を紡げば 新発見の
        </Text>
        <Text color={'primary'} >種</Text>
        <Text>がある</Text>
      </Center>
      <Center>
        <Image
          src='/logo.svg'
          alt='rhapseed'
          width={'80%'}
          maxW={'500px'}
        />
      </Center>
    </Box>
  )
}
export default HeaderDiv
