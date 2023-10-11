import Image from "next/image";
import styles from "./infoWithNotes.module.scss"
import React from "react";
import StickyNote from "@/components/ui/stickyNote";
import purpleElipse from "../../public/img/bulgaria/purpleElipse.png"
import blueElipse from "../../public/img/bulgaria/blueElipse.png"
import purpleStickyBg from "../../public/img/bulgaria/stickyBgPurple.png"
import blueSticky from "../../public/img/bulgaria/stickyBgBlue.png"
import yellowSticky from "../../public/img/bulgaria/StickyBgYellow.png"
import yellowElipse from "../../public/img/bulgaria/yellowElipse.png"
import greenSticky from "../../public/img/bulgaria/stickyBgGreen.png"
import greenElipse from "../../public/img/bulgaria/greenElipse.png"

interface Props {
    titleImage?: any
    hasTitleImage: boolean;
    titleText: string;
    mainText?: string;
    background: string
    notes?: string[]
}

const InfoWithNotes = ({ hasTitleImage, titleText, mainText, background, titleImage, notes }: Props) => {
    var parse = require('html-react-parser');
    return (
        <>
            <div className={`${styles.policyContainer} ${background}`}>
                <div className={styles.titleContainer}>
                    {hasTitleImage && <Image src={titleImage} alt={"commaImg"} className="mt-6"/>}
                    <span className={`${styles.titleText} ${!hasTitleImage ? "pl-20 pt-12 relative" : ""}`}>
                        {titleText}
                    </span>
                </div>
                { mainText != null &&
                <div className={styles.mainTextContainer}>
                    <div className={styles.mainText}>
                        {mainText}
                    </div>
                </div>
                }
                {
                notes != null &&
                <div className={styles.notesContainer}>
                    <StickyNote noteImageSrc={purpleStickyBg} circleImageSrc={purpleElipse} noteText={parse(notes![0])}/>
                    <StickyNote noteImageSrc={blueSticky} circleImageSrc={blueElipse} noteText={parse(notes![1])}/>
                    <StickyNote noteImageSrc={yellowSticky} circleImageSrc={yellowElipse} noteText={parse(notes![2])}/>
                    <StickyNote noteImageSrc={greenSticky} circleImageSrc={greenElipse} noteText={parse(notes![3])}/>
                </div> 
                }   
            </div>
        </>
    )
}

export default InfoWithNotes