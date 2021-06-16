import { NavLink } from 'react-router-dom';


function Header() {
    return (
    	<div className="header">
	        <nav className="navbar navbar-expand-lg navbar-dark bg-color">
				<div className="container">
				    <NavLink exact className="nav-link active navbar-brand" to="/" aria-current="page">ShareNotes</NavLink>
				    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				      <span className="navbar-toggler-icon"></span>
				    </button>
				    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				      <div className="navbar-nav">
				    	<NavLink exact className="nav-link" to="/" aria-current="page">Home</NavLink>
	        			<NavLink className="nav-link" to="/note">Note</NavLink>
	        			<NavLink className="nav-link" to="/create">Create</NavLink>
	        			<NavLink className="nav-link" to="/about" tabIndex="-1" aria-disabled="true">About</NavLink>
				      </div>
				    </div>
				</div>
			</nav>
    	</div>
    );
}

export default Header;