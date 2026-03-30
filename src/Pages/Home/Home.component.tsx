import styles from "./Home.module.scss";
import Svg from "./svg/svg";

interface PropsItemPodcast {
	title: string;
	time: string;
	author: string;
	likes: string;
	key: string | number;
}

const ItemPodcast = ({ title, time, author, likes, key }: PropsItemPodcast) => {
	return (
		<div className={styles.item} key={key}>
			<div className={styles.info}>
				<div className={styles.title_info}>{title}</div>
				<div className={styles.desc_info}>podcast host - {author}</div>
			</div>
			<div className={styles.sep} />
			<div className={styles.act}>
				<div className={styles.like}>
					<div className={styles.cnt}>{likes}</div>
					<div className={styles.btn}>
						<Svg.LikeBtn w={30} h={30} />
					</div>
				</div>
				<div className={styles.time}>{time}</div>
			</div>
		</div>
	);
};

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.Home}>
				<div className={styles.header}>
					<Svg.IdeaCast w={1156} h={120} />
				</div>
				<div className={styles.sep} />
				<div className={styles.desc}>ideas worth learning</div>
				<div className={styles.list_container}>
					<div className={styles.title}>our recordings</div>
					<div className={styles.row}>
						<div className={styles.fltr}>
							<div className={styles.title}>filters</div>
							<div className={styles.img}>
								<Svg.FltrMenu w={36} h={36} />
							</div>
						</div>
						<div className={styles.search}>
							<input
								className={styles.input}
								placeholder="find your podcast here"
							/>
							<div className={styles.btn}>
								<Svg.Search w={30} h={30} />
							</div>
						</div>
					</div>
					<div className={styles.list}>
						<div className={styles.title}>all podcasts</div>
						{[...new Array(3)].map((_, i) => (
							<ItemPodcast
								time="35 min"
								title="Studying abroad: ISPU students"
								author="Anton"
								likes="1.2K"
								key={i}
							/>
						))}
						<div className={styles.see_more}>see more</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
