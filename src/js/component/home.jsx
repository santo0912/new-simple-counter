import React from "react";

// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

// //create your first component
const Home = (props) => {
	return (
		<div>
			<div>icono</div>
			<div>{props.hora2}</div>
			<div>{props.hora1}</div>
			<div>{props.min2}</div>
			<div>{props.min1}</div>
			<div>{props.seg2}</div>
			<div>{props.seg1}</div>
		</div>
	);
};



export default Home;
