var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p className="text-center">My React Weather App</p>
      <p className="text-center">Here are some resources</p>
      <ul className="text-center">
        <li><a href="https://facebook.github.io/react">React</a></li>
        <li><a href="http://openweathermap.org">Weather Map</a></li>
      </ul>
    </div>
  )
};

module.exports = About;