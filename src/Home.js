import React from 'react'
import Pokemon from './Pokemon'
import ChangeTheme from './ChangeTheme'
// import _ from 'lodash'
import clone from 'lodash/clone'
import ThemeContext from './context'


export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      theme: 'light'
    }
  }

  change() {
    this.state.theme === 'light' ?
      this.setState({ theme: 'dark' })
      :
      this.setState({ theme: 'light' })
  }

  render() {
    const N = 150
    const list = Array.apply(null, {length: N}).map(Number.call, Number)
    const listClone = clone(list)

    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div>
          <div className="text">
            <h1>Pokedex</h1>
            <p>Encuentra la lista de los primeros 150 pokemones.</p>
            <ChangeTheme onClick={this.change.bind(this)} />
          </div>
          <div className="pokemons">
            {
              list.map(i => <Pokemon key={i} pokemon={ i + 1 } />)
            }
          </div>
        </div>
      </ThemeContext.Provider>
    )
  }
}
