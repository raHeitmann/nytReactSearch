// Include React
var React = require("react");

// Create the GrandChild Component
class Results extends React.Component {

  componentDidMount() {
    console.log('we got some results!');
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">GrandChild</h3>
        </div>
        <div className="panel-body text-center">

          {/*
            This component will display 4 times what it's parent (Child) displays
          */}
          <h1>{this.props.number}</h1>

        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
module.exports = Results;
