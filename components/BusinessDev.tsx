import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import Business from "../types/business.type";
import BusinessCard from "./BusinessCard";

const NewsDiv = () => {

  const businesses: Business[] = [
    {
      id: 1,
      title: 'Webアプリ開発事業',
      description: 'Webアプリ開発を請負開発しています。フルスクラッチの開発から、kintoneをはじめとしたプラットフォーム上でのカスタマイズまで幅広く対応しています。',
    },
    {
      id: 2,
      'title': 'プログラミング教育事業',
      'description': 'プログラミング講師としてプログラミングスクールや企業様に対する教育事業を展開しています。',
    }
  ]


  return (
    <>
      <Center>
        <Text>
          News
        </Text>
      </Center>
      <Heading
        fontWeight={600}
        fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
      >
        主な事業
      </Heading>
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
    </>
  )
}
export default NewsDiv
