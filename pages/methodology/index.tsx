import styles from './methodology.module.scss'
import {getTexts} from "@/contexts/LanguageContext";
import "../../app/globals.scss";
import React, {useEffect, useState} from "react";

const Methodology = () => {
    const {texts: {handbook: texts}, locale} = getTexts();
    const [downloadLink, setDownloadLink] = useState<any>()

    useEffect(() => {
        switch (locale) {
            case 'bg': {
                setDownloadLink("https://drive.google.com/uc?export=download&id=1tx5UQCbwM70iqnaHG0FRysGW29ayh7LO\n");
                return;
            }
            case 'eng': {
                setDownloadLink("https://drive.google.com/uc?export=download&id=1f2BbI5H7G-MHjhSAg9Tof_HUrSDeakxe")
                return
            }
            case 'slo': {
                setDownloadLink("https://drive.google.com/uc?export=download&id=1bxRNF9Sw5cIG86XFaS0o0Jacz35m4lCB")
                return;
            }
        }
    }, [locale]);


    const handleOpenNewWindow = () => {
        // Open a new window and set its location to the specified URL
        const newWindow = window.open(downloadLink, '_blank');

        // Optional: Focus the new window
        if (newWindow) {
            newWindow.focus();
        }
    };

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.handbookContainer}>
            <img src={`./img/resources/methodology-${locale}.png`} width={400}/>
                <div className={styles.downloadContainer} onClick={() => handleOpenNewWindow()}>
                    <p className={styles.downloadText}>{texts.download}</p>
                </div>
            </div>
            <div className={styles.textContainer}>
                {texts.methodologyDescription}
            </div>
        </div>
    )
}

export default Methodology;