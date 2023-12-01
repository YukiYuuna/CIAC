import {getTexts} from "@/contexts/LanguageContext";
import styles from './groups.module.scss'
import "../../app/globals.scss";


const Groups = () => {

    const {texts: {targetGroup: texts}} = getTexts();

    return (
        <div className={styles.sectionContainer}>
            <div className={styles.groups}>
                {texts.title}
            </div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    {texts.content}
                </div>
            </div>
            <div className={styles.imgContainer}>
                <img src={'./img/targetGroups.png'}/>
            </div>
        </div>
    )
}

export default Groups