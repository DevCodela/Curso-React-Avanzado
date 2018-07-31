import React, { Component } from 'react'
import withHOC from './hoc'


class ChangeTheme extends Component {
  render() {
    return(
      <a
        href="#"
        className="btn"
        onClick={() => this.props.onClick()}
      >
        Cambiar a {this.props.theme === 'light' ? 'dark' : 'light'}
      </a>
    )
  }
}

export default withHOC(ChangeTheme)
