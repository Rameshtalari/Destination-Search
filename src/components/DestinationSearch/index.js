import {Component} from 'react'

import DestinationItem from '../DestinationItem/index'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="destination-container">
          <h1 className="heading">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              className="input"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="icon"
            />
          </div>
          <ul className="list-container">
            {searchResults.map(eachItem => (
              <DestinationItem
                DestinationsDetailsList={eachItem}
                key={eachItem.id}
              />
            ))}
            )
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
