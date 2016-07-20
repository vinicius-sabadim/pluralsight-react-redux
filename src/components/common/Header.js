import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
// import LoadingDots from './LoadingDots'

const Header = () => {
	return (
		<nav>
			<IndexLink to="/" activeClassName="active">Home</IndexLink>
			{" | "}
			<Link to="/about" activeClassName="active">About</Link>
		</nav>
	)
}

export default Header
