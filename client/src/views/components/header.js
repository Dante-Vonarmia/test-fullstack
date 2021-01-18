import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = props => {
  const { logoutUser, authedUser } = props;

  return (
    <header>
      <nav>
        <Link to='/'>Lightning Talk</Link>
        {
          !!authedUser ? (
            <div>
              <Link to='/new'>New</Link>
              <span>{authedUser.name}</span>
              <button onClick={logoutUser}>Logout</button>
            </div>
          ) : (
            <Link to='/login'>Sign in</Link>
          )
        }
      </nav>
    </header>
  )
}

Header.contextTypes = {
  router: PropTypes.object,
};

// Header.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   authedUser: PropTypes.shape({
//     name: PropTypes.string
//   })
// };
const mapStateToProps = (state) => ({
    authedUser: state.users.authedUser.user
})

export default connect(mapStateToProps, null)(Header);