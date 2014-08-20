/** @jsx React.DOM */
var React = require('react');

var App = require('./components/App');
var NavAction = require('./actions/navActionCreator');

// Mount the App component
React.renderComponent(
  <App />,
  document.body
);

// Navigate to the current path
NavAction.transitionTo(window.location.hash);

