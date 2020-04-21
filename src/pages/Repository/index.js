import React from 'react';

export default function Repository({ match }) {
  return <div>Repository: {decodeURIComponent(match.params.repository)}</div>;
}
