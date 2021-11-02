import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import parse from 'html-react-parser';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      listingId: 1,
      listing: {}
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    console.log(this.state.listing);
  }

  getData() {
    // console.log(this.state.listingId);
    axios.get(`/api/hostedBy/${this.state.listingId}`)
      .then(resp => {
        this.setState({ listing: resp.data });
      })
      .catch(err => {
        // console.log('===== AXIOS get request failed');
      });
  }

  isPlural(val) {
    return val > 1 ? 's' : '';
  }

  render() {
    return (
      <div className="hostedBy">
        {parse(this.state.listing.accomodates + ' guest' + this.isPlural(this.state.listing.accomodates) + ' ' + unescape('&middot;') + ' ' + this.state.listing.bedrooms + ' bedroom' + this.isPlural(this.state.listing.bedrooms) + ' ' + unescape('&middot;') + ' ' + this.state.listing.beds + ' bed' + this.isPlural(this.state.listing.beds) + ' ' + unescape('&middot;') + ' ' + this.state.listing.bathrooms + ' bath' + this.isPlural(this.state.listing.bathrooms))}
        <span id='forTest'></span>
      </div>
    )
  }
}

export default App;