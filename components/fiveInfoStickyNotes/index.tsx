import styles from './fiveInfoStickyNotes.module.scss'
import StickyNote from "@/components/ui/stickyNote";
import yellowSticky from "../../public/img/bulgaria/StickyBgYellow.png";
import yellowElipse from "../../public/img/bulgaria/yellowElipse.png";
import blueSticky from "../../public/img/bulgaria/stickyBgBlue.png";
import blueElipse from "../../public/img/bulgaria/blueElipse.png";

interface Props {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
    className?: string
}

const FiveInfoStickyNotes = ({ className, text1, text2, text3, text4, text5 }: Props) => {
    return (
        <div className={`${styles.fiveNotesContainer} ${className}`}>
            <div className={styles.rowsContainer}>
                <div className={styles.firstRow}>
                    <StickyNote noteImageSrc={blueSticky} circleImageSrc={blueElipse} noteText={text1}/>
                    <StickyNote noteImageSrc={yellowSticky} circleImageSrc={yellowElipse} noteText={text2}/>
                    <StickyNote noteImageSrc={blueSticky} circleImageSrc={blueElipse} noteText={text3}/>
                </div>
                <div className={styles.secondRow}>
                    <StickyNote noteImageSrc={yellowSticky} circleImageSrc={yellowElipse} noteText={text4}/>
                    <StickyNote noteImageSrc={yellowSticky} circleImageSrc={yellowElipse} noteText={text5}/>
                </div>
            </div>
        </div>
    )
}

export default FiveInfoStickyNotes;