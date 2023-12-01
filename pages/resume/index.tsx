import styles from "./resume.module.scss"
import LargeTextContainer from "@/components/ui/largeTextContainer";
import {getTexts} from "@/contexts/LanguageContext";
import "../../app/globals.scss";

const Resume = () => {
    const {texts: {resume: texts}} = getTexts();
    var parse = require('html-react-parser');

    return ( <div className={styles.sectionContainer}>
            <div className={styles.aboutProject}>
                {texts.title}
            </div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    {parse(texts.content)}
                </div>
                <div className={styles.imgContainer}>
                    <img src={'./img/resume.png'}/>
                </div>
            </div>
            <div className={styles.textContainer2}>
                {texts.content2}
            </div>
        </div>
    )
}

export default Resume