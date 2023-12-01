import {getTexts} from "@/contexts/LanguageContext";
import LargeTextContainer from "@/components/ui/largeTextContainer";
import "../../app/globals.scss";
import styles from './expectedResults.module.scss'

const ExpectedResults = () => {
    const {texts: {expectedResults: texts}} = getTexts();
    var parse = require('html-react-parser');

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
                    <img src={'./img/expectedResults.png'}/>
                </div>
            </div>
            <div className={styles.textContainer2}>
                {parse(texts.content2)}
            </div>
        </div>
    )
}

export default ExpectedResults