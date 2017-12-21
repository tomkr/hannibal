import { connect } from 'react-redux';
import { addMember } from '../actions'
import MemberList from './MemberList';

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    addMember: name => {
      dispatch(addMember(name))
    }
  }
}

const Team = connect(mapStateToProps, mapDispatchToProps)(MemberList);

export default Team;
