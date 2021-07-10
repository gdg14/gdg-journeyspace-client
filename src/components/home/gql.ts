import { gql } from '@apollo/client';

export const GET_DIARY_MONTH = gql`
  query getDiaryByMonth($yyyymm: String!) {
    getDiaryByMonth(yyyymm: $yyyymm) {
      id
      feelings
      regDtm
    }
  }
`;

export const SAVE_DIARY = gql`
  mutation saveDiary(
    $usrId: String!
    $title: String!
    $content: String!
    $feelings: String!
    $category: String!
    $publicYN: String!
  ) {
    saveDiary(
      usrId: $usrId
      title: $title
      content: $content
      feelings: $feelings
      category: $category
      publicYN: $publicYN
    )
  }
`;

export const GET_DIARY_USER = gql`
  query getDiaryListByUsr($usrId: String!) {
    getDiaryListByUsr(usrId: $usrId) {
      id
      usr {
        id
      }
      title
      content
      feelings
      category
      publicYN
    }
  }
`;

export const GET_DIARY_ID = gql`
  query getDiaryById($id: Int!) {
    getDiaryById(id: $id) {
      id
      usr {
        id
      }
      title
      content
      feelings
      category
      publicYN
    }
  }
`;
