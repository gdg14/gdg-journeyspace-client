import styled from 'styled-components';

import { IComment } from './interface';

const Wrapper = styled.div``;

const CommentInfoWrapper = styled.article`
  display: flex;
  justify-content: space-between;

  margin-bottom: 12px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileImage = styled.img`
  border: 1px solid #707070;
  border-radius: 100%;
  width: 35px;
  height: 35px;

  margin-right: 14px;
`;

const ProfileName = styled.h1`
  font-size: 12px;
  letter-spacing: -0.02em;
  opacity: 0.8;
  margin-bottom: 5px;
`;

const ProfileReportButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
  box-shadow: 0px 0px 5px #dddddd;
  padding: 3px 9px;

  font-size: 11px;
  opacity: 0.8;
`;

const CommentCreatedDate = styled.p`
  color: #666666;
  opacity: 0.6;
  letter-spacing: -0.02em;
  font-size: 14px;
`;

const CommentDescription = styled.p`
  font-size: 14px;
  letter-spacing: -0.02em;
  line-height: 1.5;
  opacity: 0.8;
  margin-bottom: 10px;
`;

interface IProps {
  comment: IComment;
}

function CommentItem({ comment }: IProps) {
  return (
    <Wrapper>
      <CommentInfoWrapper>
        <ProfileWrapper>
          <ProfileImage alt="comment_image" src={`${process.env.PUBLIC_URL}/user/default_profile.png`} />
          <div>
            <ProfileName>
              {comment.usr.name} {'>'}
            </ProfileName>
            <ProfileReportButton>신고</ProfileReportButton>
          </div>
        </ProfileWrapper>
        <CommentCreatedDate>2021년 7월 3일</CommentCreatedDate>
      </CommentInfoWrapper>
      <CommentDescription>{comment.content}</CommentDescription>
    </Wrapper>
  );
}

export default CommentItem;
