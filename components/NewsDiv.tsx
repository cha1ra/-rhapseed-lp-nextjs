import type { NextPage } from 'next'
import {
  Box,
  Center,
  List,
  Text
} from "@chakra-ui/react";
import News from "../types/news.type";

const NewsDiv = () => {

  const news: News[] = [
    {
      'title': 'News 1',
      'description': 'hogehoge',
      'category': 'News',
      'created_at': '2021-07-01T00:00:00.000Z',
    },
    {
      'title': 'News 1',
      'description': 'hogehoge',
      'category': 'News',
      'created_at': '2021-07-01T00:00:00.000Z',
    }
  ]

  return (
    <Box>
      <Center>
        <Text>
          News
        </Text>
      </Center>
      {
        news.map((n,index) => (
          <Center key={index} mb={1}>
            <Text pr={4}>{n.title}</Text>
            <Text>{n.created_at}</Text>
          </Center>
        ))
      }
    </Box>
  )
}
export default NewsDiv
