import StickyNote from "@/components/ui/stickyNote";
import styles from "./singleNoteStickyPage.module.scss"

interface Props {
    noteImageSrc: any,
    circleImageSrc: any;
    noteWidth?: number;
    noteHeight?: number
    noteText: string;
}
const SingleStickyNotePage = ({ noteImageSrc, circleImageSrc, noteWidth, noteHeight, noteText }: Props) => {

    return (
        <div className={styles.singleStickyContainer}>
            <div className={styles.stickyWrapper}>
                <StickyNote noteImageSrc={noteImageSrc} circleImageSrc={circleImageSrc} noteText={noteText} noteWidth={noteWidth} noteHeight={noteHeight}/>
            </div>
        </div>
    )
}

export default SingleStickyNotePage