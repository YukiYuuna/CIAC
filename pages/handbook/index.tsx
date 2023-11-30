import styles from './handbook.module.scss'
import LargeTextContainer from "@/components/ui/largeTextContainer";
import {getTexts} from "@/contexts/LanguageContext";
import "../../app/globals.scss";
import {useEffect, useState} from "react";

const Handbook = () => {
    const {texts: {handbook: texts}, locale} = getTexts();

    const [downloadLink, setDownloadLink] = useState<any>()

    useEffect(() => {
        switch (locale) {
            case 'bg': {
                setDownloadLink("https://drive.google.com/uc?export=download&id=1bCMBa0DcDnM3d71l8cpaQYUAtw6mIZuZ");
                return;
            }
            case 'eng': {
                setDownloadLink("https://drive.google.com/uc?export=download&id=13a69fPrmP-dbokqbSkdu9jvoxexhiyGn")
                return
            }
            case 'slo': {
                setDownloadLink("https://drive.google.com/uc?export=download&id=18baRNwB3fszWn_NSPvm3mHEDDN3pa0jW")
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
                    <img src={`./img/resources/handbook-${locale}.png`} width={400}/>
                    <div className={styles.downloadContainer} onClick={() => handleOpenNewWindow()}>
                        <p className={styles.downloadText}>{texts.download}</p>
                    </div>
                </div>
                <div className={styles.textContainer}>
                    {texts.description}
                </div>
            </div>
    )
}

export default Handbook