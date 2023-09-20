import styles from './stickyNote.module.scss';
import Image from "next/image";

interface Props {
    noteImageSrc: any,
    circleImageSrc: any;
    noteWidth?: number;
    noteHeight?: number
    noteText: string;
}
const StickyNote = ({ noteImageSrc, circleImageSrc, noteWidth = 255, noteHeight = 255, noteText }: Props) => {
    return (
        <div className={styles.stickyNoteContainer}>
            <Image src={noteImageSrc} className={styles.stickyNoteBackground} height={noteHeight} width={noteWidth} alt={"stickyNote"}/>
            <Image src={circleImageSrc} className={styles.stickyNoteCircle} height={28} width={28} alt={"stickyNoteCircle"}/>
            <div className={styles.stickyNoteText}>
                {noteText}
            </div>
        </div>
    )

}

export default StickyNote