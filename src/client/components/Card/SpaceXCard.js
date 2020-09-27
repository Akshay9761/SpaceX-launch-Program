import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function SpaceXCard({ spacex }) {
  return (
    <div className="spaceXCard_card">
      <div className="spaceXCard_card-image">
        {
          spacex.links && spacex.links.mission_patch_small ?
            <LazyLoadImage className="found-img" src={spacex.links.mission_patch_small} />
            : <LazyLoadImage className='not-found-img' src="https://cdn.browshot.com/static/images/not-found.png" />
        }
      </div>
      <div className="spaceXCard_card-content">
        <p className="spaceXCard_card-content_name">{spacex.mission_name} #{spacex.flight_number}</p>
        <div className="spaceXCard_card-content_mission">Mission Ids: <br />
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
        </div>
        <p className="spaceXCard_card-content_heading">Launch Year: <span className="spaceXCard_card-content_value">{spacex.launch_year}</span></p>
        <p className="spaceXCard_card-content_landing">Successful<br />Launch:
          <span className="spaceXCard_card-content_value">
            {JSON.stringify(spacex.launch_success)}
          </span>
        </p>
        <p className="spaceXCard_card-content_launch">Successful<br />Landing:
          <span className="spaceXCard_card-content_value">
            {spacex.rocket.first_stage && spacex.rocket.first_stage.cores && 
              spacex.rocket.first_stage.cores.length && spacex.rocket.first_stage.cores[0] &&
              JSON.stringify(spacex.rocket.first_stage.cores[0].land_success)
            }
          </span>
        </p>
      </div>
    </div>
  );
}

export default SpaceXCard;