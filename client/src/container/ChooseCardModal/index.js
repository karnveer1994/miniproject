import { connect } from 'react-redux'
import ChooseCardModal from '../../components/ChooseCardModal'
import {
  getProjectData
} from '../../actions/createProjectActions'

const mapStateToProps = state => (
  {
    chooseCardModalStatus: state.DataProvider.chooseCardModalStatus,
  }
)

const mapDispatchToProps = { getProjectData }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseCardModal)