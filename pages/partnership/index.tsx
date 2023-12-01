import {getTexts} from "@/contexts/LanguageContext";
import styles from './partnership.module.scss'
import "../../app/globals.scss";
import React from "react";


const Partnership = () => {
    const {texts: {partnership: texts}} = getTexts();

    const handleOpenNewWindow = (link: string) => {
        // Open a new window and set its location to the specified URL
        const newWindow = window.open(link, '_blank');

        // Optional: Focus the new window
        if (newWindow) {
            newWindow.focus();
        }
    };

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.partnership}>
                {texts.title}
            </div>
            <div className={""}>
                <div className={styles.partnerTitle}>
                    {texts.partnerOne}
                </div>
                <div className={styles.partnerText}>
                    {texts.contentOne}
                </div>
            </div>
            <div className={""}>
                <div className={styles.partnerTitle}>
                    {texts.partnerTwo}
                </div>
                <div className={styles.partnerText}>
                    {texts.contentTwo}
                </div>
            </div>
            <div className={""}>
                <div className={styles.partnerTitle}>
                    {texts.partnerThree}
                </div>
                <div className={styles.partnerText}>
                    {texts.contentThree}
                </div>
            </div>
            <div className={styles.partnerBoxContainer}>
                <div className={styles.handbookContainer}>
                    <img src={'./img/organizationOmega.png'} width={400}/>
                    <div className={styles.organizationMail}>
                        <p className={styles.p}>
                            Кърджали, България
                            ngo.omega@gmail.com
                        </p>
                    </div>
                    <div className={styles.downloadContainer} onClick={() => handleOpenNewWindow("www.omega-ngo.bg")}>
                        <p className={styles.downloadText}>Към сайта</p>
                    </div>
                </div>
                <div className={styles.handbookContainer}>
                    <img src={'./img/fondaciqKorenyak.png'} width={400}/>
                    <div className={styles.organizationMail}>
                        <p className={styles.p}>
                            София, България
                            foundation.korenyak@gmail.com
                        </p>
                    </div>
                    <div className={styles.downloadContainer} onClick={() => handleOpenNewWindow("www.korenyakproject.org")}>
                        <p className={styles.downloadText}>Към сайта</p>
                    </div>
                </div>
                <div className={styles.handbookContainer}>
                    <img src={'./img/drpd.png'} width={400}/>
                    <div className={styles.organizationMail}>
                        <p className={styles.p}>
                            Ново Место, Словения
                            info@drpdnm.org
                        </p>
                    </div>
                    <div className={styles.downloadContainer} onClick={() => handleOpenNewWindow("nevladnik.info")}>
                        <p className={styles.downloadText}>Към сайта</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Partnership