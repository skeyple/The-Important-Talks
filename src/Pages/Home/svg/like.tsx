import type { JSX } from "react";

type Props = { w: number; h: number };

export default ({ w, h }: Props): JSX.Element => {
	return (
		<svg
			width={w}
			height={h}
			viewBox="0 0 42 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20.5001 27.8959C31.5001 24.3959 46.5001 13.3959 36.5001 3.89583C31.8579 -0.51428 23.5001 1.39599 20.5001 7.89596M20.7855 27.8959C9.78548 24.3959 -5.21452 13.3959 4.78548 3.89583C9.42765 -0.51428 17.7855 1.39599 20.7855 7.89596"
				stroke="white"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
