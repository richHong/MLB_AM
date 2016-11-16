import React, { Component } from 'react';

const NoGames = ({showSpinner}) => (
  <div className='no-games'>{showSpinner ? 'Loading...' : 'No Games Available'}</div>
)
export default NoGames;