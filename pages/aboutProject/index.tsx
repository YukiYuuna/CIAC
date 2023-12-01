import styles from "./aboutProject.module.scss"
import LargeTextContainer from "@/components/ui/largeTextContainer";
import {getTexts} from "@/contexts/LanguageContext";
import "../../app/globals.scss";

const AboutProject = () => {
    const {texts: {aboutProject: texts}} = getTexts();

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.aboutProject}>
                {texts.title}
            </div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    {texts.content}
                </div>
                <div className={styles.imgContainer}>
                    <img src={'./img/aboutProject.png'}/>
                </div>
            </div>
            <div className={styles.textContainer2}>
                {texts.content2}
            </div>
        </div>
    )
}

export default AboutProject;