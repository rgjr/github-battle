var React = require('react');

class Popular extends React.Component {
  // Initial state of component
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  // Update component
  updateLanguage(lang) {
    console.log(lang)
    this.setState(function () {
      return {
        selectedLanguage: lang
      }
    });
  }

  // UI for component
  render() {
    var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className='languages'>
        {languages.map(function (lang) {
            return(
              <li
                style={lang === this.state.selectedLanguage ? { color: '#d0021b'} : null }
                onClick={this.updateLanguage.bind(null, lang)}
                key={lang}>
                {lang}
              </li>
            )
          }, this)
        }
      </ul>
    )
  }
};

module.exports = Popular;
