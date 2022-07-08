import type { NextPage } from 'next'
import {
  Box,
  Heading,
  Link,
  Text, useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
      {business.link && (
        <Link href={business.link} isExternal>
          もっとみる <ExternalLinkIcon mx='2px' />
        </Link>
      )}

    </Box>
  )
}
export default BusinessCard
