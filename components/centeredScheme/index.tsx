import styles from "./centeredScheme.module.scss";
import Image from "next/image";
import greenTitleCircle from "@/public/img/bulgaria/greenTitleCircle.png";
import React from "react";

interface Props {
    title?: string;
    centerImageSrc: any;
    text: string;
}

const CenteredScheme = ({ title, centerImageSrc, text }: Props) => {

    return (
        <>
            <div className={`${styles.pageContainer} ${title == null ? "mt-6": ""}`}>
                {
                    title != null &&
                    <div className={styles.titleContainer}>
                        <Image src={greenTitleCircle} alt={"commaImg"} className="mt-6"/>
                        <span className={styles.titleText}>
                            {title}
                        </span>
                    </div>
                }
                <div className={styles.schemeContainer}>
                    <Image src={centerImageSrc} alt={"commaImg"} className="mt-6"/>
                </div>
                <div className={styles.bottomText}>
                    {text}
                </div>
            </div>
        </>
    )
}

export default CenteredScheme