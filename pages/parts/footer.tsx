import Link from "next/link";
import styles from "../../components/Footer/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <a>TOPページへ</a>
      </Link>
    </footer>
  );
};

export default Footer