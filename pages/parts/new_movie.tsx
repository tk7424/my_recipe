import styles from "../../components/Parts/new_movie.module.scss";

const NewMovie = () => {
    return (
        <div className={styles.new_movie}>
            <iframe title="新着動画" src="https://www.youtube.com/embed/?list=UUD9rstz787RQXIuk_rPtbJg&autoplay=1&mute=1&playsinline=1"></iframe>
            <h2>〜 N e w   M o v i e 〜</h2>
        </div>
    )
}

export default NewMovie;