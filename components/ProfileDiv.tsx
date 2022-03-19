import type { NextPage } from 'next'
import {
  Box,
  Center,
  List,
  Text
} from "@chakra-ui/react";
import News from "../types/news.type";
import Title from "../types/title.type";
import TitleDiv from "./TitleDiv";
import ProfileCard from "./ProfileCard";

const ProfileDiv = () => {

  const news: News[] = [
    {
      'title': '当サイトをオープンしました',
      'description': '当サイトをオープンしました',
      'category': 'News',
      'created_at': '2021.07.01',
    },
    {
      'title': 'サイト内容をリニューアルしました',
      'description': 'hogehoge',
      'category': 'News',
      'created_at': '2022.01.09',
    }
  ]

  const title: Title = {
    en: 'Profile',
    ja: '代表者紹介',
  }

  return (
    <Box>
      <Box mb={4}>
        <TitleDiv title={title} />
      </Box>
      <ProfileCard />
    </Box>
  )
}
export default ProfileDiv
