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
