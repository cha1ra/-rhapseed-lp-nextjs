import {
  Box,
  SimpleGrid,
} from '@chakra-ui/react';
import Business from "../types/business.type";
import BusinessCard from "./BusinessCard";
import TitleDiv from "./TitleDiv";
import Title from "../types/title.type";

const BusinessDiv = () => {

  const businesses: Business[] = [
    {
      id: 1,
      title: 'AnyPalette',
      description: '作品の想いと世界を"結ぶ"をミッションに、アーティストとユーザをつなぐ空間装飾品のマーケットプレイスです。',
      link: 'https://any-palette.com/'
    },
    {
      id: 2,
      title: 'Webアプリ開発',
      description: 'Webアプリ開発を請負開発しています。フルスクラッチの開発から、kintoneをはじめとしたプラットフォーム上でのカスタマイズまで幅広く対応しています。',
      link: undefined
    },
    {
      id: 3,
      title: 'プログラミング教育',
      description: 'プログラミング講師としてプログラミングスクールや企業様に対する教育事業を展開しています。',
      link: undefined
    }
  ]

  const title: Title = {
    en: 'Business',
    ja: '主な事業'
  }


  return (
    <Box>
      <Box mb={4}>
        <TitleDiv title={title} />
      </Box>
      <SimpleGrid
        spacing={3}
        columns={{base: 1, sm: 2, md: 3}}
      >
        {
          businesses.map((business,index) => (
            <BusinessCard
              key={business.id}
              business={business}
            />
          ))
        }
      </SimpleGrid>
    </Box>
  )
}
export default BusinessDiv
