import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { Layout } from '../components';

const GET_MODULE_TRACK = gql`
    query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
        module(id: $moduleId) {
            id
            title
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

function Module(props) {
    const {trackId, moduleId}= props;

    console.log(props);
    const {loading, error, data } = useQuery(GET_MODULE_TRACK, {
        variables: {moduleId, trackId}
    })

    console.log(data);
  return (
      <Layout fullWidth>
      </Layout>
  )
}

export default Module;