import React from "react";
import PropTypes from 'prop-types';

const Home = props => <div>{props.text}</div>;

Home.propTypes = {
	text: PropTypes.string
}

Home.defaultProps = {
	text: 'Hello World'
}

export default Home;
