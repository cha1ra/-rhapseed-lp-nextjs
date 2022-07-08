import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import TitleDiv from "./TitleDiv";
import Title from "../types/title.type";


const CompanyDiv = () => {

  const title: Title = {
    en: 'Company',
    ja: '会社概要',
  }

  return (
    <Box>
      <Box mb={4}>
        <TitleDiv
          title={title}
          headingMb={2}
        />
      </Box>
      <Table variant='simple'>
        <Tbody>
          <Tr>
            <Td>会社名</Td>
            <Td>株式会社YuBASE (ユーベース)</Td>
          </Tr>
          <Tr>
            <Td>代表者氏名</Td>
            <Td>
              代表取締役　　坂尻 愛明<br/>
              取締役　　　　入田 隆
            </Td>
          </Tr>
          <Tr>
            <Td>事業内容</Td>
            <Td>Webアプリケーション開発・プログラミング教育</Td>
          </Tr>
          <Tr>
            <Td>所在地</Td>
            <Td>神奈川県川崎市中原区新丸子東3-1301 G1610</Td>
          </Tr>
          <Tr>
            <Td>設立年月日</Td>
            <Td>2022年3月9日</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )

}
export default CompanyDiv;
