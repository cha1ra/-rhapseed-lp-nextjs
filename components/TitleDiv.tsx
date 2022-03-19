import {Box, Heading, Stack, Text} from "@chakra-ui/react";
import Title from "../types/title.type";

interface Props {
  title: Title;
  headingMb?: number;
}

const TitleDiv = ({title, headingMb = 0}: Props) => {
  return (
    <Stack spacing={0}>
      <Heading
        textAlign={'center'}
        fontWeight={600}
        lineHeight={'0.8'}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        textStyle={'rennie'}
        mb={headingMb}
      >
        <Text textStyle={'rennie'}>
          {title.en}
        </Text>
      </Heading>
      <Box
        textAlign={'center'}
      >
        <Text
          color={'gray.500'}
          fontSize={'sm'}
        >{title.ja}</Text>
      </Box>
    </Stack>
  )
}
export default TitleDiv
