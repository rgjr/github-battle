var React   = require('react');
var Popular = require('./Popular');

class App extends React.Component {
  render() {
    return (
      // Class is protected in JS
      // Use className to get around that
      <div className='container'>
        <Popular />
      </div>
    )
  }
};

module.exports = App;
