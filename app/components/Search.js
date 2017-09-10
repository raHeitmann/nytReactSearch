// Include React
var React = require("react");
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// Here we include all of the sub-components
var Results = require("./Results");
var Link = require("react-router").Link;
var axios = require('axios');
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      startYear: '',
      endYear: '',
      result: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log("this submit was handled");
    console.log('A name was submitted: ' , this.state);
    event.preventDefault();
    this.UserList();
  }

  UserList() {
    
    axios.get('/api/'+this.state.topic+'/'+this.state.startYear+'/'+this.state.endYear)
      .then((data) => {
        this.setState({ result: data.results });
        if (data) console.log("tried searching.... and found something!");
        console.log(data.data[0]);
        return data.results;
      });
    }

  render() {

    console.log("component loaded!");

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Search</h3>
        </div>
          <div className="panel-body text-center">
    
        <form onSubmit={this.handleSubmit}>
          <label>
            Topic:
            <input
              name="topic"
              type="string"
              value={this.state.topic}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Start Year:
            <input
              name="startYear"
              type="string"
              value={this.state.startYear}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            End Year:
            <input
              name="endYear"
              type="string"
              value={this.state.endYear}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
    

        </form>

        </div>
      </div>

    );
  }
}

// Export the component back for use in other files
module.exports = Search;
