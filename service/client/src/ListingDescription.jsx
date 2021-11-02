import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import parse from 'html-react-parser';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class ListingDescription extends React.Component {
  constructor({ location }) {
    super();

    let propId = 1;

    // use query string
    let propQuery = location.search;
    if (propQuery) {
      let id = parseInt(propQuery.slice(11));
      console.log(id);
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

  //   componentDidUpdate() {
  //     console.log(this.state.listing);
  //   }

  getData() {
    axios.get(`http:///3.141.196.223:5001/api/listingdescription/${this.state.listingId}`)
      .then(resp => {
        this.setState({ listing: resp.data[0] });
      })
      .catch(err => {
        console.log('===== AXIOS listing description get request failed');
      });
  }

  render() {
    return (
      <div className="description">
        {parse('' + this.state.listing.listingDescription)}
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Route path="/" component={ListingDescription} />
  </Router>,
  document.getElementById('listingDescription')
);