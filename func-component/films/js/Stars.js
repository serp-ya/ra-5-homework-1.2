'use strict';

function Stars(props) {
  const currentRatingCount = parseInt(props.count);
  const validRatingCountConditions = [
    !!currentRatingCount,
    currentRatingCount > 0,
    currentRatingCount <= 5
  ];

  if (!validRatingCountConditions.every(condition => condition === true)) {
    return null;
  }

  const starsList = [];

  for (let i = 0; i < currentRatingCount; i++) {
    starsList.push(
      <li key={i}><Star /></li>
    );
  }

  return (<ul className="card-body-stars u-clearfix">{starsList}</ul>);
}
