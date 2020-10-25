import { gql } from '@apollo/client';

export const GET_SPOTS = gql`
  query {
    spots {
      id
      bill
      images
      name
      geo {
        address
      }
      rating {
        overall
      }
    }
  }
`;
export const GET_CURRENT_SPOT = (id) => {
  return gql`
    query {
      spot (id: ${id}){
        name
        images
        rating{
          overall
        }
        timetable
        geo{
          address
        }
        workingHours
      }
    }
  `;
};
