import { BackLink } from 'components/BackLink';
import React from 'react';

const NotFound = () => {
  return (
    <>
      <BackLink to={'/'}>Back to Home</BackLink>
      <div>Page NotFound</div>
    </>
  );
};

export default NotFound;
