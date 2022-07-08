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
import Business from "../types/business.type";
import Profile from "../types/profile.type";

interface Props {
  profile: Profile
}

export default function socialProfileWithImageHorizontal({profile}: Props) {

  return (
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        direction={{ base: 'column' }}
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
            src={profile.imgSrc}
            alt={profile.name.ja}
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
                {profile.title}
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
            {
              profile.awards.length > 0 && (
                <Text fontSize={'xs'} fontWeight={600}>主な受賞歴</Text>
              )
            }
            <SimpleGrid
              columns={[1, 1, 1, 1]}
              mt={profile.awards.length > 0 ? 2: 0}
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
