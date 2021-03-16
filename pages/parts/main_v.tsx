import styles from "../../components/Parts/main_v.module.scss";
const Main_V = () => {
    return (
        <div className={styles.main_v_box}>
            <img src="/main_v.png" className={styles.main_v} />
            <div>
                <h1>コンコンレシピ</h1>
            </div>
        </div>
    );
};

export default Main_V