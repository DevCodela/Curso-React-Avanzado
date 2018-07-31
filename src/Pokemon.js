// @flow
import * as React from 'react'
import Box from './Box'

type Props = {
  pokemon: number,
  // hi?: string,
}

export default class Pokemon extends React.Component<Props> {
  render() {
    const image = `/static/img/${this.props.pokemon}.png`
    return(
      <React.Fragment>
        <Box>
          <img src={ image } />
        </Box>
        <div>{this.props.pokemon}</div>
      </React.Fragment>
    )
  }
}
