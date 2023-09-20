import styles from './fiveInfoStickyNotes.module.scss'
import StickyNote from "@/components/ui/stickyNote";
import yellowSticky from "../../public/bulgaria/StickyBgYellow.png";
import yellowElipse from "../../public/bulgaria/yellowElipse.png";
import blueSticky from "../../public/bulgaria/stickyBgBlue.png";
import blueElipse from "../../public/bulgaria/blueElipse.png";


const FiveInfoStickyNotes = () => {
    return (
        <div className={styles.fiveNotesContainer}>
            <div className={styles.rowsContainer}>
                <div className={styles.firstRow}>
                    <StickyNote noteImageSrc={blueSticky} noteWidth={255} noteHeight={255} circleImageSrc={blueElipse} noteText={"1. Европейски парламент: Европейският парламент е единственият орган на ЕС, който се избира директно от гражданите на държавите-членки. Той представлява интересите на гражданите и участва в създаването на ново законодателство на ЕС. Парламентът участва и в одобрението на бюджета на ЕС и осъществява надзор над другите институции."}/>
                    <StickyNote noteImageSrc={yellowSticky} noteWidth={255} noteHeight={255} circleImageSrc={yellowElipse} noteText={"2. Европейска комисия: Европейската комисия е изпълнителният орган на ЕС. Тя предлага ново законодателство и осъществява надзор над изпълнението на законите на ЕС. Комисията също така представлява ЕС на международната сцена и участва в преговори с други държави и организации."}/>
                    <StickyNote noteImageSrc={blueSticky} noteWidth={255} noteHeight={255} circleImageSrc={blueElipse} noteText={"3. Съвет на Европейския съюз: Съветът е органът, представляващ държавите-членки на ЕС. Той участва в процеса на приемане на закони и координира политиките на държавите-членки. Съветът също така играе важна роля в определянето на общите стратегии на ЕС по различни въпроси."}/>
                </div>
                <div className={styles.secondRow}>
                    <StickyNote noteImageSrc={yellowSticky} noteWidth={255} noteHeight={255} circleImageSrc={yellowElipse} noteText={"4. Европейският съд на правата на човека: Това е независим съдебен орган, който осигурява спазването на законите на ЕС и решава спорове между държавите-членки и институциите на ЕС. Съдът също така разглежда жалби от граждани и компании относно нарушения на техните права или законните правила на ЕС."}/>
                    <StickyNote noteImageSrc={yellowSticky} noteWidth={255} noteHeight={255} circleImageSrc={yellowElipse} noteText={"5. Европейската централна банка (ЕЦБ): ЕЦБ е отговорна за монетарната политика на еврозоната, която е групата от държави в ЕС, използващи общата валута - еврото. Тя контролира възможностите за издаване на пари, провежда валутни операции и следи инфлацията и икономическото развитие в региона."}/>
                </div>
            </div>
        </div>
    )
}

export default FiveInfoStickyNotes;