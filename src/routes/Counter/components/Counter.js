import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    return (
      <div style={{ margin: '0 auto' }}>
        <h2>Counter: {this.props.state.counter}</h2>
        <button className='btn btn-primary' onClick={() => this.props.actions.increment()}>
          Increment
        </button>
        {' '}
        <button className='btn btn-secondary' onClick={() => this.props.actions.doubleAsync()}>
          Double (Async)
        </button>
      </div>
    )
  }
}

export default Counter
