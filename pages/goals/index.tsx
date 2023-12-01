import styles from "./goals.module.scss"
import LargeTextContainer from "@/components/ui/largeTextContainer";
import {getTexts} from "@/contexts/LanguageContext";
import "../../app/globals.scss";


const Goals = () => {
    const {texts: {goals: texts}} = getTexts();
    var parse = require('html-react-parser');

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.aboutProject}>
                {texts.title}
            </div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    {parse(texts.content)}
                </div>
                <div className={styles.imgContainer}>
                    <img src={'./img/goals.png'}/>
                </div>
            </div>
        </div>
    )
}

export default Goals