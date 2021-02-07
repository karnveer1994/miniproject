import { connect } from 'react-redux'
import ChooseCardModal from '../../components/ChooseCardModal'
import { 
    postProjectData
} from '../../actions/createProjectActions'

const mapStateToProps = state => (
  { 
    chooseCardModalStatus: state.DataProvider.chooseCardModalStatus,
  }
)

const mapDispatchToProps = { postProjectData }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseCardModal)