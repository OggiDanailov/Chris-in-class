function Navigation(props) {

	var links = ["Home", "About", "Contact", "Portfolio"];

	var navLinks = links.map(function(link) {

		var linkClass = "inactive";
		if (props.activeLink === link) {
			linkClass = "active";
		}

		return(
			<li onClick={handleChangeActive} className={linkClass}>{link}</li>
		)

		function handleChangeActive(event) {
			props.changeActiveLink(event.target.innerHTML);
		}

	})

	return(
		<nav>
			<div className="navigation">
				<ul>
					{navLinks}
				</ul>
			</div>
		</nav>
	)
}
