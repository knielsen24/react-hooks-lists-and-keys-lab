import React from "react";

function ProjectItem({ name, about, technologies }) {
	
	console.log(technologies)
	
	const techArray = technologies.map(tech => {
		return <span key={tech} >{tech}</span>
	})
	
	return (
   	<div className="project-item">
      	<h3>{name}</h3>
      	<p>{about}</p>
      	<div className="technologies">
        		{techArray}
      	</div>
    	</div>
  	);
}

export default ProjectItem;
