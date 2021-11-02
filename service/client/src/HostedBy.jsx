import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import parse from 'html-react-parser';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class HostedBy extends React.Component {
  constructor({ location }) {
    super();
    let propId = 1;

    // use query string
    let propQuery = location.search;
    if (propQuery) {
      let id = parseInt(propQuery.slice(11));
      if (id > 0) {
        propId = id;
      }
    }

    // using path params
    propId = location.pathname.substr(7);

    this.state = {
      listingId: propId,
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
    axios.get(`http:///3.141.196.223:5001/api/hostedBy/${this.state.listingId}`)
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

export default HostedBy;

ReactDOM.render(
  <Router>
    <Route path="/" component={HostedBy} />
  </Router>,
  document.getElementById('hostedBy')
);