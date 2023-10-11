"use client";
import "../../app/globals.scss";
import Navbar from "@/components/navbar";
import StartingModule from "@/components/startingModule";
import styles from "./westernBalkans.module.scss";
import ContentReview from "@/components/contentReview";
import infoContent from "@/public/img/bulgaria/infoContent.png";
import MainTopic from "@/components/mainTopic";
import React, {useState} from "react";
import yellowComma from '../../public/img/yellowComma.png'
import yellowTitleCircle from "../../public/img/europe/yellowTitleCircle.png"
import {Table} from "@/components/table";
import tealTitleCircle from "../../public/img/westernBalkans/tealTitleCircle.png"
import wBSociety from "../../public/img/westernBalkans/westernBalkanSociety.png"
import {TextWithAction} from "@/components/textWithAction";
import grayTitleCircle from "../../public/img/bulgaria/grayTitleCircle.png";
import wbInstitutions from "../../public/img/westernBalkans/wbInstitutions.png"
import FiveInfoStickyNotes from "@/components/fiveInfoStickyNotes";
import infoPagesWB from "../../public/img/westernBalkans/infoPagesWB.png"
import Exam from "@/components/exam";
import civilianEducationWB from "../../public/img/westernBalkans/civilianEducationWB.png"
import contentReview3 from "../../public/img/westernBalkans/content3Wb.png"
import activeCitizen from "../../public/img/westernBalkans/activeCitizen.png"
import wbInstruments from "../../public/img/westernBalkans/wbInstruments.png"
import wbDocuments from "../../public/img/westernBalkans/wbInstruments.png"
import {getTexts} from "@/contexts/LanguageContext";

const WesternBalkans = () => {
    const [theme, setTheme] = useState("dark");
    const { texts } = getTexts();
    console.log("==> ",texts)
    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    return <div className={"h-full"}>
        <Navbar changeTheme={changeTheme} currentTheme={theme}/>

        <StartingModule moduleText={"Модул 1 Западни Балкани"} commaImage={'/img/yellowComma.png'}
                        moduleBackgroundColor={styles.yellowBg} className={styles.sectionContainer}/>
        <div className={`${styles.quotesContainer} ${styles.sectionContainer}`}>
            <div className={`${styles.quotesRow}`}>
                <div className={styles.quoteMerkel}>
                    <div className={styles.doubleQuoteMerkel}>
                        <img src={'/img/europe/quote_blue.svg'} className={styles.firstQuote}/>
                        <img src={'/img/europe/quote_blue.svg'} className={styles.secondQuote}/>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.person}>A. Меркел</p>
                        <p className={styles.quoteText}>
                            Европа е мозайка на културите, която прави нашия континент толкова уникален.
                        </p>
                    </div>
                </div>

                <div className={styles.quoteKenedy}>
                    <div className={styles.doubleQuoteKenedy}>
                        <img src={'/img/europe/quote_gray.svg'} className={styles.firstQuote}/>
                        <img src={'/img/europe/quote_gray.svg'} className={styles.secondQuote}/>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.person}>Д. Кенеди</p>
                        <p className={styles.quoteText}>
                            Европа е мястото, където историята се преплита със съвременността, а традициите се срещат с
                            иновациите.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.quotesRow}>
                <div className={styles.quoteDelore}>
                    <div className={styles.doubleQuoteDelore}>
                        <img src={'/img/europe/quote_yellow.svg'} className={styles.firstQuote}/>
                        <img src={'/img/europe/quote_yellow.svg'} className={styles.secondQuote}/>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.person}>Ж. Делор</p>
                        <p className={styles.quoteText}>
                            Европа е историята и цивилизацията, и културата и идеите, и мечтите. Тя е бъдещето и
                            надеждата на всички наши народи.
                        </p>
                    </div>
                </div>

                <div className={styles.quoteBerbatov}>
                    <div className={styles.doubleQuoteBerbatov}>
                        <img src={'/img/europe/quote_darkblue.svg'} className={styles.firstQuote}/>
                        <img src={'/img/europe/quote_darkblue.svg'} className={styles.secondQuote}/>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.person}>Д. Бербатов</p>
                        <p className={styles.quoteText}>
                            Европа е симфонията на различията, съчетани със сближаването на ценностите.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <ContentReview heading="Съдържание" contentImage={infoContent} background={styles.yellowText} className={styles.sectionContainer}/>
        <MainTopic
            titleImage={yellowTitleCircle}
            background={styles.yellowBackground}
            hasButton={true}
            hasTitleImage={true}
            className={styles.sectionContainer}
            titleText={"Политика"}
            mainText={"Политиката на България се основава на няколко ключови принципа и ценности които определят направлението и приоритетите на държавата. Ето някои от основите за политиката на България."}
        />
        <Table
            tableImg={'/img/westernBalkans/westernBalkansTable.png'}
            className={`${styles.sectionContainer} ${styles.yellowBg}`}
        />
        <MainTopic
            titleImage={tealTitleCircle}
            background={styles.tealBackground}
            hasButton={true}
            hasTitleImage={true}
            className={styles.sectionContainer}
            titleText={"Общество"}
            downRightImage={wBSociety}
            mainText={"Обществото в Западните Балкани е много разнообразно и богато на културни, етнически и религиозни различия. Този регион съчетава богата история със съвременни предизвикателства. Гражданското общество и неправителствените организации играят важна роля в насърчаването на демокрация, правата на човека и социалния напредък. Независимо от предизвикателствата, обществата в Западните Балкани проявяват ангажираност към постигане на стабилност и мирно съжителство."}
        />
        <TextWithAction
            className={`${styles.sectionContainer} ${styles.tealBackground}`}
            scribbleImg={'/img/westernBalkans/tealScribble.svg'}
            hasActionBtn={false}
            actionBtnTxt={"Към списък"}
        >
            <p>
                <b>1. Етническа разнообразност: </b> Регионът включва множество
                етнически групи, като сърби, хървати, албанци, босненци и други.
                Тази етническа разнообразност често е предизвикателство,
                но също така представлява и богатство на културното наследство.
            </p>
            <br/>
            <p>
                <b>2. Религиозни общности: </b> Западните Балкани имат
                разнообразни религиозни общности, включително православни
                християни, католици, мюсюлмани и други. Религията играе
                важна роля в живота на местните жители и в обществените отношения.
            </p>
            <br/>
            <p>
                <b> 3. Гражданско общество:</b> Гражданско общество:
                В региона съществува активно гражданско общество и неправителствени организации,
                които се занимават с въпроси като правата на човека,
                социалната справедливост и устойчивото развитие.
            </p>
            <br/>
            <p>
                <b> 4. Исторически конфликти:</b>Западните Балкани са били
                засегнати от сериозни конфликти и войни през последните десетилетия,
                което е оставило следи в обществата и възникване на междуетнически напрежения.
            </p>
            <br/>
            <p>
                <b> 5. Усилия за стабилност и интеграция:</b> ножество страни от
                Западните Балкани работят към постигането на стабилност и интеграция
                в Европейския съюз и други международни организации като начин за
                насърчаване на развитието и мира в региона.
            </p>
            <br/>
            <p>
                <b>6. Диверситет на гледните точки:</b>
                Младежите представляват разнообразна група с различни гледни точки и идеи.
                Тяхната ангажираност спомага за по-широк диалог и обмен на идеи,
                което обогатява обществото.
            </p>
        </TextWithAction>
        <MainTopic
            titleImage={grayTitleCircle}
            background={styles.whiteBackground}
            hasButton={true}
            hasTitleImage={true}
            className={styles.sectionContainer}
            titleText={"Институции"}
            downRightImage={wbInstitutions}
            mainText={"Институциите в Западните Балкани представляват съчетание от правителствени, регионални и местни органи, които управляват и регулират различни аспекти на обществения живот. Те включват правителствени министерства, парламенти, местни общини, съдебни системи и полиция. Тези институции имат за цел поддържане на законността, осигуряване на обществен ред и развитие на демокрацията и правата на човека.\n"}
        />
        <FiveInfoStickyNotes
            className={`${styles.whiteBackground} ${styles.sectionContainer}`}
            text1={"1. Правителствени министерства: Те се занимават с различни аспекти на управлението на държавата. Например, Министерството на здравеопазването може да управлява здравната система, а Министерството на транспорта може да регулира транспортната инфраструктура и услугите."}
            text2={"2. Парламенти: Националните парламенти (като Народното събрание на Република Сърбия) създават и приемат закони, представляват интересите на гражданите и надзирават над изпълнителната власт."}
            text3={""}
            text4={"asd"}
            text5={"asd"}
        />
        <MainTopic
            titleImage={yellowTitleCircle}
            background={styles.yellowBg}
            hasButton={true}
            hasTitleImage={true}
            className={styles.sectionContainer}
            titleText={"Информационни  страници"}
            downRightImage={infoPagesWB}
            mainText={"Има много информационни ресурси и новинарски сайтове, които могат да предоставят актуални новини, анализи и статии за региона. Ето някои от тях:"}
        />
        <div
            id={"media-advice"}
            className={`${styles.yellowBg} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                <p>
                    <b>Balkan Insight (BIRN) -<a href={"www.balkaninsight.com/"}>https://balkaninsight.com/ </a> </b>Новинарски
                    портал, който предоставя анализи и новини от Балканския регион.
                </p>
                <p>
                    <b>European Western Balkans - https://europeanwesternbalkans.com/ </b> Специализиран уебсайт,
                    фокусиран на събития и развития в Западните Балкани, свързани с Европейския съюз. </p>
                <p>
                    <b>Balkan Investigative Reporting Network (BIRN) - https://birn.eu.com/ </b> Организация за
                    новинарско разследване, която публикува аналитични материали и репортажи за региона. </p>
                <p>
                    <b>BBC News Europe - Balkans Section - https://www.bbc.com/news/world/europe/balkans </b> Балкански
                    раздел на BBC News, предоставящ новини и анализи. </p>
                <p>
                    <b>Al Jazeera Balkans - https://balkans.aljazeera.net/ </b> Международни новинарски ресурс, със
                    специален раздел за Балканите.</p>
                <p><b>Регионални новинарски агенции </b>- Много от страните в Западните Балкани имат собствени
                    национални новинарски агенции, които предоставят информация за събитията в региона. Например, Танјуг
                    (Сърбия), Макфакс (Северна Македония), БТА (България) и други. </p>
                <p> Тези ресурси предоставят различни гледни точки и източници на информация, които могат да ви помогнат
                    да следите новините и събитията в Западните Балкани.</p>
                <img src={'/img/sparkle-yellow.svg'} className={styles.MASparkle}/>
            </div>
        </div>
        <Exam
            id={"exam-europe-module-2"}
            titleImage={yellowTitleCircle} background={styles.sectionContainer}
            className={`${styles.yellowBackground} ${styles.sectionContainer}`}
            scribbleImg={'/img/scribble-yellow.svg'}
            scribbleImgClass={styles.IAScribble}
            btnClass={styles.IABtnClass}
            titleClass={styles.IATestTitle}
        />
        <StartingModule moduleBackgroundColor={styles.tealBackground} moduleText={"Модул 2 Западни Балкани"}
                        commaImage={'/img/tealComma.svg'}/>
        <div className={`${styles.contentsModule2Container} ${styles.sectionContainer}`}>
            <div className={styles.contentsModule2Title}>СЪДЪРЖАНИЕ</div>
            <img src={'/img/contents2.png'} className={styles.contentsModule2}/>
        </div>
        <MainTopic
            titleImage={grayTitleCircle}
            background={styles.whiteBackground}
            hasButton={true}
            hasTitleImage={true}
            className={styles.sectionContainer}
            titleText={"Уроци по гражданско образование"}
            downRightImage={civilianEducationWB}
            mainText={"Уроците по гражданско образование в Западните Балкани са част от образователната система и имат за цел да научат младите хора за техните права, отговорности и роля в обществото. Тези уроци помагат на учениците да разберат как функционира демокрацията, какво правителството прави и как могат да се включат активно в обществото, като граждани. Това е важна част от образованието, която подпомага стабилността и развитието на региона."}
        />

        <div
            id={"civilian-edu"}
            className={`${styles.whiteBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={`${styles.whiteBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}>
                <div className={styles.MAInner}>
                    <p>
                        <b> 1. Правата на човека:</b> Учениците могат да учат за важните международни документи, като
                        Всеобщата декларация за правата на човека, и как тези права се прилагат в техния собствен
                        контекст. </p>
                    <p>
                        <b>2. Демократични институции:</b> Уроците могат да обяснят как работят парламентите,
                        правителствата и съдебната система, както и какви са ролите им в управлението на държавата.
                    </p>
                    <p>
                        <b>3. Участие и активизъм:</b> Учениците могат да се учат как да се ангажират в обществото, като
                        участват в граждански инициативи, протести и други форми на активизъм.
                    </p>
                    <p>
                        <b>4. История на региона:</b> Гражданското образование може да включва уроци за историята на
                        Западните Балкани, включително конфликтите и процесите на мирно съжителство.
                    </p>
                    <b>5. Културно многообразие:</b> Уроците могат да насърчават разбирателство и уважение към
                    различните култури и етнически групи, които съставляват региона.
                    <img src={'/img/westernBalkans/tealSparkle.svg'} className={styles.maSparkleDownRight}/>
                </div>
            </div>
        </div>
        <MainTopic
            id={"youth-engagement"}
            titleImage={yellowTitleCircle}
            background={"blueBackground"}
            hasButton={false}
            hasTitleImage={true}
            titleText={"Младежка ангажираност в действие"}
            mainText={"Младежката ангажираност в действие представлява активното включване на младите хора в обществения живот и предприемането на конкретни действия за промяна. Тя насърчава младите хора да се ангажират с проблемите и предизвикателствата в своите общности и да работят за тяхното решаване. Това може да включва доброволчество, социални проекти, политическо ангажиране и други инициативи. "}
            className={`${styles.sectionContainer} ${styles.youthEngagement} ${styles.yellowBackground}`}
            btnClass={styles.btnYouthEngagement}
            btnText={"Примери"}
            downRightImage={'/img/westernBalkans/youthactivityWb.png'}
        />
        <TextWithAction
            className={`${styles.sectionContainer} ${styles.yellowBackground}`}
            scribbleImg={'/img/scribble-yellow.svg'}
            hasActionBtn={false}
        >
            <p>
                Младежки организации и движения: Младежките организации играят важна роля в мобилизирането на младежта и
                подкрепянето на техните инициативи. Те могат да бъдат форуми за обмен на идеи, обучение и развитие на
                лидерски умения.

                Участие в политиката: Младежите могат да се ангажират в политически партии, да стават членове на
                парламенти и местни съвети, и да се борят за техните интереси и идеи.

                Образование и култура: Младежите се ангажират в образователни и културни проекти, които насърчават
                обмена на знания и опит между младите хора от различни страни.

                Социална и икономическа активност: Младежите започват собствени бизнеси, работят в стартъпи и
                предприемачеството, и така спомагат за икономическото развитие на региона.

                Гражданско общество и активизъм: Младежите се ангажират в различни граждански инициативи и кампании,
                които се борят за социални и политически промени.

                Медии и комуникации: Младежите се занимават с журналистика, медийни проекти и социални медии, за да
                изразят своите гледни точки и да информират обществото.
            </p>
        </TextWithAction>
        <MainTopic
            id={"youth-engagement"}
            titleImage={tealTitleCircle}
            background={styles.tealBackground}
            hasButton={false}
            hasTitleImage={true}
            titleText={"Ползи от младежката ангажираност"}
            mainText={"Младежката ангажираност в Западния Балкан играе ключова роля в развитието на региона и бъдещето на младите хора. Тя спомага за подобряване на социалната интеграция и активно участие на младежта в обществото, като предоставя следните ползи: "}
            className={`${styles.sectionContainer} ${styles.youthEngagement} ${styles.yellowBackground}`}
            btnClass={styles.btnYouthEngagement}
            downRightImage={'/img/westernBalkans/youthactivityWb.png'}
        />
        <div id={"YE-examples"} className={`${styles.citizenAwarenessExamplesContainer} ${styles.sectionContainer}`}>
            <div className={styles.CANotes}>
                <div className={styles.CAFirstRow}>
                    <div className={styles.stickyNoteContainerGreen}>
                        <div className={styles.CAStickyNotePinGreen}/>
                        <div className={styles.YEStickyNoteText}>
                            Младежки организации: В Европа съществуват много
                            младежки организации, които предоставят различни
                            проекти, обучения, лагери и дейности за младежи.
                            Те могат да се фокусират върху различни теми като
                            култура, спорт, околна среда, образование и други.

                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerYellow}>
                        <div className={styles.CAStickyNotePinYellow}/>
                        <div className={styles.YEStickyNoteText}>
                            Европейски програми и инициативи: Програми като
                            "Еразъм+", "Корпус на младежта" и "Европейски корпус
                            за солидарност" предоставят възможности за обмен,
                            стажове и участие в международни проекти. Тези
                            програми насърчават културния обмен, междукултурното
                            разбирателство и развиват лични и професионални
                            умения на младите хора.
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerGreen}>
                        <div className={styles.CAStickyNotePinGreen}/>
                        <div className={styles.YEStickyNoteText}>
                            Обществено-полезни инициативи: Младежите могат да
                            се ангажират в различни обществено-полезни инициативи като
                            кампании за екологична осведоменост, социални каузи и
                            доброволчество. Това им позволява да допринесат за
                            подобряване на обществото и да работят за
                            промяна на проблематични области.
                        </div>
                    </div>
                </div>
                <div className={styles.CASecondRow}>
                    <div className={styles.stickyNoteContainerYellow}>
                        <div className={styles.CAStickyNotePinYellow}/>
                        <div className={styles.YEStickyNoteText}>
                            Младежки съвети и комисии: Много градове и региони имат
                            младежки съвети и комисии, които представляват мнението и
                            интересите на младежите пред обществените власти. Това предоставя
                            възможност на младите хора да участват активно в процесите
                            на вземане на решения и да се включат в обществените политики.
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerYellow}>
                        <div className={styles.CAStickyNotePinYellow}/>
                        <div className={styles.YEStickyNoteText}>
                            Дигитални платформи и социални мрежи: Интернет и
                            социалните мрежи предоставят възможности за младежите да споделят
                            своите идеи, да се свързват с други ангажирани младежи
                            и да участват в онлайн инициативи и кампании.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MainTopic
            id={"youth-engagement-opportunities"}
            titleImage={grayTitleCircle}
            background={styles.whiteBackground}
            hasButton={true}
            hasTitleImage={true}
            titleText={"Възможности за младежката ангажираност"}
            mainText={"Младежката ангажираност в Западните Балкани се подкрепя и насърчава от различни институции и програми. Ето някои от възможностите за младежката ангажираност в региона:"}
            className={`${styles.sectionContainer} ${styles.youthEngagement} ${styles.yellowBackground}`}
            btnClass={styles.btnYouthEngagement}
            downRightImage={'/img/westernBalkans/youthactivityWb.png'}
        />
        <div
            id={"list-of-opportunities"}
            className={`${styles.whiteBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                <p>
                    <b>1. Младежки организации и движения::</b> Съществуват множество младежки организации и движения в
                    Западните Балкани, които предлагат възможности за участие и активизъм. Това включва студентски
                    сдружения, обществени инициативи и младежки форуми.
                </p>
                <p>
                    <b>2. Образователни програми:</b> Младежите могат да се включат в образователни програми и проекти,
                    които подпомагат тяхното обучение и развитие. Такива програми предоставят възможности за обучение на
                    умения, лидерство и предприемачество.
                </p>
                <p>
                    <b>3. Гражданско общество и активизъм::</b> Младежите могат да се ангажират в граждански организации
                    и да участват в активистки кампании и проекти, които се борят за социални и политически промени.
                </p>
                <img src={'/img/sparkle.svg'} className={styles.MASparkle}/>
            </div>
        </div>
        <div
            id={"opportunities-2"}
            className={`${styles.whiteBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                <p>
                    <b>4. Изкуство и култура: :</b> Изкуство и култура: Западните Балкани са богати на културно
                    наследство. Младежите могат да се ангажират в изкуство и културни проекти, които насърчават
                    културния обмен и творческия израз.
                </p>
                <p>
                    <b>5. Участие в политиката::</b> Младежите могат да се включат в политически процеси, да стават
                    членове на младежки съвети и комисии, и да изразяват своите гледни точки и интереси в рамките на
                    политическата система.
                </p>
                <p>
                    <b>6.Mеждународни обменни програми:</b> Различни програми като "Еразъм+" предоставят възможности за
                    младежки обмен и стажове в различни страни, което помага за разширяване на хоризонтите и придобиване
                    на международен опит.
                </p>
                <p>
                    <b>7.Медийни и комуникационни проекти:</b> Младежите могат да се ангажират с медийни проекти, писане
                    на блогове, създаване на видео съдържание и други комуникационни инициативи.
                </p>
                <p>
                    <b>8. Спорт и фитнес:</b> Участието в спортни състезания и фитнес активности насърчава здравословен
                    начин на живот и общуване с различни младежи.
                </p>
                <img src={'/img/sparkle.svg'} className={styles.MASparkle}/>
            </div>
        </div>
        <MainTopic
            id={"youth-engagement-opportunities"}
            titleImage={yellowTitleCircle}
            background={styles.yellowBackground}
            hasButton={false}
            hasTitleImage={true}
            titleText={"Медийна грамотност и разпознаване на фалшиви новини"}
            mainText={"Медийната грамотност и умението да разпознаваме фалшиви новини са от съществено значение за Западния Балкан и неговите граждани. В светлината на информационния шум и манипулации, свързани с медийните платформи, умението да се оценява информацията става по-важно от всякога. Медийната грамотност насърчава общностите да разпознават надеждни източници на информация, да анализират новинарските статии критично и да разбират разликата между факти и мнения. Това не само подобрява информираността, но и предпазва общностите от разпространението на вредни дезинформации."}
            className={`${styles.sectionContainer} ${styles.youthEngagement} ${styles.yellowBackground}`}
            btnClass={styles.btnYouthEngagement}
            downRightImage={'/img/westernBalkans/falseNewsWb.png'}
        />
        <div
            id={"media-false-news"}
            className={`${styles.yellowBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                <p>
                    <b>1. Проверка на източници:</b> Когато сте изложени на новина, внимателно анализирайте източника.
                    Предпочитайте авторитетни и утвърдени новинарски издания пред съмнителни или непознати уебсайтове.
                    Проверете дали има други надеждни източници, които потвърждават съобщението. </p>
                <p>
                    <b>2. Критично мислене:</b> Винаги се опитвайте да анализирате информацията критично. Задавайте си
                    въпроси като "Кой е изгоден от тази информация?" или "Има ли потвърждаващи факти?". Това ви помага
                    да не приемате всичко за истина. </p>
                <p>
                    <b>3. Факт-чекинг:</b> Използвайте факт-чекърски уебсайтове или търсете независими източници, за да
                    потвърдите информацията, преди да я споделите или повярвате. Мнозина от тези сайтове предоставят
                    независими проверки на фактите в новинарските статии. </p>
                <p>
                    <b>4. Различаване между мнение и факт:</b> Новинарските статии трябва да предоставят факти, докато
                    мненията се изразяват в коментари и анализи. Разберете разликата между двете и бъдете особено
                    внимателни, когато изразявате собствените си мнения. </p>
            </div>
        </div>
        <MainTopic
            id={"youth-engagement-opportunities"}
            titleImage={tealTitleCircle}
            background={styles.tealBackground}
            hasButton={false}
            hasTitleImage={true}
            titleText={"Оценка на въздействието на младежката активност"}
            mainText={"Оценката на въздействието на младежката активност в Западните Балкани може да бъде много положителна, тъй като младежите играят важна роля в обновлението и развитието на региона. Ето някои от ключовите аспекти за въздействието на младежката активност:"}
            className={`${styles.sectionContainer} ${styles.youthEngagement} ${styles.yellowBackground}`}
            btnClass={styles.btnYouthEngagement}
            downRightImage={'/img/westernBalkans/falseNewsWb.png'}
        />
        <div id={"YE-examples"} className={`${styles.citizenAwarenessExamplesContainer} ${styles.sectionContainer}`}>
            <div className={styles.CANotes}>
                <div className={styles.CAFirstRow}>
                    <div className={styles.stickyNoteContainerGreen}>
                        <div className={styles.CAStickyNotePinGreen}/>
                        <div className={styles.YEStickyNoteText}>
                            1. Участие в обществените процеси: Младежите,
                            които се ангажират в младежки организации, движения и активности,
                            имат възможност да изразяват своите гледни точки и интереси.
                            Това насърчава гражданската им ангажираност и участие в обществените процеси.

                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerYellow}>
                        <div className={styles.CAStickyNotePinYellow}/>
                        <div className={styles.YEStickyNoteText}>
                            2. Лидерство и лично развитие: Младежите придобиват ценни лидерски умения, комуникационни
                            умения и опит чрез участие в различни младежки проекти. Този опит може да ги подготви за
                            бъдещи роли в обществото и работния свят.
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerGreen}>
                        <div className={styles.CAStickyNotePinGreen}/>
                        <div className={styles.YEStickyNoteText}>
                            3. Разнообразие и мултикултурност:
                            Младежката активност може да насърчи разнообразието и мултикултурната обменност в региона.
                            Проекти, които насърчават обмена между младежи от различни етнически, религиозни и културни
                            групи, създават по-разбирателно и инклузивно общество.
                        </div>
                    </div>
                </div>
                <div className={styles.CASecondRow}>
                    <div className={styles.stickyNoteContainerYellow}>
                        <div className={styles.CAStickyNotePinYellow}/>
                        <div className={styles.YEStickyNoteText}>
                            4.Индивидуални и колективни постижения: Младежките инициативи и проекти често водят до
                            индивидуални и колективни постижения. Младежи, които се ангажират с активности като
                            предприемачество, културна продукция и образователни проекти, могат да постигнат успех и
                            принос за обществото.
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerGreen}>
                        <div className={styles.CAStickyNotePinGreen}/>
                        <div className={styles.YEStickyNoteText}>
                            5. Образователни и обучителни възможности: Младежката активност предоставя образователни и
                            обучителни възможности, които насърчават ученето и развитието на младите хора. Това може да
                            подпомогне образователната и академичната им кариера.
                        </div>
                    </div>

                    <div className={styles.stickyNoteContainerYellow}>
                        <div className={styles.CAStickyNotePinYellow}/>
                        <div className={styles.YEStickyNoteText}>
                            6. Изменение на стереотипите и отношението към младежите: Младежите, които се ангажират с
                            позитивни и социални инициативи, могат да променят стереотипите и отношението към тях в
                            обществото. Те могат да бъдат вдъхновение за другите и да покажат, че младите хора имат
                            важна роля в обществото.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.sectionContainer} ${styles.tealBackground}`}>
            <p>
                Въпреки този положителен въздействие, съществуват и предизвикателства, свързани с младежката активност в
                Западните Балкани, като например необходимостта от подобряване на достъпа до образование и възможности
                за младежите, както и борба с безработицата и икономическите предизвикателства. Развитието на подходящи
                политики и програми, които подкрепят младежката ангажираност, е от съществено значение за постигането на
                устойчиво и проспериращо общество в региона.
            </p>
            <img/>
        </div>
        <Exam
            titleImage={tealTitleCircle}
            background={styles.tealBackground}
            className={styles.sectionContainer}
            scribbleImg={'/img/westernBalkans/tealScribble.svg'}
            btnClass={styles.tealBtnClass}
        />
        <StartingModule
            moduleBackgroundColor={styles.whiteBackground}
            moduleText={"Модул 3 Западни Балкани"}
            commaImage={'/img/grayComma.svg'}
            className={styles.sectionContainer}
        />
        <ContentReview
            heading="Съдържание"
            contentImage={contentReview3}
            background={styles.whiteBackground}
            className={styles.sectionContainer}
        />
        <MainTopic
            id={"youth-engagement-opportunities"}
            titleImage={yellowTitleCircle}
            background={styles.yellowBackground}
            hasButton={false}
            hasTitleImage={true}
            titleText={"Живот, работа, пътуване в Западни Балкани."}
            mainText={"Западният Балкан представлява уникален регион, където животът, работата и пътуванията обогатяват сърцата и ума. От гористите пейзажи до богатото културно наследство, този регион ви предлага разнообразие и преживявания. Животът тук се преплита с традиции и гостоприемство, работата отразява растящата икономика, а пътуванията ви водят към красиви места и разнообразни културни атракции. Запознайте се с тази невероятна част от света и нейните хора - ще откриете топло посрещане и безценни спомени."}
            className={`${styles.sectionContainer} ${styles.youthEngagement} ${styles.yellowBackground}`}
            btnClass={styles.btnYouthEngagement}
            downRightImage={'/img/westernBalkans/falseNewsWb.png'}
        />
        <div
            id={"life-wb"}
            className={`${styles.yellowBg} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                <p>
                    <b>Живот :</b>
                </p>
                <p>
                    <b>1. Култура и традиции:</b> Западният Балкан има богато културно наследство и традиции. Всяка
                    страна има
                    своя уникална история, кухня и фолклор.
                </p>
                <p>
                    <b>2. Гостоприемство:</b> Хората в региона са известни с гостоприемството си. Гостите се почитат и
                    често се предлага традиционна храна и напитки.
                </p>
                <p>
                    <b>3. Природни красоти:</b> Западният Балкан предлага разнообразие от природни красоти, включително
                    планини, езера и плажове. Някои от най-популярните дестинации са Плитвички езера, Будванска ривиера
                    и множество национални паркове.
                </p>
                <p>
                    <b>Работа:</b>
                </p>
                <p>
                    <b>1. Икономика:</b> Икономиката на Западния Балкан се развива, включително сектори като туризъм,
                    информационни технологии, селското стопанство и производство.
                </p>
                <p>
                    <b>2. Работна култура:</b> Работната култура се различава в зависимост от страната, но в цялост
                    регионът е
                    приветлив към работници от други страни.
                </p>
                <p>
                    <b>3. Езици:</b> В региона се говорят различни езици, като сръбски, хърватски, босненски, албански и
                    други.
                    Знанието на английския или местния език може да бъде предимство при работа.
                </p>
                <img src={'/img/sparkle.svg'} className={styles.MASparkleWb}/>
            </div>
        </div>
        <div
            id={"life-wb-2"}
            className={`${styles.yellowBg} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                <p>
                    <b>Пътуване :</b>
                </p>
                <p>
                    <b>1. Транспорт:</b> Западният Балкан разполага с добре развити транспортни връзки, включително
                    пътища, железопътни линии и летища. Можете да пътувате с кола, влак, автобус или самолет.
                </p>
                <p>
                    <b>2. Туристически дестинации:</b> Регионът предлага разнообразие от туристически атракции, от
                    културни
                    градове като Сараево и Белград до красиви природни обекти като южния плаж на Албания.
                </p>
                <p>
                    <b>3. Безопасност:</b> Безопасността може да варира от страна на страна, затова е важно да следвате
                    местните съвети и да бъдете информирани за текущата ситуация преди да пътувате.
                </p>
                <img src={'/img/sparkle-yellow.svg'} className={styles.MASparkleWb}/>
                <img src={'/img/sparkle-yellow.svg'} className={styles.maSparkleDownLeft}/>
            </div>
        </div>
        <MainTopic
            id={"active-citizen "}
            titleImage={tealTitleCircle}
            background={styles.tealBackground}
            hasButton={true}
            hasTitleImage={true}
            titleText={"Какво означава да си активен гражданин в региона?"}
            mainText={"Да бъдеш активен гражданин в Западните Балкани, както и в много други региони, означава да се ангажираш и участваш активно в обществото, за да спомагаш за подобряването му и развитието на демократичните процеси. Това може да включва следните аспекти:"}
            className={`${styles.sectionContainer} ${styles.youthEngagement}`}
            btnClass={styles.btnYouthEngagement}
            downRightImage={activeCitizen}
        />
        <div
            id={"active-citizen-wb-2"}
            className={`${styles.tealBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                <p>
                    <b>1.Участие в обществени и политически процеси:</b> Активният гражданин в Западните Балкани може да
                    се
                    ангажира в изборни кампании, да участва в гласуване, да се кандидатира за обществени или политически
                    длъжности и да изразява своите мнения и становища по важни обществени въпроси. </p>
                <p>
                    <b>2.Участие в неправителствени организации (НПО):</b> Мнозина се включват в работата на НПО, които
                    насърчават социални, културни, екологични или други промени в обществото. Това може да включва
                    участие в кампании за права на човека, околна среда, образование и др.
                </p>
                <p>
                    <b>3.Солидарност и взаимопомощ:</b> Активните граждани могат да участват в събирания, протести и
                    инициативи
                    за подпомагане на уязвимите групи в обществото. Те могат да се ангажират с дейности, които целят да
                    подобрят живота на други хора.
                </p>
                <p>
                    <b>4.Образование и обучение:</b> Участието в образователни програми, семинари и обучения по въпроси,
                    свързани
                    с гражданската активност и участие в обществото, е също част от активната гражданска роля.
                </p>
                <b>
                    <b>Създаване на информирано общество:</b> Активните граждани могат да работят за насърчаване на
                    свободен и
                    независим медиен сектор, който осигурява достъп до информация и насърчава обмена на идеи и мнения.
                </b>
            </div>
        </div>
        <MainTopic
            id={"wb-for-citizens"}
            titleImage={grayTitleCircle}
            background={styles.whiteBackground}
            hasButton={true}
            hasTitleImage={true}
            titleText={"Какво прави Западни Балкани за своите граждани?"}
            mainText={"Западните Балкани са регион, който включва няколко балкански държави в Югоизточна Европа, като Сърбия, Хърватия, Словения, Черна гора, Македония, Албания и Босна и Херцеговина. Различните държави в този регион предприемат различни инициативи и политики, за да подпомагат и подобряват живота на своите граждани. Важно е да се обърне внимание, че всички тези държави имат индивидуални управленски системи и приоритети, така че мерките и програмите могат да варират значително."}
            className={`${styles.sectionContainer} ${styles.youthEngagement}`}
            btnClass={styles.yellowText}
            downRightImage={activeCitizen}
        />
        <div
            id={"wb-for-citizen-2"}
            className={`${styles.whiteBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                <p>
                    <b>Въпреки разнообразието в подходите, някои от инициативите и мерките, които Западните Балкани
                        могат да предлагат на своите граждани, включват: </b></p>
                <p>
                    <b>1.Образование:</b> Предоставянето на качествено образование е приоритет за много държави в
                    региона. Това
                    включва инвестиции в училища, университети и професионално образование.
                </p>
                <p>
                    <b>2.Здравеопазване:</b> Западните Балкани предоставят здравни грижи за своите граждани чрез
                    обществени и
                    частни здравни институции и програми за подпомагане на здравословния начин на живот.
                </p>
                <p>
                    <b>3.Социална сигурност и помощ:</b> Държавите предоставят социални услуги и помощ за уязвими групи
                    на
                    населението, като пенсионери, хора с увреждания и безработни.
                </p>
                <p>
                    <b>4.Икономически развитие и заетост:</b> Инвестициите в икономиката, стимулирането на
                    предприемачеството и
                    създаването на работни места са сред стратегиите за икономическо развитие.
                </p>
                <img src={'/img/greyScribble.svg'} className={styles.topLeftScribbleWb}/>
            </div>
        </div>

        <div
            id={"wb-for-citizen-2"}
            className={`${styles.whiteBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                <p>
                    <b>5.Култура и туризъм:</b> Западните Балкани се гордеят с богатото си културно наследство и
                    туристически атракции, които се предлагат на своите граждани и посетители.
                </p>
                <p>
                    <b>6.Подкрепа за младежта:</b> Различни програми и инициативи са насочени към подпомагане на
                    младежта в
                    региона, включително образование, обмен на студенти и стажове.
                </p>
                <p>
                    <b>3.Социална сигурност и помощ:</b> Държавите предоставят социални услуги и помощ за уязвими групи
                </p>
                <p>
                    <b>4.Икономически развитие и заетост:</b> Инвестициите в икономиката, стимулирането на
                    предприемачеството и
                    създаването на работни места са сред стратегиите за икономическо развитие.
                </p>
                <img src={'/img/greyScribble.svg'} className={styles.maSparkleDownRight}/>
            </div>
        </div>
        <MainTopic
            id={"wb-instruments"}
            titleImage={yellowTitleCircle}
            background={styles.yellowBackground}
            hasButton={true}
            hasTitleImage={true}
            titleText={"Повече за европейските инструменти и Западни Балкани?"}
            mainText={"Европейският съюз (ЕС) е активен в Западния Балкан чрез редица инструменти и програми, предназначени да подкрепят стабилността, икономическото развитие и европейската интеграция на региона. Ето някои от тях:\n"}
            className={`${styles.sectionContainer} ${styles.youthEngagement}`}
            btnClass={styles.yellowText}
            downRightImage={wbInstruments}
        />

        <div
            id={"wb-instruments-2"}
            className={`${styles.yellowBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
        >
            <div className={styles.MAInner}>
                <p>
                    <b>1. Инструмент за предприсъединителна помощ (ИПП):</b> Този инструмент цели да подпомага страните
                    от
                    Западния Балкан, които желаят да станат членки на ЕС, в подготовката им за присъединяване. Той
                    финансира проекти и програми, които се фокусират на реформи в области като правосъдие,
                    инфраструктура и образование.
                </p>
                <p>
                    <b>2. Европейски фонд за стабилност (ЕФС):</b> Този инструмент на ЕС се използва за подкрепа на
                    стабилността и развитието в Западния Балкан, като финансира проекти за развитие на инфраструктура,
                    подпомагане на икономическия растеж и укрепване на демократичните институции.
                </p>
                <p>
                    <b>3. Инициатива за подкрепа на младежта в Западния Балкан (ЕРАСМУС+):</b> Програмата ЕРАСМУС+ на ЕС
                    предоставя възможности за младежи от Западния Балкан да учат, работят и пътуват в рамките на ЕС.
                    Това помага за развитието на младите хора и насърчава културния обмен.
                </p>
                <p>
                    <b>4. Регионална сътрудничество и интеграция в ЕС:</b> ЕС насърчава регионалното сътрудничество между
                    страните от Западния Балкан чрез различни програми и инициативи, като например Процеса на Берлин и
                    Регионалния структурен и инвестиционен фонд (РСИФ). Тези инициативи подкрепят интеграцията на
                    региона и сътрудничеството в области като икономика, инфраструктура и енергетика.
                </p>
                <img src={'/img/scribble-yellow.svg'} className={styles.maSparkleDownRight}/>
            </div>
        </div>
        <MainTopic
            id={"wb-documents-publications"}
            titleImage={tealTitleCircle}
            background={styles.tealBackground}
            hasButton={true}
            hasTitleImage={true}
            titleText={"Документи и публикации Следвайки приоритети на програмата „Еразъм+“."}
            mainText={"Програмата Еразъм на Европейския съюз (ЕС) има за цел насърчаване на образованието, обучението, младежта и спорта в рамките на ЕС и извън него. Този многобройностен инструмент на ЕС предоставя различни документи и публикации, които се фокусират върху приоритетите на програмата Еразъм. Ето някои от тях:"}
            className={`${styles.sectionContainer} ${styles.youthEngagement}`}
            btnClass={styles.tealBtnClass}
            downRightImage={wbDocuments}
        />
        <Exam
            id={"exam-europe-module-3"}
            titleImage={tealTitleCircle} background={styles.sectionContainer}
            className={`${styles.tealBackground} ${styles.sectionContainer}`}
            scribbleImg={'/img/westernBalkans/tealScribble.svg'}
            scribbleImgClass={styles.IAScribble}
            btnClass={styles.tealBtnClass}
            titleClass={styles.IATestTitle}
        />
    </div>
}

export default WesternBalkans;