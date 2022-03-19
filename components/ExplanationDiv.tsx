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
              Rhapseed = Rhapsody × Seed
            </Text>
          </Heading>
          <Text>
            Rhapseed は Rhapsody(狂詩曲)とSeed(種)に由来します。
          </Text>
          <Text pb={5}>
            Rhapsodyは raptein(縫い合わす) と ode(詩) が語源とされ、転じてある一定の形式に縛られることなく様々な曲調のフレーズを紡いで1つの作品とする手法を意味します。
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
