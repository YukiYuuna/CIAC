import styles from './materials.module.scss'
import "../../app/globals.scss";
import {getTexts} from "@/contexts/LanguageContext";
import parse from "html-react-parser";
const Materials = () => {
    const { texts: {materials: texts} } = getTexts();
    var parse = require('html-react-parser');


    return (
        <div className={styles.sectionContainer}>
            <div className={styles.moreMaterials}>
                {texts.topicTitle}
            </div>
            <div>
                <div className={styles.textContainer}>
                    {parse(texts.mainText)}
                </div>
            </div>

            <div className={styles.moreMaterials}>
                {texts.materials}
            </div>
            <div className={styles.columnContainers}>
                <div className={styles.firstCol}>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            1.
                        </p>
                        <div className={styles.text}>
                        <a href={"https://drive.google.com/uc?export=download&id=1ltqMMCkmcrCY5FGVUwkVSrdeMLKkEfb8"}> {texts.text1} </a>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            2.
                        </p>
                        <div className={styles.text}>
                        <a href={"https://drive.google.com/uc?export=download&id=177olS3Gf0n4ELSgXV4uSBYRo2Wv2XMTl"}> {texts.text2} </a>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            3.
                        </p>
                        <div className={styles.text}>
                        <a href={"https://drive.google.com/uc?export=download&id=1WM-_hAdlOSakBQsj-TEZqQtO5kO2kAUV"}> {texts.text3} </a>
                        </div>
                    </div>
                </div>

                <div className={styles.secondCol}>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            4.
                        </p>
                        <div className={styles.text}>
                        <a href={"https://drive.google.com/uc?export=download&id=1qdFTb7Z6RiDYYYpqi3efcRF89xiDp1A6"}> {texts.text4} </a>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            5.
                        </p>
                        <div className={styles.text}>
                        <a href={"https://drive.google.com/uc?export=download&id=143yreo15UFTKtffyuDTxT6rlWfbzeqI8"}> {texts.text5} </a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.textContainer}>
                    {parse(texts.mainText2)}
                </div>
            </div>

            <div className={styles.moreMaterials}>
                {texts.materials}
            </div>
            <div className={styles.columnContainers}>
                <div className={styles.firstCol}>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            1.
                        </p>
                        <div className={styles.text}>
                        <a href={"https://drive.google.com/uc?export=download&id=1cnCaiLF8P_RoCIaDCTewYJaa62OlKLsh"}> {texts.text6} </a>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            2.
                        </p>
                        <div className={styles.text}>
                        <a href={"https://drive.google.com/uc?export=download&id=1wz3TDRASPMjFrpkAhRHk29QfLSldcDXd"}> {texts.text7} </a>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            3.
                        </p>
                        <div className={styles.text}>
                        <a href={"https://drive.google.com/uc?export=download&id=1-lDkJAUJa_9i-CKzbBKARftV6QV6uG22"}> {texts.text8} </a>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.container}>
                            <p className={styles.number}>
                                4.
                            </p>
                            <div className={styles.text}>
                            <a href={"https://drive.google.com/uc?export=download&id=17fToe4eSM5JXrXMFQnB7rXdNbe1gt5yO"}> {texts.text9} </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.secondCol}>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            5.
                        </p>
                        <div className={styles.text}>
                        <a href={"https://drive.google.com/uc?export=download&id=1ivxsRKm4ehfjI9RQ7a01VRQljai68n7U"}> {texts.text10} </a>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            6.
                        </p>
                        <div className={styles.text}>
                        <a href={"https://drive.google.com/uc?export=download&id=1zdyWM6VqT5kpy9e7hoBywzOMmpuoHzSz"}> {texts.text11} </a>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            7.
                        </p>
                        <div className={styles.text}>
                        <a href={"https://drive.google.com/uc?export=download&id=1lqE7FLg68InUhBQ0Qp_CWJUNU9KIAYxt"}> {texts.text12} </a>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.number}>
                            8.
                        </p>
                        <div className={styles.text}>
                        <a href={"https://drive.google.com/uc?export=download&id=1yU1DlTDoIFqwrsoQTuLhtg80dnrfNwwy	"}> {texts.text13} </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Materials