"use client";
import "../../app/globals.scss";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import StartingModule from "@/components/startingModule";
import ContentReview from "@/components/contentReview";
import infoContent from "@/public/img/bulgaria/infoContent.png";
import MainTopic from "@/components/mainTopic";
import yellowTitleCircle from "../../public/img/europe/yellowTitleCircle.png";
import blueTitleCircle from "../../public/img/europe/blueTitleCircle.png";
import peopleWithPlanet from "../../public/img/europe/Group.png";
import grayTitleCircle from "../../public/img/bulgaria/grayTitleCircle.png";
import Exam from "@/components/exam";
import styles from './europe.module.scss';
import { Table } from '@/components/table';
import { TextWithAction } from "@/components/textWithAction";
import OpenAI from 'openai';
import Image from "next/image";
import {getTexts} from "@/contexts/LanguageContext";

const Europe = () => {
    const [theme, setTheme] = useState("dark");
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState<any>("");
    const [generatingResponse, setGeneratingResponse] = useState<boolean>(false);
    const { texts: {Europe: texts} } = getTexts();

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    const handleInputChange = (event: any) => {
        setPrompt(event?.target?.value);
    }

    const askChatGPT = async () => {
        if (!generatingResponse) {
            if (prompt?.length <= 0) {
                alert("Please insert a valid message! :)");
            }

            setGeneratingResponse(true);
            const openai = new OpenAI({
                apiKey: process.env["NEXT_PUBLIC_OPENAI_API_KEY"],
                dangerouslyAllowBrowser: true
            });

            setResponse("");
            const chatCompletion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: prompt }],
                model: 'gpt-3.5-turbo',
            });

            if (!chatCompletion?.choices[0]?.message?.content) {
                alert("Something went wrong! Please try asking another question...")
            } else {
                setResponse(`Q: ${prompt}\n\nA: ${chatCompletion?.choices[0]?.message?.content}`)
            }

            setGeneratingResponse(false);
        } else {
            alert("Please wait, a response is being generated for you! :)")
        }
    }

    return (
        <div className={"app-container"}>
            <Navbar
                changeTheme={changeTheme} currentTheme={theme}
            />
            <StartingModule
                moduleText={texts.moduleOneEurope}
                moduleBackgroundColor={"blueBackground"}
                className={styles.sectionContainer}
            />
            <div id={"chat-gpt2"} className={`${styles.chatGPTContainer} ${styles.sectionContainer} ${styles.bgBlue}`}>
                <div className={styles.CGPTTitle}>
                    Попитай chatGPT относно тази тема !<br/>
                    <span>(Powered by ChatGPT)</span>
                </div>
                <div className={styles.CGPTContent}>
                    <div className={styles.CGPTInputWrapper}>
                        <input
                            id={"chatGPT-prompt"}
                            placeholder={"Напишете въпроса тук"}
                            className={styles.CGPTInput}
                            value={prompt}
                            onChange={handleInputChange}
                        />
                        <div
                            className={styles.askChatGPTBtn}
                            onClick={askChatGPT}
                            title={generatingResponse ? "Generating response, please wait..." : ""}
                        >
                            {generatingResponse ? "..." : "GO"}
                        </div>
                    </div>
                    <pre id={"response-body"} className={styles.CGPTResponse}>
                        {response ?? "Response will be generated here..."}
                    </pre>
                </div>
            </div>

            <div className={`${styles.sectionContainer}`}>
                <div className={`${styles.titleText} relative`}>
                    Политика на европа
                </div>
                <div className={styles.mainTextContainer}>
                    <div className={styles.mainText}>
                        Политиката в Европа е изключително разнообразна, тъй като Европа се състои от множество държави със собствени правителства и политически системи. Европейският съюз (ЕС) обаче играе ключова роля във формирането на общата политическа атмосфера на континента.

                    </div>
                </div>
                <div className={`${styles.bottomRightImage}`}>
                    <div className={styles.CGPTContentDownRight}>
                        <div className={styles.CGPTInputWrapper}>
                            <input
                                id={"chatGPT-prompt"}
                                placeholder={"Напишете въпроса тук"}
                                className={styles.CGPTInput}
                                value={prompt}
                                onChange={handleInputChange}
                            />
                            <div
                                className={styles.askChatGPTBtn}
                                onClick={askChatGPT}
                                title={generatingResponse ? "Generating response, please wait..." : ""}
                            >
                                {generatingResponse ? "..." : "GO"}
                            </div>
                        </div>
                        <pre id={"response-body"} className={styles.CGPTResponse}>
                        {response ?? "Response will be generated here..."}
                    </pre>
                    </div>
                </div>
            </div>
            <div className={`${styles.quotesContainer} ${styles.sectionContainer}`}>
                <div className={`${styles.quotesRow} mb-20`}>
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
                                Европа е мястото, където историята се преплита със съвременността, а традициите се срещат с иновациите.
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
                                Европа е историята и цивилизацията, и културата и идеите, и мечтите. Тя е бъдещето и надеждата на всички наши народи.
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
            <ContentReview
                heading="Съдържание"
                contentImage={infoContent} background={"whiteBackgroundEurope"}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Политика"}
                mainText={"Политиката в Европа е изключително разнообразна, тъй като Европа се състои от множество държави със собствени правителства и политически системи. Европейският съюз (ЕС) обаче играе ключова роля във формирането на общата политическа атмосфера на континента."}
                className={styles.sectionContainer}
                downRightImage={'/img/europe/politics.png'}
                downRightImageClass={styles.politicsImg}
            />
            <Table
                tableImg={'/img/europe/politicsTable.png'}
                className={styles.sectionContainer}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgBlue}`}
                scribbleImg={'/img/scribble.svg'}
                hasActionBtn={true}
                actionBtnTxt={"Към списък"}
            >
                <p>
                    Европейският съюз е междуправителствена организация, съставена
                    от <b>27 европейски държави</b>, които си сътрудничат във въпроси
                    като икономика, търговия, сигурност и околна среда.
                    Той има институции, които управляват общите политики и законодателство,
                    като Европейската комисия, Европейския парламент и Съвета на Европейския съюз.
                </p>
                <br/>
                <p>
                    Европейският парламент е единственият орган, който се избира
                    директно от гражданите на ЕС и има важна роля в създаването на
                    законодателство и надзора на другите институции. Европейската
                    комисия е изпълнителен орган, който предлага ново законодателство и
                    гарантира изпълнението на вече приетите закони. Съветът на
                    Европейския съюз представлява държавите-членки и участва в
                    процеса на приемане на закони.
                </p>
                <br/>
                <p>
                    Политиката на ЕС обхваща различни области, като свободно движение
                    на хора, стоки и услуги, обща валута - еврото, сътрудничество
                    в областта на правосъдието и вътрешните работи, обща селскостопанска
                    политика, политика за околната среда и други.
                </p>
                <br/>
                <p>
                    Политическите предизвикателства, пред които Европа се изправя,
                    включват миграционния поток, изменението на климата, социалните и
                    икономическите неравенства и отношенията с глобалните играчи.
                </p>
            </TextWithAction>
            <div className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.countriesListContainer}`} id={"countries-list"}>
                <div className={styles.countriesListTitle}>
                    Списък с 27-те държави - членки на Европейския съюз.
                    <img src={'/img/sparkle.svg'} className={styles.sparkle}/>
                </div>
                <div className={styles.countriesList}>
                    <div className={styles.coutriesLeftList}>
                        1. Австрия (Österreich)<br/>
                        2. Белгия (België/Belgique)<br/>
                        3. България (България)<br/>
                        4. Гърция (Ελλάδα)<br/>
                        5. Германия (Deutschland)<br/>
                        6. Дания (Danmark)<br/>
                        7. Естония (Eesti)<br/>
                        8. Ирландия (Ireland)<br/>
                        9. Испания (España)<br/>
                        10. Италия (Italia)<br/>
                        11. Кипър (Κύπρος/Kıbrıs)<br/>
                        12. Латвия (Latvija)<br/>
                        13. Литва (Lietuva)<br/>
                        14. Люксембург (Luxembourg)<br/>
                    </div>
                    <div className={styles.coutriesRightList}>
                        15. Малта (Malta)<br/>
                        16. Полша (Polska)<br/>
                        17. Португалия (Portugal)<br/>
                        18. Румъния (România)<br/>
                        19. Словакия (Slovensko)<br/>
                        20. Словения (Slovenija)<br/>
                        21. Унгария (Magyarország)<br/>
                        22. Финландия (Suomi/Finland)<br/>
                        23. Франция (France)<br/>
                        24. Холандия (Nederland)<br/>
                        25. Хърватска (Hrvatska)<br/>
                        26. Чехия (Česko)<br/>
                        27. Швеция (Sverige)<br/>
                    </div>
                </div>
            </div>
            <MainTopic
                titleImage={yellowTitleCircle}
                background={"yellowBackgroundEurope"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Общество"}
                downRightImage={peopleWithPlanet}
                mainText={"Обществото в Европа е изключително разнообразно и многослойно, като обхваща множество култури, езици, религии и обичаи. Европейското общество се характеризира с богата история, дълбоки традиции и променящи се социални структури."}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={grayTitleCircle}
                background={"greyBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Институции"}
                downRightImage={peopleWithPlanet}
                mainText={"Институциите в Европа обхващат различни организации и структури, които играят ключова роля в управлението и функционирането на Европейския съюз (ЕС). Тези институции създават, прилагат и наблюдават законодателството на ЕС, както и изпълняват други важни функции. Най-важните институции на Европейския съюз са:"}
                className={`${styles.sectionContainer} ${styles.bgGray} ${styles.institutionsContainer}`}
            />
            <div id={"CA-examples"} className={`${styles.citizenAwarenessExamplesContainer} ${styles.sectionContainer}`}>
                <div className={styles.CANotes}>
                    <div className={styles.CAFirstRow}>
                        <div className={styles.stickyNoteContainerBlue}>
                            <div className={styles.CAStickyNotePinBlue}/>
                            <div className={styles.CAStickyNoteText}>
                                1. Европейски парламент: Европейският парламент е единственият орган на ЕС, който се избира директно от гражданите на държавите-членки. Той представлява интересите на гражданите и участва в създаването на ново законодателство на ЕС. Парламентът участва и в одобрението на бюджета на ЕС и осъществява надзор над другите институции
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.CAStickyNoteText}>
                                2. Европейска комисия: Европейската комисия е изпълнителният орган на ЕС. Тя предлага ново законодателство и осъществява надзор над изпълнението на законите на ЕС. Комисията също така представлява ЕС на международната сцена и участва в преговори с други държави и организации.
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerBlue}>
                            <div className={styles.CAStickyNotePinBlue}/>
                            <div className={styles.CAStickyNoteText}>
                                3. Съвет на Европейския съюз: Съветът е органът, представляващ държавите-членки на ЕС. Той участва в процеса на приемане на закони и координира политиките на държавите-членки. Съветът също така играе важна роля в определянето на общите стратегии на ЕС по различни въпроси.

                            </div>
                        </div>
                    </div>
                    <div className={styles.CASecondRow}>
                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.CAStickyNoteText}>
                                4. Европейският съд на правата на човека: Това е независим съдебен орган, който осигурява спазването на законите на ЕС и решава спорове между държавите-членки и институциите на ЕС. Съдът също така разглежда жалби от граждани и компании относно нарушения на техните права или законните правила на ЕС.

                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.CAStickyNoteText}>
                                5. Европейската централна банка (ЕЦБ): ЕЦБ е отговорна за монетарната политика на еврозоната, която е групата от държави в ЕС, използващи общата валута - еврото. Тя контролира възможностите за издаване на пари, провежда валутни операции и следи инфлацията и икономическото развитие в региона.

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Информационни страници"}
                downRightImage={peopleWithPlanet}
                mainText={"Политиката в Европа е изключително разнообразна, тъй като Европа се състои от множество държави със собствени правителства и политически системи. Европейският съюз (ЕС) обаче играе ключова роля във формирането на общата политическа атмосфера на континента."}
                className={styles.sectionContainer}
            />
            <div
                id={"sticky-note-one"}
                className={`${styles.sectionContainer} ${styles.bgBlue} ${styles.singleStickyNoteContainer}`}
            >
                <div className={styles.singleStickyNote}>
                    <div className={styles.stickyNotePinBlue}/>
                    1. Избори за Европейския парламент: Гражданите имат право да
                    избират членове на Европейския парламент, които представляват
                    техните интереси и гласуват по важни въпроси на европейско ниво. <br/><br/>

                    2. Европейски граждански инициативи: Гражданите на ЕС могат
                    да инициират петиции с определен брой подписи, с които да
                    предложат ново законодателство или изменения към съществуващи закони.<br/><br/>

                    3. Граждански организации: В Европа съществуват множество
                    граждански организации, които се занимават с различни теми -
                    от правата на човека и околната среда до образование и здравеопазване.
                </div>
            </div>
            <div
                id={"sticky-note-two"}
                className={`${styles.sectionContainer} ${styles.bgBlue} ${styles.singleStickyNoteContainer}`}
            >
                <div className={styles.singleStickyNoteSecond}>
                    <div className={styles.stickyNotePinYellow}/>
                    4. Местни участници и обществени консултации: Някои държави
                    са насърчавали участието на гражданите чрез местни обществени
                    консултации и директни диалози с местните власти.<br/><br/>

                    5. Гласуване и референдуми: Гражданите имат възможност да участват
                    в национални и регионални избори, както и в референдуми по важни въпроси.<br/><br/>

                    6. Цивилно общество и социални медии: Гражданите използват
                    социалните медии и други онлайн платформи, за да изразят своите
                    мнения и да участват в обществени дебати.
                    <img
                        src={'/img/europe/informed-woman.png'}
                        className={styles.informedWoman}
                    />
                </div>
            </div>
            <Exam
                id={"exam-europe-module-1"}
                titleImage={blueTitleCircle} background={"blueBackground"}
                className={styles.sectionContainer}
            />
            <StartingModule
                id={"starting-module-2"}
                moduleText={"Модул 2 Европа"}
                moduleBackgroundColor={"yellowBackground"}
                className={`${styles.sectionContainer} ${styles.bgYellow}`}
            />
            <div className={`${styles.contentsModule2Container} ${styles.sectionContainer}`}>
                <div className={styles.contentsModule2Title}>СЪДЪРЖАНИЕ</div>
                <img src={'/img/contents2.png'} className={styles.contentsModule2}/>
            </div>
            <MainTopic
                id={"citizen-awareness"}
                titleImage={grayTitleCircle}
                background={"greyBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Уроци по гражданско образование"}
                downRightImage={'/img/europe/citizenAwareness.png'}
                mainText={"Гражданското образование в Европа е от съществено значение за формирането на активни граждани. В различните европейски страни се провеждат уроци, които насърчават разбирането на демократични принципи, правата на човека, социалната отговорност и устойчивото развитие. Различните страни в Европа имат различни подходи и програми за гражданско образование, като се стремят да развиват активни граждани с разнообразни умения и знания за успешно участие в обществото."}
                className={`${styles.sectionContainer} ${styles.citizenAwarenessContainer}`}
                btnClass={styles.btnCitizenAwareness}
            />
            <div id={"CA-examples"} className={`${styles.citizenAwarenessExamplesContainer} ${styles.sectionContainer}`}>
                <div className={styles.CATitle}>
                    Няколко примера за уроци по гражданско образование:
                </div>
                <div className={styles.CANotes}>
                    <div className={styles.CAFirstRow}>
                        <div className={styles.stickyNoteContainerBlue}>
                            <div className={styles.CAStickyNotePinBlue}/>
                            <div className={styles.CAStickyNoteText}>
                                1. Гласуване и избори: Уроци за изборни системи,
                                политически партии и процесите на гласуване, за
                                да насърчат активното участие в демократичния процес.
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.CAStickyNoteText}>
                                2. Правата на човека: Обучение по отношение на
                                правата и свободите на човека, които са съществен
                                елемент за уважаването на всеки индивид в обществото.
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerBlue}>
                            <div className={styles.CAStickyNotePinBlue}/>
                            <div className={styles.CAStickyNoteText}>
                                3. Екологична осведоменост: Програми за разбиране
                                на важността на опазването на околната среда и
                                приемането на устойчиви жизнени стилове.

                            </div>
                        </div>
                    </div>
                    <div className={styles.CASecondRow}>
                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.CAStickyNoteText}>
                                4. Медийна грамотност: Обучение за разпознаване
                                на фалшиви новини и разбиране на ролята на медиите
                                в обществото.

                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerBlue}>
                            <div className={styles.CAStickyNotePinBlue}/>
                            <div className={styles.CAStickyNoteText}>
                                5. Социално предприемачество: Уроци за стимулиране
                                на предприемчивостта и създаване на социални
                                икономически проекти, насочени към общественото благо.
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.CAStickyNoteText}>
                                6. Междукултурно разбирателство: Образование,
                                насочено към уважението към различията и насърчаването
                                на мирното съжителство сред различни култури.

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainTopic
                id={"youth-engagement"}
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Младежка ангажираност в действие"}
                mainText={"Младежката ангажираност в действие представлява активното включване на младите хора в обществения живот и предприемането на конкретни действия за промяна. Тя насърчава младите хора да се ангажират с проблемите и предизвикателствата в своите общности и да работят за тяхното решаване. Това може да включва доброволчество, социални проекти, политическо ангажиране и други инициативи. "}
                className={`${styles.sectionContainer} ${styles.youthEngagement} ${styles.bgBlue}`}
                btnClass={styles.btnYouthEngagement}
                btnText={"Примери"}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgBlue}`}
                scribbleImg={'/img/scribble.svg'}
                hasActionBtn={false}
            >
                <p>
                    Пример за такава програма е <b>"Еразъм + за младежи"</b>, която
                    предоставя възможности за обучение, обмен на младежи, доброволчество
                    и партньорства между организации в различни страни. Тази
                    програма подкрепя младежта в придобиването на нови умения,
                    развиването на креативност и лидерски умения, както и
                    разбирането на културното разнообразие и общи ценности на Европа.
                </p>
                <img
                    src={"/img/europe/youthEngagement.png"}
                    className={styles.youthEngagementImg}
                />
            </TextWithAction>
            <MainTopic
                titleImage={yellowTitleCircle}
                background={"yellowBackgroundEurope"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Ползи от младежката ангажираност"}
                downRightImage={"/img/europe/youthEngagementBenefits.png"}
                mainText={"Младежката ангажираност в Европа предоставя множество ползи както за младежите, така и за обществото като цяло. Това е активно участие и ангажираност на младежите в различни области и инициативи, които ги включват в обществените процеси и проблеми.\n"}
                className={styles.sectionContainer}
                btnClass={styles.YEBenefitsBtn}
                downRightImageClass={styles.YEImage}
                bottomRightImageContainerClass={styles.YEImageContainer}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgYellow}`}
                scribbleImg={'/img/scribble-yellow.svg'}
                scribbleImgClass={styles.YEScribbleClass}
                hasActionBtn={false}
            >
                <p>
                    <b>1. Развиване на лидерски умения:</b> Участието в младежки организации и проекти позволява на младите хора да развият лидерски умения като комуникация, водене на екип, ръководство и организация.
                </p>
                <p>
                    <b>2. Придобиване на нови знания и умения:</b> Ангажираните младежи имат възможност да придобият нови знания и умения в различни области като образование, технологии, социални науки и др.
                </p>
                <p>
                    <b>3. Повишаване на самочувствието и увереността:</b> Участието в младежките инициативи дава на младежите възможност да се изразят, да споделят своите идеи и да бъдат част от решенията, което може да повиши тяхното самочувствие и увереност.
                </p>
                <p>
                    <b>4. Подкрепа за социалната интеграция:</b> Младежката ангажираност може да помогне за социалната интеграция на младите хора, особено на тези от уязвими групи+++.
                </p>
                <p>
                    <b>5. Създаване на общност и приятелства:</b> Участието в младежките инициативи предоставя възможност за създаване на общност и установяване на нови приятелства, което е важно за психологическото благополучие.
                </p>
                <p>
                    <b>6. Промяна на обществото:</b> Ангажираните младежи могат да бъдат двигателите на промяната в обществото, като се заемат със социални проблеми и активно работят за тяхното решаване.
                </p>
                <p>
                    <b>7. Подкрепа за демократични ценности:</b> Младежката ангажираност насърчава участието в демократични процеси и ценности, като гласуване, свобода на изразяване и уважение към правата на човека.
                </p>
            </TextWithAction>
            <MainTopic
                id={"youth-enagement-opportunities"}
                titleImage={grayTitleCircle}
                background={"greyBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Възможности за младежката ангажираност"}
                downRightImage={'/img/europe/ye-opportunities.png'}
                mainText={"В Европа младежката ангажираност представлява активното участие и участие на младите хора в обществените и гражданските процеси. Това е важен аспект от формирането на активни граждани, които са готови да се включат в решаването на обществени проблеми и да работят за постигане на обществени цели."}
                className={`${styles.sectionContainer} ${styles.YEContainer}`}
                btnClass={styles.btnCitizenAwareness}
                downRightImageClass={styles.YEBottomRightImg}
                bottomRightImageContainerClass={styles.YEImageContainer}
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

                        <div className={styles.stickyNoteContainerGreen}>
                            <div className={styles.CAStickyNotePinGreen}/>
                            <div className={styles.YEStickyNoteText}>
                                Образователни програми за гражданско образование:
                                Различни образователни институции и неправителствени организации
                                предлагат обучения и курсове по гражданско
                                образование, които насърчават младите хора да разбират
                                и участват активно в демократичните процеси и
                                обществените въпроси.
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
                id={"media"}
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Медийна грамотност и разпознаване на фалшиви новини"}
                downRightImage={'/img/europe/media-engagement.png'}
                mainText={"Европейските институции и много неправителствени организации работят за повишаване на медийната грамотност и разпознаването на фалшиви новини сред гражданите. Това включва обучителни програми, кампании за информиране и насърчаване на критичното мислене при използването на информация от различни източници. Някои от начините, по които хората могат да разпознаят фалшиви новини, включват:"}
                className={styles.sectionContainer}
                downRightImageClass={styles.mediaBottomRightImg}
                bottomRightImageContainerClass={styles.YEImageContainer}
            />
            <div
                id={"media-advice"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        <b>1. Проверка на източника:</b> Проверявайте дали новината идва от утвърден и надежден медиен източник. Ако източникът е непознат или неизвестен, може да сте пред измама.
                    </p>
                    <p>
                        <b>2. Проверка на фактите:</b> Проверете фактите и информацията от няколко различни и надеждни източника, преди да я приемете за вярна.
                    </p>
                    <p>
                        <b>3. Внимателно четене:</b> Прочетете цялата статия, а не само заглавието, преди да споделите информация.
                    </p>
                    <p>
                        <b>4. Критично мислене:</b> Задавайте си въпроси като "Каква е целта на тази новина?" или "Има ли някакви скрити интереси?".
                    </p>
                    <p>
                        <b>5. Проверка на снимки и видеа:</b> Проверете дали снимките и видеата, които са придружени с новината, са верни и актуални.
                    </p>
                    <img src={'/img/sparkle.svg'} className={styles.MASparkle}/>
                </div>
            </div>
            <div id={"impact-assessment"} className={`${styles.sectionContainer} ${styles.impactAssessment} ${styles.bgYellow}`}>
                <div className={styles.IATitle}>
                    <span>Оценка на въздействието на младежката активност</span>
                    <img src={"/img/europe/yellowTitleCircle.png"} className={styles.IATitleCircle}/>
                </div>
                <div className={styles.textContent}>
                    <img src={"/img/sparkle-yellow.svg"} className={styles.IAsparkle}/>
                    <p>
                        Младежката активност включва участие в различни инициативи,
                        програми и дейности, които имат за цел да подкрепят развитието
                        и участието на младежта в обществото. Тази активност може да
                        има множество положителни въздействия в различни области като:
                    </p>

                    <ul>
                        <li>Образование и умения;</li>
                        <li>Развитие на личността;</li>
                        <li>Гражданско участие и демокрация;</li>
                        <li>Развитие на социалната мрежа;</li>
                        <li>Интеркултурно разбирателство;</li>
                        <li>Подпомагане на предприемачество.</li>
                    </ul>
                </div>
            </div>
            <MainTopic
                titleImage={yellowTitleCircle}
                background={"yellowBackgroundEurope"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Методи за оценка"}
                downRightImage={"/img/europe/impact-assessment.png"}
                mainText={"За да се оцени въздействието на младежката активност, често се използват методи за изследване, включващи анкети, интервюта, събиране на статистически данни и анализ на резултатите. Оценката на въздействието може да помогне за по-добро разбиране на ползите и ефектите от младежката активност и да служи като основа за усъвършенстване на програми и политики, насочени към подкрепа на младежта в Европа."}
                className={styles.sectionContainer}
                downRightImageClass={styles.IAImage}
                bottomRightImageContainerClass={styles.YEImageContainer}
            />
            <Exam
                id={"exam-europe-module-2"}
                titleImage={yellowTitleCircle} background={"yellowBackground"}
                className={`${styles.sectionContainer} ${styles.bgYellow}`}
                scribbleImg={'/img/scribble-yellow.svg'}
                scribbleImgClass={styles.IAScribble}
                btnClass={styles.IABtnClass}
                titleClass={styles.IATestTitle}
            />
            <StartingModule
                id={"starting-module-3"}
                moduleText={"Модул 3 Европа"}
                moduleBackgroundColor={"grayBackground"}
                className={styles.sectionContainer}
            />
            <div className={`${styles.contentsModule3Container} ${styles.sectionContainer}`}>
                <div className={styles.contentsModule3Title}>СЪДЪРЖАНИЕ</div>
                <img src={'/img/contents-module-3.png'} className={styles.contentsModule2}/>
            </div>
            <MainTopic
                id={"travel-europe"}
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Живот, работа, пътуване в ЕС."}
                downRightImage={peopleWithPlanet}
                mainText={"За младите хора предоставянето на възможности за живот, работа и пътуване в Европа може да бъде изключително обогатяващо. Ето някои аспекти:\n"}
                className={styles.sectionContainer}
                btnClass={styles.TEBtn}
            />
            <div
                id={"travel-advice"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.TEAdviceText}>
                    <p>
                        <b>Образование:</b> Европа притежава много престижни университети
                        и образователни институции. Младите хора имат възможност да получат
                        качествено образование в разнообразни области. Програми като --- предоставят
                        възможности за студентска мобилност и обмен, които
                        позволяват на студентите да прекарат определен период в
                        друга държава-членка на Европейския съюз.
                    </p>
                    <p>
                        <b>Работа и Кариера:</b> Младите специалисти могат да открият
                        разнообразни възможности за работа и кариера в Европа.
                        Професионалната мобилност може да бъде подкрепена чрез
                        различни програми и инициативи, които съдействат за търсенето
                        и намирането на работа в различни страни.
                        Освен това, някои държави предоставят специални визови режими за
                        млади хора, които искат да работят и живеят там.
                    </p>

                    <img src={'/img/sparkle.svg'} className={styles.MASparkle}/>
                </div>
            </div>
            <div
                id={"travel-advice-2"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.TEAdviceText2}>
                    <p>
                        <b> Пътувания и Откриване:</b> Европа е известна с богатата
                        си култура, история и разнообразие. Младите хора имат възможност
                        да пътуват и откриват различни държави и градове, които
                        предлагат уникални и автентични преживявания.
                    </p>
                    <p>
                        <b>Стажове и Програми за Обучение:</b> Много организации
                        и компании предлагат стажове и програми за обучение за млади
                        професионалисти. Това може да бъде отличен начин да
                        се развият уменията и да се запознаете с работната
                        среда в Европа.
                    </p>
                    <p>
                        <b>Стартъпи и Предприемачество:</b> Ако имате идеи и амбиции
                        за създаване на свой бизнес, Европа предлага разнообразни
                        възможности за стартъпи и предприемачество. Много държави
                        предоставят подкрепа и ресурси за млади предприемачи.
                    </p>
                </div>
                <img src={'/img/europe/erasmus-europe.png'} className={styles.TEEurasmusImg}/>
            </div>
            <MainTopic
                id={"active-citizens"}
                titleImage={yellowTitleCircle}
                background={"yellowBackgroundEurope"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Какво означава да си активен европейски гражданин?"}
                downRightImage={"/img/europe/active-citizen.png"}
                mainText={"Да бъдеш активен европейски гражданин означава да участваш активно в обществения живот на Европейския съюз, да използваш своите права и да се ангажираш в дейности, които подпомагат интеграцията, сътрудничеството и разбирателството между държавите-членки. Това може да включва участие в изборите за Европейски парламент, изразяване на своите мнения и идеи, подкрепа на инициативи за обществено благо и дори участие в междукултурни обменни програми."}
                className={`${styles.sectionContainer} ${styles.ACContainer}`}
                btnClass={styles.YEBenefitsBtn}
                downRightImageClass={styles.YEImage}
                bottomRightImageContainerClass={styles.YEImageContainer}
            />
            <div
                id={"active-citizens-info"}
                className={`${styles.bgYellow} ${styles.sectionContainer} ${styles.activeCitizensContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        <b>1. Участие в изборите:</b> Гласуването на европейски избори е важен начин да се изрази твоето мнение и да вземеш участие във формирането на политическото бъдеще на Европейския съюз.
                    </p>
                    <p>
                        <b>2. Подкрепа на обществени каузи:</b> Ангажирането със социални и екологични проблеми, като например борбата с изменението на климата, защита на правата на човека и подкрепа на уязвимите общности.
                    </p>
                    <p>
                        <b>3. Участие в граждански инициативи:</b> Подкрепянето и подписването на петиции и инициативи, които насърчават изменения в законодателството или важни обществени въпроси.
                    </p>
                    <p>
                        <b>4. Участие в обменни програми и проекти:</b> Примери включват участие в студентски обменни програми като Erasmus+, които подпомагат междукултурния обмен и ученето в различни страни.
                    </p>
                    <img src={'/img/scribble-yellow.svg'} className={styles.ACSparkle}/>
                </div>
            </div>
            <TextWithAction
                id={"active-citizens-info-2"}
                className={`${styles.sectionContainer} ${styles.bgYellow} ${styles.activeCitizensContainer2}`}
                scribbleImg={'/img/scribble-yellow.svg'}
                hasActionBtn={false}
                scribbleImgClass={styles.ACScribble}
            >
                <div className={styles.ACTextContainer}>
                    <p>
                        <b>1. Активно следене на политически събития:</b> Информирането за развитието на европейската политика и участието в дискусии за важни въпроси.
                    </p>
                    <p>
                        <b>2. Участие в общностни организации:</b> Присъединяване към неправителствени организации и групи, които работят в области като образование, култура, здравеопазване и други.
                    </p>
                    <p>
                        <b>3. Използване на правата на свободното движение:</b> Използване на възможностите за свободно пътуване, работа и учене в различни държави-членки.
                    </p>
                </div>
                <img
                    src={"/img/europe/active-citizen-2.png"}
                    className={styles.ACImg}
                />
            </TextWithAction>
            <MainTopic
                id={"eu-benefits"}
                titleImage={grayTitleCircle}
                background={"grayBackgroundEurope"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Какво прави ЕС за своите граждани?"}
                downRightImage={"/img/europe/eu-benefits.png"}
                mainText={"Европейският съюз (ЕС) предоставя различни видове подкрепа и инициативи за своите граждани в области като социална защита, образование, здравеопазване, работа, мобилност и други. Ето някои от ключовите начини, по които ЕС работи за своите граждани:\n"}
                className={`${styles.sectionContainer} ${styles.EUBContainer}`}
                btnClass={styles.EUBenefitsBtn}
                downRightImageClass={styles.YEImage}
                bottomRightImageContainerClass={styles.YEImageContainer}
            />
            <div
                id={"eu-benefits-info"}
                className={`${styles.bgGray} ${styles.sectionContainer} ${styles.EUBInfoContainer}`}
            >
                <div className={styles.TEAdviceText}>
                    <p>
                        <b>1. Свобода на движение и право на работа:</b> Европейският съюз
                        подкрепя свободното движение на хора, стоки, услуги
                        и капитали в рамките на своята територия. Гражданите на държавите
                        -членки имат правото да работят, учат и живеят във
                        всяка друга държава-членка без необходимост от работна виза.
                    </p>
                    <p>
                        <b>2. Образование и наука:</b> Програми като Erasmus+ предоставят
                        възможности за образователна и студентска мобилност, които позволяват
                        на студентите и преподавателите да учат и преподават в
                        други държави-членки. ЕС също така подкрепя научни изследвания
                        и иновации чрез различни програми и финансови инструменти.
                    </p>
                    <p>
                        <b>3. Социална защита и права на работниците:</b> ЕС насърчава
                        прилагането на стандарти за работни условия, равни заплати и
                        социални права във всички държави-членки. Това включва законодателство за
                        минимални права на работниците, като отпуски, работно
                        време и забрана за дискриминация.
                    </p>

                    <img src={'/img/scribble-gray.svg'} className={styles.EUBSparkle}/>
                </div>
            </div>
            <div
                id={"eu-benefits-info-2"}
                className={`${styles.bgGray} ${styles.sectionContainer} ${styles.EUBInfoContainer}`}
            >
                <div className={styles.TEAdviceText}>
                    <p>
                        <b>4. Здравеопазване и безопасност на храните:</b> ЕС работи за
                        гарантиране на висок стандарт на здравеопазване и безопасност
                        на храните за своите граждани. Като регулира производството,
                        маркирането и продажбата на храни и лекарства в рамките на ЕС.
                    </p>
                    <p>
                        <b>5. Защита на потребителите:</b> ЕС има законодателство,
                        което защитава правата на потребителите и ги информира
                        за техните права при покупка на стоки и услуги.
                    </p>
                    <p>
                        <b>6. Екологична и климатична политика:</b> ЕС работи за
                        опазване на околната среда и намаляване на влиянието
                        на климатичните промени. Създава законодателство и програми
                        за насърчаване на устойчиви практики в различни области.
                    </p>
                    <p>
                        <b>7. Борба с бедността и социалното изключване:</b> Програми и фондове
                        на ЕС се използват за подпомагане на социално слабите
                        групи и за борба с бедността и социалното изключване.
                    </p>

                    <img src={'/img/scribble-gray.svg'} className={styles.EUBSparkle2}/>
                </div>
            </div>
            <MainTopic
                id={"eu-tools"}
                titleImage={blueTitleCircle}
                background={"blueBackgroundEurope"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Кои са европейските инструменти?"}
                downRightImage={"/img/europe/eu-tools.png"}
                mainText={"В Европа има множество инструменти и институции, които подпомагат сътрудничеството, интеграцията и развитието на Европейския съюз. Някои от основните европейски инструменти включват:\n"}
                className={`${styles.sectionContainer} ${styles.ACContainer} ${styles.bgBlue}`}
                btnClass={styles.EUToolsBtn}
                downRightImageClass={styles.YEImage}
                bottomRightImageContainerClass={styles.YEImageContainer}
            />
            <div
                id={"eu-tools-info"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.EUToolsContainer}`}
            >
                <div className={styles.TEAdviceText}>
                    <p>
                        <b>1. Европейски парламент:</b> Органът на представителната
                        демокрация, който заседава в Страсбург и Брюксел.
                        Участва в законодателния процес и надзирава дейността на
                        други институции.
                    </p>
                    <p>
                        <b>2. Европейска комисия:</b> Органът, отговорен за изпълнението
                        на законодателството на ЕС и представляващ интересите на Съюза
                        на световната сцена.
                    </p>
                    <p>
                        <b>3. Съвет на Европейския съюз:</b> Форум за координация
                        на политиките на държавите-членки и приемане на решения
                        във важни области.
                    </p>
                    <p>
                        <b>4. Съвет на министрите:</b> Членовете на този съвет са
                        министри от правителствата на държавите-членки, които разглеждат
                        конкретни въпроси според тематичната си област, като икономика,
                        външни отношения и др.
                    </p>
                    <p>
                        <b>5. Европейски съвет:</b> Включва главите на държавите-членки
                        и председателят на Европейската комисия. Този орган установява
                        общи насоки и стратегии за развитие на Европейския съюз.
                    </p>
                </div>
            </div>
            <div
                id={"eu-tools-info-2"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.EUToolsContainer}`}
            >
                <div className={styles.TEAdviceText}>
                    <p>
                        <b>6. Европейски централен банк:</b> Отговаря за управлението
                        на еврото и монетарната политика в еврозоната.
                    </p>
                    <p>
                        <b>7. Европейска инвестиционна банка:</b> Подпомага проекти,
                        насочени към инфраструктура, икономическо развитие и
                        иновации в Европейския съюз.
                    </p>
                    <p>
                        <b>8. Европейска инвестиционна служба:</b> Предоставя финансови и
                        технически ресурси за изпълнение на проекти в различни сфери.
                    </p>
                    <p>
                        <b>9. Европейска служба за външна дейност:</b> Координира външната
                        политика на ЕС и представлява Съюза на международната сцена.
                    </p>
                    <p>
                        <b>10. Европейска агенция по околната среда, Европейска агенция по лекарствата и други:</b>
                        Специализирани агенции, които подпомагат регулаторните и научни
                        аспекти в конкретни области.
                    </p>
                </div>
            </div>
            <MainTopic
                id={"erasmus-docs"}
                titleImage={yellowTitleCircle}
                background={"yellowBackgroundEurope"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Документи и публикации Следвайки приоритети на програмата „Еразъм+“."}
                downRightImage={"/img/europe/erasmus-docs.png"}
                mainText={"Програмата Еразъм+ и младежкият сектор на Европейския съюз се фокусират върху подкрепата и развитието на младежите чрез образование, обучение, мобилност и участие в различни дейности. Тук са някои ключови документи и публикации, които можете да изследвате, за да разберете повече за тези области:"}
                className={`${styles.sectionContainer} ${styles.EDContainer}`}
                btnClass={styles.YEBenefitsBtn}
                btnText={"Виж примери"}
                downRightImageClass={styles.YEImage}
                bottomRightImageContainerClass={styles.YEImageContainer}
            />
            <div
                id={"erasmus-docs-info"}
                className={`${styles.bgYellow} ${styles.sectionContainer} ${styles.activeCitizensContainer}`}
            >
                <div className={styles.EDInner}>
                    <p>
                        <b>1. План за младежта (2019-2027):</b> Това е стратегически документ на ЕС, който определя приоритетите и действията за подкрепа на младежите в Европа. Включва разнообразни мерки за подобряване на образованието, заетостта, участието и мобилността на младежите.
                    </p>
                    <p>
                        <b>2. Еразъм+ Портал:</b> Официалният уебсайт на програмата "Еразъм+" съдържа информация за всички аспекти на програмата, включително възможностите за младежите. Тук можете да намерите информация за образователни програми, стипендии, обменни програми и други мобилностни възможности.
                    </p>
                    <p>
                        <b>3. Европейска младежка стратегия (2010-2018):</b> Този документ представя стратегия за интегрирането на младежите в области като образование, заетост, участие и култура. Също предоставя полезни насоки за разбиране на областта на младежкия сектор в Европейския съюз.
                    </p>
                    <img src={'/img/sparkle-yellow.svg'} className={styles.EDSparkle}/>
                </div>
            </div>
            <div
                id={"erasmus-docs-info-2"}
                className={`${styles.bgYellow} ${styles.sectionContainer} ${styles.EDInfoContainer}`}
            >
                <div className={styles.EDInner2}>
                    <p>
                        <b>4. Доклади и анализи на ЕС за младежката политика:</b> Европейската комисия и други
                        органи на ЕС редовно публикуват доклади, анализи и статистически
                        данни за различни аспекти на младежката политика и младежката заетост.
                    </p>
                    <p>
                        <b>5. Директиви и законодателство на ЕС:</b> Официалният уебсайт
                        на програмата "Еразъм+" съдържа информация за всички аспекти
                        на програмата, включително възможностите за младежите. Тук можете да
                        намерите информация за образователни програми, стипендии, обменни
                        програми и други мобилностни възможности.
                    </p>
                    <p>
                        <b>6. Семинари, събития и обучения на младежкия сектор:</b>
                        Този документ представя стратегия за интегрирането на младежите в
                        области като образование, заетост, участие и култура.
                        Също предоставя полезни насоки за разбиране на областта
                        на младежкия сектор в Европейския съюз.
                    </p>
                    <p>
                        <b>С тези ресурси ще можете да се запознаете с приоритетите на програмата "Еразъм+" и младежкия сектор на ЕС, както и с възможностите, които се предоставят на младите хора.</b>
                    </p>
                    <img src={'/img/sparkle-yellow.svg'} className={styles.EDSparkle2}/>
                </div>
                <img src={'/img/europe/erasmus-europe-yellow.png'} className={styles.EDErasmusImg}/>
            </div>
            <Exam
                id={"exam-europe-module-3"}
                titleImage={yellowTitleCircle} background={"yellowBackground"}
                className={`${styles.sectionContainer} ${styles.bgYellow}`}
                scribbleImg={'/img/scribble-yellow.svg'}
                scribbleImgClass={styles.IAScribble}
                btnClass={styles.IABtnClass}
                titleClass={styles.IATestTitle}
            />
            <div id={"extra-resources"} className={`${styles.sectionContainer} ${styles.bgYellow}`}>
                <img src={'/img/europe/extra-resource.png'} className={styles.ERImg}/>
            </div>
        </div>
    );
};

export default Europe;