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
      <h1 className="text-center page-title">About</h1>
      <p className="text-center">all your base are belong to us</p>
      <p className="text-center">Here are some resources</p>
      <ul className="text-center no-bullet">
        <li><a href="https://facebook.github.io/react">React</a></li>
        <li><a href="http://openweathermap.org">Weather Map</a></li>
      </ul>
    </div>
  )
};

module.exports = About;