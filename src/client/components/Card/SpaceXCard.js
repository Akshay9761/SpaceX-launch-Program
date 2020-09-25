import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function SpaceXCard({spacex}) {
  return (
    <div className="spaceXCard_card">
      <div className="spaceXCard_card-image">
      {
        spacex.links && spacex.links.mission_patch_small ?
          <LazyLoadImage src={spacex.links.mission_patch_small} />
        : <LazyLoadImage src="https://cdn.browshot.com/static/images/not-found.png" />
      }
      </div>
      <div className="spaceXCard_card-content">
        <p className="spaceXCard_card-content_name">{spacex.mission_name} #{spacex.flight_number}</p>
        <div className="spaceXCard_card-content_mission">Mission Ids: <br />
        {/* <span className="spaceXCard_card-content_value"> */}
          {
            spacex.mission_id && spacex.mission_id.length ?
            <ul className="spaceXCard_card-content_value list-style">
              {
                spacex.mission_id.map(missionId => {
                  return <li key={missionId}>{missionId}</li>
                })
              }
            </ul>
            : null
          }
        {/* </span> */}
        </div>
        <p className="spaceXCard_card-content_heading">Launch Year: <span className="spaceXCard_card-content_value">{spacex.launch_year}</span></p>
        <p className="spaceXCard_card-content_landing">Successful<br />Launch: <span className="spaceXCard_card-content_value">{(spacex.launch_success === true || spacex.launch_success === false) && spacex.launch_success.toString()}</span></p>
        <p className="spaceXCard_card-content_launch">Successful<br />Landing: <span className="spaceXCard_card-content_value">{spacex.launch_landing || 'Not found'}</span></p>
      </div>
    </div>
  );
}

export default SpaceXCard;