import React from "react";
import styles from './downLeftImageTexts.module.scss'
import Image from "next/image";

interface Props {
    background: any,
    leftImage: any
    texts?: string[]
}

const DownLeftImageTexts = ({background, leftImage, texts}: Props) => {

    return (
        <>
            <div className={`${styles.container} ${background}`}>
                <div className={styles.imageContainer}>
                    <Image src={leftImage} alt={"commaImg"} className="mt-6"/>
                </div>
                { texts != null &&
                <div className={styles.textsContainer}>
                    <div className={styles.text}> {texts[0]} </div>
                    <div className={styles.text}> {texts[1]} </div>
                    <div className={styles.text}> {texts[2]} </div>
                </div>
                }
            </div>

        </>
    )
}

export default DownLeftImageTexts