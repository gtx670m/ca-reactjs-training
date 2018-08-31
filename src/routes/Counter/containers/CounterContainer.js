import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import Actions from '../../../redux/actions'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Counter from '../components/Counter'

class CounterContainer extends Component {
  render () {
    return (<Counter {...this.props} />)
  }
}

const mapStateToProps = (state) => {
  return {
    state: { ...state.AppReducer }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...Actions.AppAction }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
