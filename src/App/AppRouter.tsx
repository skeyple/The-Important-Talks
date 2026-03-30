import { useEffect, useRef, useState } from "react";
import About from "../Pages/About/About.component";
import Home from "../Pages/Home/Home.component";
import TheIdea from "../Pages/TheIdea/TheIdea.component";
import styles from "./App.module.scss";

const AppRouter = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const headerRef = useRef<HTMLDivElement>(null);
	const fabRef = useRef<HTMLDivElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);

	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		const scrollTop = e.currentTarget.scrollTop;

		setIsScrolled(scrollTop > 0);
	};
	useEffect(() => {
		if (!headerRef.current || !fabRef.current) return;
		if (isScrolled) {
			if (!headerRef.current.classList.contains(styles.shadow)) {
				headerRef.current.classList.add(styles.shadow);
			}
			fabRef.current.classList.add(styles.active);
		} else {
			headerRef.current.classList.remove(styles.shadow);
			fabRef.current.classList.remove(styles.active);
		}
	}, [isScrolled, headerRef, fabRef]);
	const scrollToTop = () => {
		if (!mainRef.current) return;
		mainRef.current.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	const scrollToPage = (page: number) => {
		if (!mainRef.current) return;
		mainRef.current.scrollTo({
			top: window.innerHeight * page,
			behavior: "smooth",
		});
	};
	return (
		<div className={styles.container}>
			<div className={styles.header} ref={headerRef}>
				<div className={styles.item} onClick={() => scrollToPage(0.8)}>
					podcasts
				</div>
				<div className={styles.item} onClick={() => scrollToPage(2)}>
					the idea
				</div>
				<div className={styles.item} onClick={() => scrollToPage(3)}>
					about us
				</div>
				<div className={styles.item} onClick={() => scrollToPage(0)}>
					support
				</div>
				<div className={styles.item} onClick={() => scrollToPage(0)}>
					links
				</div>
			</div>
			<div ref={mainRef} className={styles.main} onScroll={handleScroll}>
				<Home />
				<TheIdea />
				<div className={styles.sep}></div>
				<About />
				<div ref={fabRef} className={styles.fab} onClick={scrollToTop}>
					<div className={styles.up_icon} />
				</div>
			</div>
		</div>
	);
};

export default AppRouter;
