import React from 'react'
import ThemeContext from './context'

const withHOC = (Component) => {
  class Wrapper extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {
            theme => (
              <Component theme={theme} {...this.props} />
            )
          }
        </ThemeContext.Consumer>
      )
    }
  }
  return Wrapper
}

export default withHOC
