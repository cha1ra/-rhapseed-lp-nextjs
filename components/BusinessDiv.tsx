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
      title: 'Webアプリ開発',
      description: 'Webアプリ開発を請負開発しています。フルスクラッチの開発から、kintoneをはじめとしたプラットフォーム上でのカスタマイズまで幅広く対応しています。',
    },
    {
      id: 2,
      'title': 'プログラミング教育',
      'description': 'プログラミング講師としてプログラミングスクールや企業様に対する教育事業を展開しています。',
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
        columns={{base: 1, md: 2}}
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
