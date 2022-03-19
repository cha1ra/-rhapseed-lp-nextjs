import {
  Box,
  Badge,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';

export default function socialProfileWithImageHorizontal() {

  const profile = {
    name: {
      en: 'Aira Sakajiri',
      ja: '坂尻 愛明',
    },
    description: "慶應義塾大学卒業後、楽天株式会社にECコンサルタントとして新卒入社。株式会社BluePlanet-worksでシステムエンジニアを経験の後、2019年7月quintet株式会社を共同創業。議事録サービス、学校法人向け試験配信システムなど、複数サービスの要件定義・開発を担当。フリーランス活動を経たのち、2022年3月株式会社Rhapseedを創業。",
    awards: [
      {
        'date': '2019.04',
        'title': 'GLOBAL GEEK AUDITION “LAB” 優勝',
      },
      {
        'date': '2019.10',
        'title': 'SOMPO主催 DataScience Bootcamp Demo day 優勝',
      },
      {
        'date': '2021.12',
        'title': "Shibuya Startup University 0期 学長賞・渋谷区賞"
      },
      {
        'date': '2022.03',
        'title': 'Epson主催 HackTreck2022 優勝'
      }
    ],
    tags: [
      'JavaScript', 'Vue.js', 'React', 'jQuery', 'PHP', 'Laravel', 'Python3', 'AWS'
    ]
  }

  return (
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        direction={{ base: 'column', md: 'row' }}
        bg='white'
        boxShadow={'2xl'}
        padding={4}>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Image
            borderRadius={'full'}
            objectFit="cover"
            boxSize="150px"
            src={'./member-aira.png'}
            alt="坂尻 愛明"
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
          p={1}
          pt={2}
          spacing={4}
        >
          <Stack spacing={1}>
            <Stack spacing={0} direction={'row'} alignItems={'end'}>
              {/*<Text textStyle={'rennie'} fontSize={'6xl'} fontWeight={600} mb={-4}>*/}
              {/*  {profile.name.en}*/}
              {/*</Text>*/}
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={600} mr={2}>
                {profile.name.ja}
              </Heading>
              <Text fontWeight={300} color={'gray.500'} fontSize={'sm'} mb={6}>
                Webエンジニア プログラミング講師
              </Text>
            </Stack>
          </Stack>

          <Stack spacing={0}>
            <Text fontSize={'xs'} fontWeight={600}>略歴</Text>
            <Text
              fontSize={'sm'}
              color={'gray.700'}
            >
              {profile.description}
            </Text>
          </Stack>
          <Stack spacing={0}>
            <Text fontSize={'xs'} fontWeight={600}>主な受賞歴</Text>
            <SimpleGrid
              columns={[1, 1, 1, 2]}
              mt={2}
            >
              {profile.awards.map((award, index) => (
                <Stack
                  direction={'row'}
                  key={index}
                >
                  <Text
                    variant="solid"
                    fontSize={'xs'}
                    fontWeight={300}
                    mr={2}
                    width={12}
                  >
                    {award.date}
                  </Text>
                  <Text
                    key={index}
                    variant="solid"
                    fontSize={'xs'}
                    fontWeight={300}
                    mr={2}
                  >
                    {award.title}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
          <Box
            mt={6}
          >
            <Flex
              align={'center'}
              direction={'row'}
              flexWrap={'wrap'}
            >
              {
                profile.tags.map((tag: string) => (
                  <Badge
                    key={tag}
                    px={2}
                    py={1}
                    mb={1}
                    mr={2}
                    bg={'gray.50'}
                    fontWeight={'400'}
                  >
                    #{tag}
                  </Badge>
                ))
              }
            </Flex>
          </Box>
        </Stack>
      </Stack>
  );
}
