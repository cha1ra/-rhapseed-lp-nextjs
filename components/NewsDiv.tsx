import type { NextPage } from 'next'
import {
  Center,
  Box,
  Tag,
  Stack,
  Text
} from "@chakra-ui/react";
import News from "../types/news.type";
import Title from "../types/title.type";
import TitleDiv from "./TitleDiv";

const NewsDiv = () => {

  const news: News[] = [
    {
      'title': '当サイトをオープンしました',
      'description': '当サイトをオープンしました',
      'category': 'Info',
      'created_at': '2021.07.01',
    },
    {
      'title': "Startup Tokyo TAMA にてプログラミング講義を実施します",
      'description': 'hogehoge',
      'category': 'News',
      'created_at': '2021.12.04',
    },
    {
      'title': 'Shibuya Startup University で学長賞・渋谷区賞を受賞しました',
      'description': 'hogehoge',
      'category': 'Award',
      'created_at': '2021.12.15',
    },
    {
      'title': 'サイト内容をリニューアルしました',
      'description': 'hogehoge',
      'category': 'Info',
      'created_at': '2022.01.09',
    },
    {
      'title': '株式会社Rhapseedを設立しました',
      'description': 'hogehoge',
      'category': 'Company',
      'created_at': '2022.03.10',
    },
    {
      'title': 'Epson主催 HackTreck2022にて優勝しました',
      'description': 'hogehoge',
      'category': 'Award',
      'created_at': '2022.03.15',
    },
    {
      'title': '「熱意ある受験生保護者に学校の魅力を継続発信するには？」に登壇します',
      'description': 'hogehoge',
      'category': 'News',
      'created_at': '2022.03.17',
    },
    {
      'title': '社名をYuBASEに変更しました',
      'description': 'hogehoge',
      'category': 'News',
      'created_at': '2022.06.17',
    },
    {
      'title': 'Tech×事業企画 コミュニティで起業をBOOSTしよう！に登壇します',
      'description': 'hogehoge',
      'category': 'News',
      'created_at': '2022.07.08',
    },
  ]

  const title: Title = {
    en: 'News',
    ja: '新着情報'
  }

  return (
    <Center>
      <Box
        maxW={840}
      >
        <Box mb={4}>
          <TitleDiv title={title} />
        </Box>
        <Stack spacing={[1,1,2]}>
          {
            news.map((n,index) => (
              <Box key={index} d={['block', 'block', 'flex']} alignItems={'center'}>
                <Box
                  w={'inherit'}
                  d={'flex'}
                  alignItems={'center'}
                  mb={[-1, -1, 0]}
                >
                  <Text
                    pr={4}
                    textStyle={'rennie'}
                    fontSize={'xl'}
                    w={'82px'}
                  >
                    {n.created_at}
                  </Text>
                  <Tag size="sm" minW={`100px`} h={2} variant='solid'mr={4}>
                    <Text
                      color={'white'}
                      w={'100%'}
                      textAlign={'center'}
                      fontSize={['xs', 'xs', 'sm']}
                    >
                      {n.category}
                    </Text>
                  </Tag>
                </Box>
                <Text fontSize={['xs', 'xs', 'sm']}>{n.title}</Text>
              </Box>
            ))
          }
        </Stack>
      </Box>
    </Center>
  )
}
export default NewsDiv
