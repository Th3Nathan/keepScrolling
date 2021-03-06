import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import RightNavBar from './right_nav_bar';
import { withRouter } from 'react-router';

const mapStateToProps = ( state, ownProps ) => {
  const formType = ownProps.router.location.pathname;
  return {
    currentUser: state.session.currentUser,
    formType: formType
  };
};

const mapDispatchToProps = dispatch => ({
  guestLogin: user => dispatch(login(user)),
  logout: () => dispatch(logout())
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RightNavBar));
