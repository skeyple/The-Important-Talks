import type { JSX } from "react";

type Props = { w: number; h: number };

export default ({ w, h }: Props): JSX.Element => {
	return (
		<svg
			width={w}
			height={h}
			viewBox="0 0 48 49"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16.6912 25.5147C15.8088 23.75 14.4853 20.7875 14.4853 17.1324C14.4853 8.36077 21.5961 1.25 30.3676 1.25C39.1392 1.25 46.25 8.36077 46.25 17.1324C46.25 25.9039 39.1392 33.0147 30.3676 33.0147C27.832 33.0147 25.4352 32.4205 23.3088 31.3638"
				stroke="white"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			<path
				d="M16.6912 25.9559L1.25 41.397L7.42647 47.5735L16.25 38.75"
				stroke="white"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
