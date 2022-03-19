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
      >
        {business.description}
      </Text>
    </Box>
  )
}
export default BusinessCard
