'use strict';

console.log('Babel was here');

var React = require('react');
var when = require('when');
var client = require('./client');
//var follow = require('./follow');
//
//var stompClient = require('./websocket-listener');

var root = '/api';

class App extends React.Component {

    render() {
        return <div>Hello, React!</div>
    }

}

React.render(<App />, document.getElementById('react'));