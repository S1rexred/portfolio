import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
	<div className="container">
		<nav class="navbar navbar-expand-lg fixed-top">
		<Link to='/' class="navbar-brand" href="#">Michael Shpilevsky</Link>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			<li class="nav-item">
			<a class="nav-link" href="#portfolio">portfolio</a>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="#">about</a>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="#contact">contact</a>
			</li>
			
			
			

		</ul>
		
		</div>
	
	</nav>
	</div>
  )
}

export default Navbar