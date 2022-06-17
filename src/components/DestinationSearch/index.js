import './index.css'

import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            className="search-input"
            type="search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon-size"
          />
        </div>
        <ul className="destination-list">
          {searchResults.map(eachDestination => (
            <DestinationItem
              destinationDetails={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
