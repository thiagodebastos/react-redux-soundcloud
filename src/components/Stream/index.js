import { connect } from 'react-redux';
/* import { withRouter } from 'react-router-dom'; */
import Stream from './presenter';

function mapStateToProps(state) {
    const tracks = state.track;
    return {
        tracks
    };
}

export default /* withRouter( */ connect(mapStateToProps)(Stream) /* ) */;
