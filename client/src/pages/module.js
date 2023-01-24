import React from 'react';
import {gql, useQuery} from '@apollo/client';

import {Layout, QueryResult, ModuleDetail} from '../components';

export const GET_MODULE_AND_PARENT_TRACK = gql`
  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      length
      content
      videoUrl
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`;

/**
 * Module page fetches both parent track and module's data from the gql query GET_MODULE_AND_PARENT_TRACK
 * and feeds them to the Module detail component
 */
const Module = ({trackId, moduleId}) => {
  const {loading, error, data} = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: {trackId, moduleId},
  });

  return (
    <Layout fullWidth>
      <QueryResult error={error} loading={loading} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
