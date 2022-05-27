import { gql } from '@apollo/client';
import React from 'react'
import { Layout } from '../components'

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
`
;
export const Track = () => {
  return (
    <Layout>layout</Layout>
  )
};
