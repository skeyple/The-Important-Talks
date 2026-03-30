import styles from "./TheIdea.module.scss";

const TheIdea = () => {
	return (
		<div className={styles.container}>
			<div className={styles.TheIdea}>
				<div className={styles.title}>
					<div className={styles.the}>the</div>
					<div className={styles.idea} />
					<div className={styles.project}>of the project</div>
				</div>
				<div className={styles.info}>
					<div className={styles.left}>
						<div className={styles.img} />
						<div className={styles.desc1}>
							meow meow meow?
							<br />
							<br />
							//Hey, White kitty, don’t you think that it would be nice to make
							a platform where students could practice their English by talking
							on different topics?
						</div>
						<div className={styles.desc2}>
							meow meow!
							<br />
							<br />
							//Yeah, Black kitty, i guess it’s a good idea!
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.desc}>
							The IdeaCast was made by students for other students to use. We
							think, that learning English is actually fun and really
							interesting. And we want to show .... blah blah blah что-нибудь
							можно придумать для этого текста
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TheIdea;
