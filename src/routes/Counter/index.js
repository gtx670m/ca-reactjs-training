
export default () => ({
  path : 'counter',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/CounterContainer').default
      cb(null, Counter)
    }, 'counter')
  }
})
