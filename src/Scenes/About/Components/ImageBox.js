import React from "react";

export default function ImageBox(props) {
	return (
		<div
			style={{
				height: "200px",
				width: "100%",
				overflow: "hidden",
				marginBottom: "10px",
				display: "block",
				position: "relative"
			}}
		>
			<img
				src={props.imageBox}
				alt="blr"
				style={{
					width: "100%",
					position: "absolute",
					top: "50%",
					transform: "translateY(-50%)"
				}}
			/>
		</div>
	);
}
