import type { JSX } from "react";

type Props = { w: number; h: number };

export default ({ w, h }: Props): JSX.Element => {
	return (
		<svg
			width={w}
			height={h}
			viewBox="0 0 113 114"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M70.2782 113.284H42.2971V22.9168H0V0H112.413V22.9168H70.2782V113.284Z"
				fill="white"
			/>
		</svg>
	);
};
