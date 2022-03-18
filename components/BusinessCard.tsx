import type { NextPage } from 'next'
import {
  Avatar, Badge,
  Box, Button,
  Center, Heading,
  List, Stack,
  Text, useColorModeValue
} from "@chakra-ui/react";
import Business from "../types/business.type";

interface Props {
  business: Business
}


const BusinessCard = ({business}: Props) => {

  return (
    <Box
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'lg'}
      rounded={'lg'}
      p={6}
    >
      <Heading fontSize={'xl'} fontFamily={'body'} mb={4}>
        {business.title}
      </Heading>
      <Text
        fontSize={'sm'}
        color={useColorModeValue('gray.700', 'gray.400')}
        px={3}>
        {business.description}
      </Text>

      <Stack
        align={'center'}
        justify={'start'}
        direction={'row'}
        mt={6}
      >
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue('gray.50', 'gray.800')}
          fontWeight={'400'}>
          #art
        </Badge>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue('gray.50', 'gray.800')}
          fontWeight={'400'}>
          #photography
        </Badge>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue('gray.50', 'gray.800')}
          fontWeight={'400'}>
          #music
        </Badge>
      </Stack>
    </Box>
  )
}
export default BusinessCard
