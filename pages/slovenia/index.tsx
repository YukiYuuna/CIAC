"use client";
import "../../app/globals.scss";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import StartingModule from "@/components/startingModule";
import ContentReview from "@/components/contentReview";
import infoContent from "@/public/img/bulgaria/infoContent.svg";
import MainTopic from "@/components/mainTopic";
import blueTitleCircle from "../../public/img/europe/blueTitleCircle.png";
import peopleWithPlanet from "../../public/img/europe/Group.png";
import grayTitleCircle from "../../public/img/bulgaria/grayTitleCircle.png";
import Exam from "@/components/exam";
import yellowSticky from "../../public/img/bulgaria/StickyBgYellow.png";
import yellowElipse from "../../public/img/bulgaria/yellowElipse.png";
import styles from './slovenia.module.scss';
import workingPeople from "../../public/img/slovenia/workingPeople.png"
import sloveniaCommunity from "../../public/img/slovenia/sloveniaCommunity.png"
import SixInfoStickyNotes from "@/components/sixInfoStickyNotes";
import { Table } from "@/components/table";
import Image from "next/image";
import StickyNote from "@/components/ui/stickyNote";
import blueSticky from "../../public/img/slovenia/blueSticky.png"
import {TextWithAction} from "@/components/textWithAction";
import sloveniaContentTwo from "../../public/img/slovenia/sloveniaContentTwo.png"
import citizenEducation from "../../public/img/slovenia/citizenEducation.png"
import FiveInfoStickyNotes from "@/components/fiveInfoStickyNotes";
import celebrating from "../../public/img/slovenia/celebrating.png"
import contentReview3 from "../../public/img/slovenia/contentReview3.png"
import europeanCitizen from "../../public/img/slovenia/europeanCItizen.png"
import redTitleCircle from "../../public/img/redTitleCircle.png"
import notesCheck from "../../public/img/slovenia/notesCheck.png"

const Slovenia = () => {
    const [theme, setTheme] = useState("dark");

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return (
        <div className={"app-container"}>
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <StartingModule
                moduleText={"Модул 1 Словения"}
                moduleBackgroundColor={styles.bgRed}
                className={styles.sectionContainer}
            />
            <div className={`${styles.quotesContainer} ${styles.sectionContainer}`}>
                <div className={`${styles.quotesRow} mb-20`}>
                    <div className={styles.quoteMerkel}>
                        <div className={styles.doubleQuoteMerkel}>
                            <img src={'/img/europe/quote_blue.svg'} className={styles.firstQuote}/>
                            <img src={'/img/europe/quote_blue.svg'} className={styles.secondQuote}/>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.person}>Е. Кейси</p>
                            <p className={styles.quoteText}>
                                Мечтите са днешните отговори на утрешните въпроси.
                            </p>
                        </div>
                    </div>

                    <div className={styles.quoteKenedy}>
                        <div className={styles.doubleQuoteKenedy}>
                            <img src={'/img/europe/quote_gray.svg'} className={styles.firstQuote}/>
                            <img src={'/img/europe/quote_gray.svg'} className={styles.secondQuote}/>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.person}>П. Друкър</p>
                            <p className={styles.quoteText}>
                                Най-добрият начин да предвидите бъдещето е да го създадете.
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
                            <p className={styles.person}>Л. Браун</p>
                            <p className={styles.quoteText}>
                                Личното развитие е ключът към преодоляването на своите ограничения.
                            </p>
                        </div>
                    </div>

                    <div className={styles.quoteBerbatov}>
                        <div className={styles.doubleQuoteBerbatov}>
                            <img src={'/img/europe/quote_darkblue.svg'} className={styles.firstQuote}/>
                            <img src={'/img/europe/quote_darkblue.svg'} className={styles.secondQuote}/>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.person}>Н. Хил</p>
                            <p className={styles.quoteText}>
                                Човек може да постигне всичко, стига да повярва в него.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContentReview
                heading="Съдържание"
                contentImage={infoContent} background={styles.redText}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Политика"}
                mainText={"Политиката в Словения се формира чрез парламентарна демокрация. Държавата е член на Европейския съюз и НАТО. Политическият пейзаж включва различни партии, като Словенска демократическа партия и Левица. Президентът е главен представител на държавата, а министър-председателят ръководи изпълнителната власт."}
                className={styles.sectionContainer}
                downRightImage={workingPeople}
            />
            <Table
                tableImg={'/img/slovenia/slovTable.png'}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={redTitleCircle}
                background={styles.bgRed}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Общество"}
                downRightImage={sloveniaCommunity}
                mainText={"Обществото в Словения е разнообразно и културно богато. Съставено от различни етнически групи, то е обединено от словенския език и културна идентичност. Образованието и науката заемат важно място, а икономиката е стабилна и приветства иновации. Словения предоставя на гражданите социални грижи и качествено здравеопазване. "}
                className={styles.sectionContainer}
            />

            <MainTopic
                titleImage={grayTitleCircle}
                background={"greyBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Институции"}
                downRightImage={peopleWithPlanet}
                mainText={"Институциите в Словения обхващат различни сфери на държавното управление и функциониране на страната. Включват органи и структури, които се занимават със законодателство, изпълнителна власт, съдебна система, изборни процеси и много други аспекти на обществения живот. Някои от областите, които институциите в Словения обхващат са:\n"}
                className={styles.sectionContainer}
            />
            <SixInfoStickyNotes
                text1={"1. Изпълнителна власт: Правителството и президентът на Република Словения управляват страната и ръководят изпълнителните функции."}
                text2={"2. Законодателство: Парламентът на Република Словения приема закони и регулации, които регулират различни аспекти на обществения живот."}
                text3={"3. Съдебна система: Включва различни съдилища и инстанции, които осигуряват независимо и справедливо правосъдие в страната.\n"}
                text4={"4. Изборни процеси: Институциите, свързани с изборите, организират и контролират изборния процес, включително изборите за президент, парламент и местни органи.\n"}
                text5={"5. Образование и култура: Различни институции поддържат образователните и културни интереси на гражданите."}
                text6={"6. Социални и здравни услуги: Институции, които се грижат за социалното и здравното благосъстояние на гражданите."}
                className={styles.sectionContainer}
            />
            <div id={"three-sticky"} className={`${styles.sectionContainer} greyBackground}`}>
                <div className={styles.titleContainer}>
                    <Image src={grayTitleCircle} alt={"commaImg"} className="mt-6"/>
                    <span className={`${styles.titleText}`}>
                       Още
                    </span>
                </div>

                <div className={"flex flex-row justify-center"}>
                    <StickyNote noteImageSrc={blueSticky} circleImageSrc={blueTitleCircle} noteText={"7. Икономика и финанси: Институции, свързани с икономическите и финансовите аспекти на държавното управление."}/>
                    <StickyNote noteImageSrc={yellowSticky} circleImageSrc={yellowElipse} noteText={"8. Местно самоуправление: Общините и регионалните структури управляват местните въпроси и предоставят услуги на гражданите."}/>
                    <StickyNote noteImageSrc={blueSticky} circleImageSrc={blueTitleCircle} noteText={"9. Външна политика и международни отношения: Институции, които се занимават с външните отношения и представителството на страната на международната сцена.\n"}/>
                </div>

            </div>

            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Информационни страници"}
                downRightImage={peopleWithPlanet}
                mainText={"Политиката в Европа е изключително разнообразна, тъй като Европа се състои от множество държави със собствени правителства и политически системи. Европейският съюз (ЕС) обаче играе ключова роля във формирането на общата политическа атмосфера на континента."}
                className={styles.sectionContainer}
            />

            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgBlue}`}
                scribbleImg={'/img/Scribble.svg'}
                hasActionBtn={false}
                actionBtnTxt={"Към списък"}
            >
                <p>
                    <b>1. Избори:</b> Гражданите на Словения имат правото да участват
                    в парламентарни, президентски и местни избори. Изборите
                    са ключов момент за гражданско участие
                    и възможност за изразяване на политическия избор.
                </p>
                <br/>
                <p>
                    <b>2. Граждански организации:</b> В страната действат множество граждански
                    организации, които се занимават с различни социални, икономически и
                    екологични въпроси. Тези организации предоставят платформа за гражданско
                    участие и ангажимент в решаването на важни въпроси.
                </p>
                <br/>
                <p>
                    <b>3. Обществени консултации:</b> Властите в Словения често организират публични
                    консултации по различни въпроси, като икономика, екология, образование и
                    др. Това позволява на гражданите да изразят своите мнения и предложения.
                </p>
                <br/>
                <p>
                    <b>4. Социални движения и протести:</b> Гражданите на Словения са се ангажирали в
                    различни социални движения и протести, които се фокусират върху различни
                    проблеми и въпроси. Тези действия често предизвикват
                    обществен дебат и влияние върху политиките.
                </p>
                <br/>
                <p>
                    <b>5. Медии и онлайн участие:</b> Гражданите имат възможност да изразят своите
                    мнения и да споделят информация чрез медиите и социалните мрежи.
                    Това позволява на обществото да бъде информирано и активно участие в дискусии.
                </p>
                <br/>
                <p className={"text-opacity-25"}>
                    Гражданското участие играе важна роля в развитието на
                    демократичното общество в Словения, като дава глас на гражданите
                    и подпомага тяхната участие в процеса на вземане на решения.
                </p>
            </TextWithAction>

            <Exam
                titleImage={blueTitleCircle} background={"blueBackground"}
                className={styles.sectionContainer}
            />


            <StartingModule
                moduleText={"Модул 2 Словения"}
                moduleBackgroundColor={styles.bgRed}
                className={styles.sectionContainer}
            />

            <ContentReview
                heading="Съдържание"
                contentImage={sloveniaContentTwo} background={styles.bgRed}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Уроци по гражданско образование"}
                downRightImage={citizenEducation}
                mainText={"Гражданското образование в Словения има за цел да подготви граждани със знания, умения и ценности, необходими за активно и отговорно участие в демократичното общество. То включва учебни програми, уроци и дейности, които развиват гражданска отговорност, критично мислене, умения за участие в обществените процеси и разбирателство към разнообразието. "}
                className={styles.sectionContainer}
            />

            <div className={styles.sectionContainer}>
                <p className={styles.title}>
                    Няколко характеристики на гражданското образование в страната:
                </p>
                <SixInfoStickyNotes
                    text1={"1. Учебни програми и уроци: Гражданското образование е интегрирано в учебните програми на различни образователни степени - от начално до средно образование. Уроците включват теми като правата на човека, демокрацията, участие в обществото, околната среда и други."}
                    text2={"2. Ценности на демокрацията: Образователната система насърчава ценности като свобода, толерантност, равноправие и уважение към мненията на другите. Гражданско образование помага на учениците да разберат и оценят различията в обществото.\n"}
                    text3={"3. Учебни материали: Учебниците и материалите за гражданско образование се актуализират, за да отразят актуалните събития и предизвикателства в обществото. Това помага на учениците да разберат реалните въпроси, пред които се изправя демокрацията.\n"}
                    text4={"4. Учебни методи: Гражданското образование се основава на интерактивни и учаственически методи на обучение. Учениците се стимулират да изразяват мненията си, да провеждат дебати и да работят в групи.\n"}
                    text5={"5. Гражданска отговорност и активизъм: Учениците се насърчават да се ангажират с обществото и да участват в инициативи, които насърчават промени за подобряване на обществото."}
                    text6={"6. Подготовка за граждански живот: Гражданското образование предоставя умения, необходими за участие в граждански организации, процеси на вземане на решения и решаване на обществени проблеми."}
                    className={styles.sectionContainer}
                />
            </div>
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Младежка ангажираност в действие"}
                downRightImage={citizenEducation}
                mainText={"Младежката ангажираност в Словения е насърчавана и подкрепяна чрез различни програми, организации и инициативи. Ето няколко аспекта на младежката ангажираност в действие в Словения: Младежки организации и структури: Съществуват множество младежки организации и структури, които се занимават с организиране на събития, проекти, обучения и кампании за младежи."}
                className={styles.sectionContainer}
            />
            <FiveInfoStickyNotes
                text1={"Европейски програми: Словения участва в различни европейски програми и инициативи, които насърчават младежката ангажираност."}
                text2={"Младежки образователни програми В Словения има образователни програми и курсове, които се фокусират върху развитието на лидерски умения, предприемачество, социални умения и други умения, които са полезни за младежката ангажираност."}
                text3={"Доброволчество и гражданска активност: Младежите в Словения имат възможност да се включат в доброволчески проекти и граждански инициативи, които се занимават с разнообразни въпроси като околната среда, образование, култура и социална интеграция."}
                text4={"Младежки центрове и събития: Младежките центрове в различни градове на Словения предоставят място за срещи, обучения, дискусии и събития за младежи. Тези центрове могат да бъдат инициирани както от държавата, така и от неправителствени организации."}
                text5={"Финансова подкрепа: Младежката ангажираност в Словения може да бъде подкрепена и финансово чрез грантове и фондове, които се предоставят за младежки проекти и инициативи."}
            />
            <MainTopic
                titleImage={grayTitleCircle}
                background={"redBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Ползи от младежката ангажираност"}
                downRightImage={citizenEducation}
                mainText={"Младежката ангажираност в Словения представлява активното и съзнателно участие на младежите в различни области на обществото с цел постигане на промени и подобрения. Тази ангажираност играе важна роля в развитието на младежите като граждани, които разбират важността на участието си в обществото и имат възможност да изразяват своите мнения и идеи.\n"}
                className={styles.sectionContainer}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgRed}`}
                scribbleImg={'/img/scribble.svg'}
                hasActionBtn={false}
                actionBtnTxt={"Към списък"}
            >
                <p>
                    <b>1. Лично и професионално развитие:</b> Участието в младежки организации,
                    инициативи и проекти предоставя на младежите възможност да развият
                    комуникационни умения, лидерски качества, решаване на проблеми и работа в екип.
                    Тези умения са ценни както в личния, така и в професионалния им живот.
                </p>
                <br/>
                <p>
                    <b>2. Гражданска отговорност и активност: </b> Участието на младежите в обществени
                    инициативи ги учи за активното участие в обществото.
                    Те разбират какво означава да бъдеш отговорен гражданин,
                    да се ангажираш с важни въпроси и да участваш в обществените решения.
                </p>
                <br/>
                <p>
                    <b>3. Повишаване на самочувствието:</b> Младежите, които са ангажирани в обществени
                    инициативи, често изпитват повишена самоувереност и усещане за постижение.
                    Това може да има позитивен ефект върху тяхното общо благополучие.
                </p>
                <br/>
                <p>
                    <b>4. Социални връзки и мрежи:</b> Младежката ангажираност дава възможност на
                    младежите да се срещат и работят с хора от различни области
                    и фонове. Това помага за създаването на ценни социални мрежи и контакти.
                </p>
                <br/>
                <p>
                    <b>5. Промяна в обществото:</b> Младежите са често двигатели на промени в обществото.
                    Тяхната ангажираност може да доведе до подобрения в области като образование,
                    околна среда, култура и социални услуги.
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
                background={"redBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Възможности за младежката ангажираност"}
                downRightImage={celebrating}
                mainText={"В Словения има разнообразни възможности за младежка ангажираност, които предоставят на младежите възможност да участват активно в обществото, да развиват умения и да допринесат за положителни промени."}
                className={styles.sectionContainer}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgRed} w-1/2`}
                scribbleImg={'/img/scribble.svg'}
                hasActionBtn={false}
                actionBtnTxt={"Към списък"}
            >
                <p>
                    <b>1. Младежки организации:</b> В Словения съществуват множество младежки
                    организации, които предоставят възможности за младежите да се
                    ангажират в различни инициативи, проекти и кампании,
                    свързани с образование, култура, околна среда, здраве и други.
                </p>
                <br/>
                <p>
                    <b>2. Младежки клубове и центрове:</b> Младежките клубове
                    и центрове предлагат пространства, където младежите могат
                    да се срещат, обменят идеи, участват в образователни
                    събития и работят по обществени проекти.
                </p>
                <br/>
                <p>
                    <b>3. Младежки съвети:</b> В много градове и общности съществуват
                    младежки съвети, които предоставят на младежите
                    възможност да се ангажират в обсъждане на важни
                    въпроси и да представят своите идеи пред местните власти.
                </p>
                <br/>
                <p>
                    <b>4. Образователни програми и курсове:</b> Младежките организации
                    и училища предоставят разнообразни образователни програми
                    и курсове, които развиват уменията на младежите в области
                    като лидерство, предприемачество, комуникация и други.
                </p>
            </TextWithAction>
            <div
                id={"media-advice"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        <b>1. Образователни програми: </b> Образователните институции и организации могат да разработят специални програми и уроци, насочени към развиване на медийна грамотност. Тези програми могат да обхващат умения като критично мислене, изследване на източници, анализ на информация и други.
                    </p>
                    <p>
                       <b>2. Обучения и семинари:</b> Младежки центрове, университети, медийни организации и други институции могат да организират обучения и семинари, които да предоставят на младежите практически инструменти за разпознаване на фалшиви новини.
                    </p>
                    <p>
                       <b>3. Медийни кампании:</b> Организации и инициативи в Словения могат да провеждат медийни кампании, които да повишат осведомеността за важността на медийната грамотност и разпознаването на фалшиви новини.
                    </p>
                    <img src={'/img/sparkle.svg'} className={styles.MASparkle}/>
                </div>
            </div>

            <div
                id={"media-advice"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        <b>1. Образователни програми: </b> Образователните институции и организации могат да разработят специални програми и уроци, насочени към развиване на медийна грамотност. Тези програми могат да обхващат умения като критично мислене, изследване на източници, анализ на информация и други.
                    </p>
                    <p>
                        <b>2. Обучения и семинари:</b> Младежки центрове, университети, медийни организации и други институции могат да организират обучения и семинари, които да предоставят на младежите практически инструменти за разпознаване на фалшиви новини.
                    </p>
                    <p>
                        <b>3. Медийни кампании:</b> Организации и инициативи в Словения могат да провеждат медийни кампании, които да повишат осведомеността за важността на медийната грамотност и разпознаването на фалшиви новини.
                    </p>
                    <img src={'/img/sparkle.svg'} className={styles.MASparkle}/>
                </div>
            </div>

            <div
                id={"media-advice"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        <b>1. Образователни програми: </b> Образователните институции и организации могат да разработят специални програми и уроци, насочени към развиване на медийна грамотност. Тези програми могат да обхващат умения като критично мислене, изследване на източници, анализ на информация и други.
                    </p>
                    <p>
                        <b>2. Обучения и семинари:</b> Младежки центрове, университети, медийни организации и други институции могат да организират обучения и семинари, които да предоставят на младежите практически инструменти за разпознаване на фалшиви новини.
                    </p>
                    <p>
                        <b>3. Медийни кампании:</b> Организации и инициативи в Словения могат да провеждат медийни кампании, които да повишат осведомеността за важността на медийната грамотност и разпознаването на фалшиви новини.
                    </p>
                    <img src={'/img/sparkle.svg'} className={styles.MASparkleLeft}/>
                </div>
            </div>
            <MainTopic
                titleImage={grayTitleCircle}
                background={"redBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Оценка на въздействието на младежката активност"}
                downRightImage={celebrating}
                mainText={"Младежката активност в Словения представлява динамичен и разнообразен сектор, който насърчава младежите да се ангажират в различни инициативи и дейности за лично и обществено развитие. Този сектор предоставя на младежите възможности да развият умения, да изразяват свои идеи и да допринесат за обществото."}
                className={styles.sectionContainer}
            />
            {/*<div id={"list"} className={`${styles.sectionContainer}   ${styles.impactAssessment} ${"redBackground"}`}>*/}
            {/*    <img src={'img/greyScribble.svg'} className={`${styles.topLeftScribble}`}/>*/}
            {/*    <div className={styles.textContent}>*/}
            {/*        <ul>*/}
            {/*            <li>Образование и умения;</li>*/}
            {/*            <li>Развитие на личността;</li>*/}
            {/*            <li>Гражданско участие и демокрация;</li>*/}
            {/*            <li>Развитие на социалната мрежа;</li>*/}
            {/*            <li>Интеркултурно разбирателство;</li>*/}
            {/*            <li>Подпомагане на предприемачество.</li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*    <img src={'/img/scribble-gray.svg'} className={styles.EUBSparkle}/>*/}
            {/*</div>*/}

            <Exam titleImage={redTitleCircle} background={"redBackground"} className={styles.sectionContainer}/>
            <StartingModule moduleBackgroundColor={styles.whiteBackground} moduleText={"Модул 3 Словения"} className={styles.sectionContainer}/>
            <ContentReview heading="Съдържание" contentImage={contentReview3} background={styles.whiteBackground} className={styles.sectionContainer}/>
            <div id={"impact-assessment"} className={`${styles.sectionContainer} ${styles.impactAssessment} ${styles.bgBlue}`}>
                <div className={styles.IATitle}>
                    <span>Живот, работа, пътуване в ЕС</span>
                    <img src={"/img/europe/blueTitleCircle.png"} className={styles.IATitleCircle}/>
                </div>
                <div className={styles.textContent}>
                    <img src={"/img/sparkle.svg"} className={styles.IAsparkle}/>
                    <p>
                        Словения е прекрасна държава в Европейския съюз с много предимства за живот, работа и пътуване. Ето някои от тях:
                    </p>
                    <p>
                        <b>1. Свобода на движение:</b> Бъдейки част от Европейския съюз,
                        гражданите на Словения и другите държави-членки имат
                        право на свободно движение и работа във всички страни от ЕС.
                        Това означава, че можете да избирате между различни работни и
                        образователни възможности в рамките на Съюза.
                    </p>

                    <p>
                        <b>2. Евро като валута:</b> Словения използва еврото като своя валута.
                        Това облекчава пътуванията и търговията в рамките на Еврозоната,
                        като се избягват разходи за обмяна на валута.
                    </p>
                    <p>
                        <b>3. Стабилност и инфраструктура:</b>
                        Държавата има стабилна и развита икономика,
                        както и добре развита инфраструктура, което подобрява качеството на живот.
                    </p>
                </div>
            </div>
            <div
                id={"media-advice"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}>
                    <div className={styles.MAInner}>
                        <p>
                            <b>4. Красива природа: </b> Словения разполага с изключително красива природа, включително планини, езера и гори. Това предоставя много възможности за отдих.
                        </p>
                        <p>
                            <b> 5. Културно и историческо наследство:</b> Държавата има богата история и култура, което означава, че има много забележителности, музеи и традиции за изследване.
                        </p>
                        <p>
                            <b>6. Образование:</b> Словения предлага качествено образование на всички нива - от начално до университетско. Гражданите на държавата също имат възможност да учат и работят в различни учебни институции в други страни от ЕС.
                        </p>
                        <p>
                            <b>Здравна грижа:</b> Здравната грижа в Словения е добре организирана и достъпна. Гражданите имат право на основни медицински услуги и лечение.
                        </p>
                        <img src={'/img/sparkle.svg'} className={styles.MASparkleLeft}/>

                    </div>
                </div>
            </div>
            <MainTopic
                titleImage={redTitleCircle}
                background={styles.bgRed}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Какво означава да си активен европейски гражданин?\n"}
                downRightImage={europeanCitizen}
                mainText={"Да бъдеш активен европейски гражданин означава да участваш активно в обществения живот на Европейския съюз, да използваш своите права и да се ангажираш в дейности, които подпомагат интеграцията, сътрудничеството и разбирателството между държавите-членки. Това може да включва участие в изборите за Европейски парламент, изразяване на своите мнения и идеи, подкрепа на инициативи за обществено благо и дори участие в междукултурни обменни програми.\n"}
                className={styles.sectionContainer}
            />
            <div
                id={"european-citizen-text"}
                className={`${styles.bgRed} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        <b>1. Гласуване на избори:</b> Участвайте в изборите за Европейски парламент, както и в местните избори, за да упражните правото си на глас и да влияете на вземането на решения.</p>
                    <p>
                        <b>2. Образователни събития:</b> Присъствайте на семинари, конференции и образователни събития, където можете да научите повече за Европейския съюз, неговите институции и политики.</p>
                    <p>
                        <b>3. Участие в обществени консултации:</b> Следете за консултации и обсъждания, свързани с ЕС и националната политика, и предоставете своята гледна точка и предложения.</p>
                    <p>
                        <b>4. Европейски доброволчески проекти:</b> Присъединете се към доброволчески проекти и инициативи, които насърчават културен обмен, екологична осведоменост и социална интеграция.</p>
                    <img src={'/img/redScribble.png'} className={styles.MAScribble}/>
                </div>
            </div>

            <div
                id={"slovenia-benefits-info"}
                className={`${styles.bgRed} ${styles.sectionContainer} ${styles.EUBInfoContainer}`}
            >
                <div className={styles.TEAdviceText}>
                    <p>
                        <b>5. Подкрепа на европейски инициативи: </b>
                        Участвайте в кампании и петиции, които подкрепят конкретни европейски инициативи и ценности, които ви вълнуват.
                    </p>
                    <p>
                        <b>6. Участие в европейски културни събития:</b>
                        Присъединете се към културни събития, свързани
                        с различните страни на ЕС, за да научите повече за техните традиции и обичаи.
                    </p>
                    <p>
                        <b>7. Разпространение на информация:</b>
                            Споделяйте информация за ЕС и неговите ползи сред своите приятели и семейство, за да повишите осведомеността им.
                    </p>
                    <img src={'/img/scribble-gray.svg'} className={styles.EUBSparkle}/>
                </div>
            </div>
            <MainTopic
                titleImage={grayTitleCircle}
                background={styles.whiteBackground}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Какво прави ЕС за своите граждани?\n"}
                downRightImage={notesCheck}
                mainText={"Европейският съюз (ЕС) предоставя разнообразни ползи и подкрепа за своите словенски граждани и граждани на всички държави-членки. Ето някои от тези инициативи и политики:"}
                className={styles.sectionContainer}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.whiteBackground}`}
                scribbleImg={'/img/greyScribble.svg'}
                hasActionBtn={false}
                actionBtnTxt={"Към списък"}
            >
                <p>
                    <b>1. Свободно движение и работа:</b> Гражданите на Словения
                    имат право на свободно движение и работа във всички
                    страни-членки на ЕС. Това означава, че те могат да
                    търсят работа, да работят и да живеят в други
                    държави-членки без нужда от специални разрешения.
                </p>
                <br/>
                <p>
                    <b> 2. Финансова подкрепа:</b> Гражданите на Словения се
                    възползват от финансова подкрепа от ЕС чрез
                    структурните и инвестиционните фондове. Тези средства се
                    използват за подпомагане на икономическото развитие,
                    инфраструктурните проекти, образованието и други области.
                </p>
            </TextWithAction>


            <div
                id={"slovenia-benefits-info"}
                className={`${styles.whiteBackground} ${styles.sectionContainer} ${styles.EUBInfoContainer}`}
            >
                <div className={styles.TEAdviceText}>
                    <p>
                        <b>3. Образование и научни изследвания:</b>
                        Гражданите на Словения имат достъп до програми за образование,
                        обучение и научни изследвания, финансирани от ЕС. Това включва възможности
                        за обучение в университети и институции в различни държави-членки.
                    </p>
                    <p>
                        <b>4. Здраве и социални въпроси:</b>
                        ЕС подкрепя сътрудничеството между държавите-членки
                        в областта на здравеопазването, социалната сигурност
                        и социалната интеграция. Гражданите на Словения имат право на ос
                    </p>
                    <p>
                        <b>5. Сигурност и права:</b>
                        ЕС се стреми да осигури сигурността и защитата на своите
                        граждани чрез сътрудничество в областта на правосъдието,
                        полицейското сътрудничество и борбата с тероризма.
                        Гражданите на Словения имат права на справедливо съдебно
                        разследване и правата на човека се зачитат и защитават.
                    </p>

                    <p>
                        <b>Социални програми:</b>
                        ЕС подкрепя различни социални програми, които целят подпомагане
                        на уязвимите групи в обществото, включително безработни,
                        деца, възрастни хора и др.
                    </p>
                    <img src={'/img/scribble-gray.svg'} className={styles.EUBSparkle}/>
                </div>
            </div>
            <div id={"european-instruments"} className={`${styles.sectionContainer} ${styles.impactAssessment} ${styles.bgBlue}`}>
                <div className={styles.IATitle}>
                    <span>Кои са европейските инструменти?</span>
                    <img src={"/img/europe/blueTitleCircle.png"} className={styles.IATitleCircle}/>
                </div>
                <div className={styles.textContent}>
                    <img src={"/img/sparkle.svg"} className={styles.IAsparkle}/>
                    <p>
                        Младежката активност включва участие в различни инициативи,
                        програми и дейности, които имат за цел да подкрепят развитието
                        и участието на младежта в обществото. Тази активност може да
                        има множество положителни въздействия в различни области като:
                    </p>

                   <p>
                       <b>1. Структурни и инвестиционни фондове (СИФ): </b>
                       Тези фондове осигуряват финансиране за различни
                       проекти, които подобряват икономическото и социално
                       развитие в регионите на ЕС. Това включва инфраструктурни
                       проекти, образование, научни изследвания и други.
                   </p>

                    <p>
                        <b>2. Програма "Хоризонт 2020" (Horizon 2020):</b>
                        Това е програма за научни изследвания и иновации,
                        която финансира проекти, насочени към развитие на
                        научни познания, технологичен напредък и иновации.
                    </p>
                </div>
            </div>

            <div
                id={"media-advice"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}>
                    <div className={styles.MAInner}>
                        <p>
                            <b>3. Европейска социална фонд (ЕСФ):</b> Този фонд подпомага проекти и инициативи, които подобряват заетостта, обучението и образованието, както и социалното приобщаване в ЕС
                        </p>
                        <p>
                            <b>4. Програма "Еразъм+" (Erasmus+):</b> Тази програма подкрепя образователни, обучителни и младежки проекти, които насърчават мобилността и междукултурния обмен между младежите в ЕС.
                        </p>
                        <p>
                            <b>5. Програма за здравето на ЕС:</b> Тази програма подпомага сътрудничеството в областта на общественото здраве и улеснява обмена на информация и най-добри практики.
                        </p>
                        <p>
                            <b>6. Европейска структура за сътрудничество в областта на правосъдието (ЕССОП):</b> Това е рамка за сътрудничество между държавите-членки в областта на правосъдието, където се споделят информация и се създават общи стратегии.
                        </p>
                        <p>
                            <b>7. Европейска служба за външни действия (ЕСВД):</b> Това е дипломатическа служба на ЕС, която подпомага външната политика и дейностите на Съюза.
                        </p>
                        <img src={'/img/sparkle.svg'} className={styles.MASparkleLeft}/>
                    </div>
                </div>
            </div>
            <MainTopic
                titleImage={redTitleCircle}
                background={styles.bgRed}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Документи и публикации Следвайки приоритети на програмата „Еразъм+“.\n"}
                downRightImage={notesCheck}
                mainText={"Програмата \"Еразъм+\" е образователна програма на Европейския съюз, която подпомага мобилността и сътрудничеството между образователните институции в различни държави-членки, включително и Словения. Програмата \"Еразъм+\" обхваща образование, обучение, младежки обмен и спорт, предоставяйки възможности за хора от всички възрасти и области."}
                className={styles.sectionContainer}
                btnText={"Виж Примери"}
            />
            <FiveInfoStickyNotes
                text1={"Мобилност на студенти: Програмата предоставя на студентите възможност да учат или стажуват в учебни заведения или предприятия в други държави-членки на ЕС, което ги излага на нови образователни и културни опити."}
                text2={"Мобилност на персонала: Преподавателите, учители и други специалисти от образователните институции могат да участват в обучения, стажове и семинари в чужбина, за да подобрят своите умения и да споделят опит."}
                text3={"Младежки обмен и дейности: Програмата насърчава младежкия обмен и активното участие на младите хора в обществото чрез различни проекти и инициативи."}
                text4={"Сътрудничество между институции: Програмата подпомага сътрудничеството между образователните институции, училищата и университетите, както и между организации в областта на младежката дейност."}
                text5={"Подобряване на качеството на образованието и обучението: Чрез обмен на опит и добри практики, програмата насърчава подобряването на качеството на образованието и обучението във всички нива."}
                className={styles.sectionContainer}
            />
            <Exam titleImage={redTitleCircle} background={styles.bgRed} className={styles.sectionContainer}/>
            <div id={"extra-resources"} className={`${styles.sectionContainer} ${styles.bgRed}`}>
                <img src={'/img/europe/extra-resource.png'} className={styles.ERImg}/>
            </div>
        </div>
    );
};

export default Slovenia;