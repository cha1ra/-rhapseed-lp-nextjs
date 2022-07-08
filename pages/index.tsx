import type { NextPage } from 'next'
import {
  Box,
  Container,
  Stack,
  Text
} from "@chakra-ui/react";
import {
  fetchApp,
  fetchArticles
} from "../lib/api";
import HeaderDiv from "../components/HeaderDiv";
import NewsDiv from "../components/NewsDiv";
import ExplanationDiv from "../components/ExplanationDiv";
import BusinessDiv from "../components/BusinessDiv";
import ProfileDiv from "../components/ProfileDiv";
import CompanyDiv from "../components/CompanyDiv";
import SEO from "../components/SEO";

interface Props {
  app: any;
  articles: any[];
  total: any;
}


const Home = (props: Props) => {
  console.log('testtest')
  console.log(props)
  return (
    <>
      <SEO />
      <Stack spacing={24} py={12}>
        <Container maxW='container.lg' py={6} mx={'auto'}>
          <HeaderDiv />
        </Container>
        <Box mx={'auto'}>
          <Container maxW='container.lg' py={6} mx={'auto'}>
            <NewsDiv />
          </Container>
        </Box>
        <Box mx={'auto'}>
          <Container maxW='container.lg' py={6} mx={'auto'}>
            <BusinessDiv />
          </Container>
        </Box>
        {/*<ExplanationDiv />*/}
        <Box mx={'auto'}>
          <Container maxW='container.lg' py={6} mx={'auto'}>
            <ProfileDiv />
          </Container>
        </Box>
        <Box mx={'auto'}>
          <Container maxW='container.lg' py={6} mx={'auto'}>
            <CompanyDiv />
          </Container>
        </Box>
      </Stack>
      <Box backgroundColor={'accent'} textAlign={'center'} py={1}>
        <Text fontSize="sm" color="gray.50">
          &copy; {new Date().getFullYear()} YuBASE, Inc. All rights reserved.
        </Text>
      </Box>

    </>
  )
}

// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
// export async function getStaticProps(): Promise<{ props: HomeProps }> {
export async function getStaticProps() {
  const app = await fetchApp();
  // const { archives } = await fetchArchives();
  const { articles, total } = await fetchArticles();
  return {
    props: {
      app,
      articles,
      total
    },
  };
}


export default Home
