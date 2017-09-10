// Include React
var React = require("react");

// Here we include all of the sub-components
var Search = require("./Search");
var Saved = require("./Saved")
// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
class Main extends React.Component {

  // Here we set a generic state associated with the number of clicks
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      startYear: '',
      endYear: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }
  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state
  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  // Whenever the button is clicked we'll use setState to reset the clickCounter
  // This will reset the clicks -- and it will be passed  ALL children
  resetClick() {
    this.setState({ clicks: 0 });
  }

  // Here we render the function
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>New York Times Article Scrubber</h2>
            <p><em>Remember, parents pass children their "states". Children inherit them as "props".</em></p>

            <p>
              {/* Here we create a button click.
              Note how we have an onClick event associate with our handleClick function. */}
              <button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>
              {/* Here we create a button click for resetting the clickCounter */}
              <button className="btn btn-danger btn-lg" onClick={this.resetClick}>Reset</button>
            </p>

          </div>

          <div className="col-md-12">

          <Search clicks={this.state.clicks * 2} />
          <Saved />

          </div>

        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
module.exports = Main;
