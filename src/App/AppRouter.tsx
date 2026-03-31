import React, { useEffect, useRef, useState } from "react";
import cn from "clsx";
import About from "../Pages/About/About.component";
import Home from "../Pages/Home/Home.component";
import TheIdea from "../Pages/TheIdea/TheIdea.component";
import styles from "./App.module.scss";

const AppRouter: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const headerRef = useRef<HTMLDivElement | null>(null);
	const fabRef = useRef<HTMLDivElement | null>(null);
	const mainRef = useRef<HTMLDivElement | null>(null);
	const rafRef = useRef<number | null>(null);

	useEffect(() => {
		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, []);

	const handleScroll = () => {
		if (!mainRef.current) return;
		const scrollTop = mainRef.current.scrollTop;
		setIsScrolled(scrollTop > 0);
	};

	const onScroll = () => {
		if (rafRef.current != null) return;
		rafRef.current = requestAnimationFrame(() => {
			handleScroll();
			rafRef.current = null;
		});
	};

	const scrollToTop = () => {
		if (!mainRef.current) return;
		mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
	};

	const scrollToPage = (page: number) => {
		var offset = 0;
		if (!mainRef.current) return;
		switch (page) {
			case 1:
				offset = 40 + 180 + 62 + 49 + window.innerHeight * 0.25;
				break;
			case 2:
				offset = window.innerHeight * 2 + 90;
				break;
			case 3:
				offset = window.innerHeight * 3 + 90;
				break;
			default:
				break;
		}
		mainRef.current.scrollTo({
			top: offset,
			behavior: "smooth",
		});
	};

	return (
		<div className={styles.container}>
			<div
				ref={headerRef}
				className={cn(styles.header, { [styles.shadow]: isScrolled })}
			>
				<div
					className={styles.item}
					onClick={() => scrollToPage(1)}
					aria-label="podcasts"
				>
					podcasts
				</div>
				<div
					className={styles.item}
					onClick={() => scrollToPage(2)}
					aria-label="the idea"
				>
					the idea
				</div>
				<div
					className={styles.item}
					onClick={() => scrollToPage(3)}
					aria-label="about us"
				>
					about us
				</div>
				<div
					className={styles.item}
					onClick={() => scrollToPage(0)}
					aria-label="support"
				>
					support
				</div>
				<div
					className={styles.item}
					onClick={() => scrollToPage(0)}
					aria-label="links"
				>
					links
				</div>
			</div>

			<div ref={mainRef} className={styles.main} onScroll={onScroll}>
				<Home />
				<TheIdea />
				<About />

				<div
					ref={fabRef}
					className={cn(styles.fab, { [styles.active]: isScrolled })}
					onClick={scrollToTop}
					aria-label="scroll to top"
				>
					<span className={styles.up_icon} />
				</div>
			</div>
		</div>
	);
};

export default AppRouter;
