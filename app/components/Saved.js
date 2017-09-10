// Include React
var React = require("react");

// Here we include all of the sub-components
var Results = require("./Results");

// Create the Child Component
class Saved extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">
          {/*
            This component recieves a clicks variable as a prop from it's parent.
          */}
          <h1>{this.props.clicks}</h1>

          {/*
            This component will then render the GrandChild component. It will give GrandChild a prop
            called "number" which will be calculated by mutiplying this.props.clicks by 2
          */}
          <Results number={this.props.clicks * 4} />
        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
module.exports = Saved;
