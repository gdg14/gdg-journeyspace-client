import { gql } from '@apollo/client';

export const GET_RANDOM_JOURNEY = gql`
  query getDiaryRandom {
    getDiaryRandom {
      id
      usr {
        id
        name
      }
      title
      content
      feelings
      photo1
      photo2
      photo3
      category
      publicYN
      regDtm
    }
  }
`;
