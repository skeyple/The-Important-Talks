import type { JSX } from "react";

type Props = { w: number; h: number };

export default ({ w, h }: Props): JSX.Element => {
	return (
		<svg
			width={w}
			height={h}
			viewBox="0 0 44 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1.25 1.25L42.25 1.25"
				stroke="white"
				stroke-width="2.5"
				stroke-linecap="round"
			/>
			<path
				d="M1.25 24.25H42.25"
				stroke="white"
				stroke-width="2.5"
				stroke-linecap="round"
			/>
		</svg>
	);
};
