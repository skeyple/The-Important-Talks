import type { JSX } from "react";

type Props = { w: number; h: number };

export default ({ w, h }: Props): JSX.Element => {
	return (
		<svg
			width={w}
			height={h}
			viewBox="0 0 99 114"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M98.4699 113.284H0V0H97.323V21.9417H28.1811V44.2084H91.7523V66.15H28.1811V91.3423H98.4699V113.284Z"
				fill="white"
			/>
		</svg>
	);
};
