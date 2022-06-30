import React from 'react';

const Jauge = ({color, pourcentage, matiere}) => {
    let style= {width : pourcentage, backgroundColor:color}
// const color = props.color;
// const pourcentage = props.pourcentage;
	return(
		<div className="competence">
			<span>{matiere}</span>
			<div className="whiteBar">
				<nav className="coloredBar" style={style}></nav>
			</div>
		</div>
	)
}


export default Jauge
