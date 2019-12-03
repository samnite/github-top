import React from 'react';
import PropTypes from 'prop-types';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  padding: 1.5rem 0;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  img {
    width: 64px;
    margin-right: 0.5rem;
    border-radius: 10px;
  }
  p {
    padding: 0.5rem 0;
  }
`;

const StyledAddress = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 2rem;
  }
  svg {
    color: lightgray;
  }
`;

const UserItem = ({ user: { avatarUrl, login, name, bio, url, location, email } }) => {
  return (
    <StyledCard>
      <div>
        <img src={avatarUrl} alt={name} />
      </div>
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {login}
        </a>
        <span> {name}</span>
        <p>{bio}</p>
        <StyledAddress>
          <RoomIcon />
          <p>{location}</p>
          {email && (
            <>
              <EmailIcon /> <p>{email}</p>
            </>
          )}
        </StyledAddress>
      </div>
    </StyledCard>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
