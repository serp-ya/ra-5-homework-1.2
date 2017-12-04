'use strict';

function Stars(props) {
  const currentRatingCount = parseInt(props.count);
  const validRatingCountConditions = [
    !!currentRatingCount,
    currentRatingCount >= 1,
    currentRatingCount <= 5
  ];

  const starsList = [];

  for (let i = 0; i < currentRatingCount; i++) {
    starsList.push((
      <li key={i}><Star /></li>
    ));
  }

  return ((validRatingCountConditions.every(condition => condition === true)) ?
    <ul className="card-body-stars u-clearfix">{starsList}</ul> : null);
}
