import type { JSX } from "react";

type Props = { w: number; h: number };

export default ({ w, h }: Props): JSX.Element => {
	return (
		<svg
			width={w}
			height={h}
			viewBox="0 0 133 114"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M132.455 113.284H104.211L96.2572 89.2294H36.3602L28.4064 113.284H0L37.6588 0H94.9586L132.455 113.284ZM58.4361 22.9168L43.9894 66.4751H88.6281L74.1813 22.9168H58.4361Z"
				fill="white"
			/>
		</svg>
	);
};
