import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { Layout } from '../components'
import TrackDetail from '../components/track-detail';

const GET_TRACK = gql`
    query getTrack($trackId: ID!){
        track(id: $trackId) {
            id
            modulesCount
            modules {
                id
                title
                length
            }
            title
            author {
                id
                name
                photo
            }
            thumbnail
            length
            description
            numberOfViews
        }
    }
`;

/**
 * Track Page fetches a track's data from the gql query GET_TRACK
 * and provides it to the TrackDetail component to display
 */
export const Track = ({trackId}) => {
    const {loading, error, data } = useQuery(GET_TRACK, {
        variables: {trackId}
    });
  return (
    <Layout>
        <TrackDetail track={data?.track} />
    </Layout>
  )
};
