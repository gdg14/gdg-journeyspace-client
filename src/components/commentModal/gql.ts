import { gql } from '@apollo/client';

export const GET_COMMENT_LIST = gql`
  query getComments($diaryId: Int!) {
    getComments(diaryId: $diaryId) {
      content
      usr {
        id
        name
      }
    }
  }
`;

export const SAVE_COMMENT = gql`
  mutation saveComment($usrId: String!, $diaryId: Int!, $content: String!) {
    saveComment(usrId: $usrId, diaryId: $diaryId, content: $content)
  }
`;
