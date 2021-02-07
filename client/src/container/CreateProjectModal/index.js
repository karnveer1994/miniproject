import { connect } from 'react-redux'
import CreateProjectModal from '../../components/CreateProjectModal'
import { 
    postProjectData
} from '../../actions/createProjectActions'

const mapStateToProps = state => (
  { 
    createProjectModalStatus: state.DataProvider.createProjectModalShow,
  }
)

const mapDispatchToProps = { postProjectData }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProjectModal)
