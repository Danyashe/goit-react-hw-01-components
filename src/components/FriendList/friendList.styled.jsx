import styled from '@emotion/styled';

export const ItemFriend = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 9px;
  padding: 8px;
  width: 250px;
  border: 2px solid black;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
`;

export const Status = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img``;
export const NameFriend = styled.p``;
export const ListFriend = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
