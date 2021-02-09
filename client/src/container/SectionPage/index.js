import { connect } from 'react-redux'
import SectionPage from '../../components/SectionPage';

const mapStateToProps = state => (
  { 
    results: state.DataProvider.results,
  }
)

export default connect(
  mapStateToProps,
  null
)(SectionPage)
