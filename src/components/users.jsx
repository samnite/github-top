import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../store/actions/github-actions';
import UserItem from './user-item';

const Users = ({ getUsers, data: { users, loading } }) => {
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }
  return users
    ? users.map(user => {
        return <UserItem user={user.node} key={user.node.id} />;
      })
    : null;
};

const mapStateToProps = state => ({
  data: state.data,
});

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getUsers })(Users);
