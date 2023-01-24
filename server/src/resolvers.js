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
  Mutation: {
    // increments a track's numberOfViews property
    incrementTrackViews: async (parent, {id}, {dataSources}) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          track: null,
        };
      }
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
