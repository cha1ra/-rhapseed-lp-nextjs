import type { NextPage } from 'next'
import {
  Box,
  SimpleGrid,
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

  const profiles = [
    {
      name: {
        en: 'Aira Sakajiri',
        ja: '坂尻 愛明',
      },
      imgSrc: './member-aira.png',
      title: "共同創業者",
      description: "慶應義塾大学卒業後、楽天株式会社にECコンサルタントとして新卒入社。株式会社BluePlanet-worksでシステムエンジニアを経験の後、2019年7月quintet株式会社を共同創業。議事録サービス、学校法人向け試験配信システムなど、複数サービスの要件定義・開発を担当。フリーランス活動を経たのち、入田とともに株式会社YuBASEを共同創業。",
      awards: [
        // {
        //   'date': '2019.04',
        //   'title': 'GLOBAL GEEK AUDITION “LAB” 優勝',
        // },
        // {
        //   'date': '2019.10',
        //   'title': 'SOMPO主催 DataScience Bootcamp Demo day 優勝',
        // },
        // {
        //   'date': '2021.12',
        //   'title': "Shibuya Startup University 0期 学長賞・渋谷区賞"
        // },
        // {
        //   'date': '2022.03',
        //   'title': 'Epson主催 HackTreck2022 優勝'
        // }
      ],
      tags: [
        'Vue.js', 'Nuxt.js', 'jQuery', 'PHP', 'Laravel', 'Python3', 'AWS'
      ]
    },
    {
      name: {
        en: 'Takashi Irita',
        ja: '入田 隆',
      },
      imgSrc: './member-takashi.png',
      title: '共同創業者',
      description: "慶應義塾大学大学院理工学研究科、修士課程を修了。学生時に始めた個人メディアをキッカケに、Web の世界にのめり込む。前職の株式会社キカガクにて、新規事業のエンジニアリングを担当。また、コンテンツマーケティングの責任者を兼任。2022 年 3 月に共同創業。個人開発した塗り絵 AR アプリが第 13 回キッズデザイン賞を受賞。",
      awards: [],
      tags: [
        'React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Unity', 'Python3'
      ]
    },
    {
      name: {
        en: 'Taichi Nakamura',
        ja: '中村 太一',
      },
      imgSrc: './member-taichi.png',
      title: '技術顧問',
      description: "早稲田大学理工学部応用化学科卒業。あさいち合同会社経営。ITシステムの受託開発をメインに、国内外のエンジニアと連携を図り開発業務をこなし、エンジニア歴は約20年にのぼる。サイネージ作成やエンタメ施設のシステム立ち上げ、動画サービスの開発など開発担当分野は多岐にわたる。",
      awards: [],
      tags: [
        'AWS', 'Nest.js', 'PHP', 'Laravel', 'Angular', 'jQuery', 'C', 'Rust', 'Swift'
      ]
    }
  ]

  return (
    <Box>
      <Box mb={4}>
        <TitleDiv title={title} />
      </Box>
      <Box mb={4}>
        <SimpleGrid
          spacing={3}
          columns={{base: 1, md: 2}}
        >
          {
            profiles.map(profile => (
              <ProfileCard profile={profile} />
            ))
          }
        </SimpleGrid>
      </Box>
    </Box>
  )
}
export default ProfileDiv
