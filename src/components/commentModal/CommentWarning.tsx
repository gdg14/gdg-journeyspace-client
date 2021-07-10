import styled from 'styled-components';

const WarningDescription = styled.p`
  font-size: 12px;
  letter-spacing: -0.02em;
  opacity: 0.8;
  text-align: center;
  margin-top: 20px;
`;

function CommentWarning() {
  return <WarningDescription>다른 사람들의 댓글은 볼 수 없어요.</WarningDescription>;
}

export default CommentWarning;
