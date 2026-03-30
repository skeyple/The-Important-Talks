import type { JSX } from "react";

type Props = { w: number; h: number };

export default ({ w, h }: Props): JSX.Element => {
	return (
		<svg
			width={w}
			height={h}
			viewBox="0 0 47 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M46.185 119.384H20.914V0H46.185V119.384Z"
				fill="white"
				fill-opacity="0.6"
			/>
			<path d="M25.271 119.384H0V0H25.271V119.384Z" fill="white" />
		</svg>
	);
};
