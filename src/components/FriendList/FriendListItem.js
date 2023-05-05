import { ItemFriend, Status, Avatar, NameFriend } from './friendList.styled';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  <ItemFriend>
    <Status>{isOnline}</Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <NameFriend>{name}</NameFriend>
  </ItemFriend>;
};

FriendListItem.PropTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
