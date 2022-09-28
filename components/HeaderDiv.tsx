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
      <Center mb={4}>
        <Text>
          仕事に、
        </Text>
        <Text color={'primary'} >遊</Text>
        <Text>び心を</Text>
      </Center>
      <Center>
        <Image
          src='/logo.svg'
          alt='YuBASE'
          width={'60%'}
          maxW={'400px'}
        />
      </Center>
    </Box>
  )
}
export default HeaderDiv
