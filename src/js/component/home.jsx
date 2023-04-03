import React from "react";


// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

// //create your first component
const divStyles = {
	background: "black",
	display: "flex",
	padding: "10px",
	justifyContent: "center",

}


const letraStyles = {
fontSize: "70px",
color: "white",
marginLeft: "60px",

}

const Home = (props) => {
	return (
		<div style= {divStyles}>
			<div style={letraStyles}><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="75"
                    height="75"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 20 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg> </div>
			<div style={letraStyles}>{props.hora2}</div>
			<div style={letraStyles}>{props.hora1}</div>
			<div style={letraStyles}>{props.min2}</div>
			<div style={letraStyles}>{props.min1}</div>
			<div style={letraStyles}>{props.seg2}</div>
			<div style={letraStyles}>{props.seg1}</div>
		</div>
	);
};



export default Home;
