const {RESTDataSource} = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getTracksForHome() {
    return this.get('tracks');
  }

  // To prevent malicious clients from accessing or manipulating data they shouldn't be,
  // we recommend using the encodeURIComponent function for any HTTP path that
  // accepts dynamic input. encodeURIComponent is a standard JavaScript function
  // that encodes special characters in a URI, preventing a possible injection attack vector.
  getAuthor(authorId) {
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }
}

module.exports = TrackAPI;
