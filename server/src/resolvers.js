const resolvers = {
  Query: {
    // get all tracks, will be used to populate the homepage grid of our web client
    //  tracksForHome: (/* parent, args, context, info */) => {},
    tracksForHome: (_, __, {dataSources}) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: (parent, _, {dataSources}) => {
      return dataSources.trackAPI.getAuthor(parent.authorId);
    },
  },
};

module.exports = resolvers;
