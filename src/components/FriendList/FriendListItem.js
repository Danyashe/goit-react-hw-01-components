import { ItemFriend, Status, Avatar, NameFriend } from './friendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemFriend>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <NameFriend>{name}</NameFriend>
    </ItemFriend>
  );
};

export default FriendListItem;
