import React from 'react';
import { NavLink } from 'react-router-dom';

type HeaderProps = {
  username?: string
}

const Header = ({ username }: HeaderProps) => (
	<header>
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/error">Error</NavLink>
		</nav>
    <aside>
      { username }
    </aside>
	</header>
);

export default Header;
