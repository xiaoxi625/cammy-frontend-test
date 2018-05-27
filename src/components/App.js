import React from "react";

class App extends React.Component {

	componentWillMount() {
		this.props.onCreate();
	}

 	render() {
    	return <div>
    		<div>We are here: {this.props.location} </div>
    		{this.props.children}
    	</div>
  	}

}

export default App;