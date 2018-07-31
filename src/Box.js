import React, { Component } from 'react'
import withHOC from './hoc'


class Box extends Component {
  render() {
    return(
      <div className={`pokemon ${this.props.theme}`}>
        { this.props.children }
      </div>
    )
  }
}

export default withHOC(Box)
