const resolvers = {
  Query: {
    // get all tracks, will be used to populate the homepage grid of our web client
    //  tracksForHome: (/* parent, args, context, info */) => {},
    tracksForHome: (_, __, {dataSources}) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    track: (parent, {id}, {dataSources}, info) => {
      return dataSources.trackAPI.getTrack(id);
    },
    module: (parent, {id}, {dataSources}, info) => {
      return dataSources.trackAPI.getModule(id);
    },
  },
  Track: {
    author: (parent, _, {dataSources}) => {
      return dataSources.trackAPI.getAuthor(parent.authorId);
    },
    modules: ({id}, _, {dataSources}) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
