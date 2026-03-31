import styles from "./About.module.scss";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.About} id={"about-us"}>
				<div className={styles.icon} />
				<div className={styles.info}>
					<div className={styles.wrap}>
						<div className={styles.ic} />
						<div className={styles.text}>we can place some text from here</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
