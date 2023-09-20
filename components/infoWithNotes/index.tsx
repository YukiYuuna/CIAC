import Image from "next/image";
import styles from "./infoWithNotes.module.scss"
import React from "react";
import StickyNote from "@/components/ui/stickyNote";
import purpleElipse from "../../public/bulgaria/purpleElipse.png"
import blueElipse from "../../public/bulgaria/blueElipse.png"
import purpleStickyBg from "../../public/bulgaria/stickyBgPurple.png"
import blueSticky from "../../public/bulgaria/stickyBgBlue.png"
import yellowSticky from "../../public/bulgaria/StickyBgYellow.png"
import yellowElipse from "../../public/bulgaria/yellowElipse.png"
import greenSticky from "../../public/bulgaria/stickyBgGreen.png"
import greenElipse from "../../public/bulgaria/greenElipse.png"

interface Props {
    titleImage?: any
    hasTitleImage: boolean;
    titleText: string;
    mainText: string;
    background: string
}

const InfoWithNotes = ({ hasTitleImage, titleText, mainText, background, titleImage }: Props) => {

    return (
        <>
            <div className={`${styles.policyContainer} ${background}`}>
                <div className={styles.titleContainer}>
                    {hasTitleImage && <Image src={titleImage} alt={"commaImg"} className="mt-6"/>}
                    <span className={`${styles.titleText} ${!hasTitleImage ? "pl-20 pt-12 relative" : ""}`}>
                        {titleText}
                    </span>
                </div>

                <div className={styles.mainTextContainer}>
                    <div className={`${styles.mainText} ${mainText.length > 20 ? "text-l" : ""}`}>
                        {mainText}
                    </div>
                </div>
                <div className={styles.notesContainer}>
                    <StickyNote noteImageSrc={purpleStickyBg} circleImageSrc={purpleElipse} noteText={"Избори: Гражданите имат право да избират своите представители в законодателните органи (Народно събрание), като изборите се провеждат на редовни интервали. Гласуването е важен начин за гражданско участие и израз на политическата воля на населението."}/>
                    <StickyNote noteImageSrc={blueSticky} circleImageSrc={blueElipse} noteText={"Петиции и граждански инициативи: Гражданите имат право да подават петиции до държавните институции и да предлагат граждански инициативи за изменение на законодателството. Това е начин да се изразят гледните точки и предложенията на гражданите."}/>
                    <StickyNote noteImageSrc={yellowSticky} circleImageSrc={yellowElipse} noteText={"Съвети и комисии: Държавните институции могат да създават съвети и комисии, в които гражданите могат да участват и да дават своето мнение и съвети по конкретни въпроси. Тези органи са средство за включване на гражданите в процесите на вземане на решения."}/>
                    <StickyNote noteImageSrc={greenSticky} circleImageSrc={greenElipse} noteText={"Неправителствени организации (НПО): Гражданите могат да се включат в дейността на НПО, които се занимават с различни въпроси и промени в обществото. Това включва работа по защита на правата на човека, защита на околната среда, подпомагане на уязвимите групи и други."}/>
                </div>
            </div>
        </>
    )
}

export default InfoWithNotes