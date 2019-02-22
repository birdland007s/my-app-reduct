import { connect } from 'react-redux'
import { markSquare } from '../actions/Game'
import Game from '../components/Game'

const mapStateToProps = state => {
    return {
        game: state.game,
    }
}

const mapDispatchProps = dispatch => {
    return {
        markSquare: (mark, index) => dispatch(markSquare(mark, index))
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Game)