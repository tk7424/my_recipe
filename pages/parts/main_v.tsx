import styles from "../../components/Parts/main_v.module.scss";

const Main_V = () => {
    return (
        <div className={styles.main_v_box}>
            <img
                src="/main_v_pc.jpeg"
                className={styles.main_v}
                alt="コンコンレシピ・メインビジュアル"
            />
            <div>
                <h1>コンコンキッチン</h1>
            </div>
        </div>
    );
};

export default Main_V