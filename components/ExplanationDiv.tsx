import {
  Box,
  Text,
  Stack, Image, Heading
} from '@chakra-ui/react';

const ExplanationDiv = () => {


  return (
    <Box w={'100vw'}>
      <Box
        p={4}
        color={'gray.50'}
        backgroundImage={'./score.jpeg'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
      >
        <Stack
          spacing={4} my={12} maxW={740} mx={'auto'}
          p={6}
          backdropFilter='auto' backdropBlur='6px'
        >
          <Heading
            textAlign={'center'}
            fontWeight={600}
            lineHeight={'0.8'}
            fontSize={{ base: '4xl', sm: '4xl', md: '6xl' }}
            textStyle={'rennie'}
            mb={8}
          >
            <Text textStyle={'rennie'}>
              遊 × 優 × 悠
            </Text>
          </Heading>
          <Text>
            遊び心を忘れずに、優れたプロダクトを悠久に。
          </Text>
          <Text pb={5}>
            ハッカソンで偶然集まった
          </Text>
          <Text pb={5}>
            これは、新しい価値を生み出す時のプロセスと同じです。
          </Text>
          <Text>
            一見すると全く無関係に思える複数のアイデアをつなげる。
          </Text>
          <Text pb={5}>
            違う思考やアイデアの種を面白がる。
          </Text>
          <Text pb={5}>
            そんな種同士を繋げてあっと言わせる作品を生み出す。
          </Text>
          <Text>
            Rhapseedはその体現者集団であり続けます。
          </Text>
        </Stack>
      </Box>
    </Box>
  )
}
export default ExplanationDiv
