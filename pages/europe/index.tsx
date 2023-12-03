"use client";
import "../../app/globals.scss";
import React, {useEffect, useState} from "react";
import Navbar from "@/components/navbar";
import StartingModule from "@/components/startingModule";
import ContentReview from "@/components/contentReview";
import infoContent from "@/public/img/bulgaria/infoContent.png";
import MainTopic from "@/components/mainTopic";
import yellowTitleCircle from "../../public/img/europe/yellowTitleCircle.png";
import blueTitleCircle from "../../public/img/europe/blueTitleCircle.png";
import peopleWithPlanet from "../../public/img/europe/Group.png";
import europeTravel from "../../public/img/europe/europe-travel.png";
import girls from "../../public/img/europe/girls.png";
import magnifier from "../../public/img/europe/magnifier.png";
import grayTitleCircle from "../../public/img/bulgaria/grayTitleCircle.png";
import Exam from "@/components/exam";
import styles from './europe.module.scss';
import {Table} from '@/components/table';
import {TextWithAction} from "@/components/textWithAction";
import OpenAI from 'openai';
import Image from "next/image";
import {getTexts} from "@/contexts/LanguageContext";
import parse from "html-react-parser";

const Europe = () => {
    const [theme, setTheme] = useState("dark");
    const {texts: {Europe: texts}, locale} = getTexts();
    const [ytLink, setYtLink] = useState<any>();
    const [downloadLinkOne, setDownloadLinkOne] = useState<any>()
    const [downloadLinkTwo, setDownloadLinkTwo] = useState<any>()
    const [downloadLinkThree, setDownloadLinkThree] = useState<any>()

    useEffect(() => {
        switch (locale) {
            case 'bg': {
                setYtLink(
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/Z6cHHQ2wwrk"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                );
                setDownloadLinkOne("https://drive.google.com/uc?export=download&id=14HBE2aNX0dv-kjRe_cOX2z2eBJMlBB62")
                setDownloadLinkTwo("https://drive.google.com/uc?export=download&id=1c9fn7S1CInRxCRRmMcjsHErmcjGUO25h")
                setDownloadLinkThree("https://drive.google.com/uc?export=download&id=1OxIsuciwo-QH2RUb21GWeTxon4CpSzRx")
                return;
            }
            case 'eng': {
                setYtLink(
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/y4hGxSYpFT0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                )
                setDownloadLinkOne("https://drive.google.com/uc?export=download&id=1vMh9UcewZtJIjndDKEeT941j-RdrPP2z")
                setDownloadLinkTwo("https://drive.google.com/uc?export=download&id=1tbVndkrpucUWEI3jLTg-X2fGNosE1IvH")
                setDownloadLinkThree("https://drive.google.com/uc?export=download&id=1JCriZEfE4HFtL0nOFFwnEECwoHjF8nUl")
                return
            }
            case 'slo': {
                setYtLink(
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/AmRul2NW1us"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                )
                setDownloadLinkOne("https://drive.google.com/uc?export=download&id=1ErkEN2eCOmEpzY29-NvhnklHe0p3vyaw")
                setDownloadLinkTwo("https://drive.google.com/uc?export=download&id=1EqITPThFwOr3egzYoFUNUWYy5O6CpVJh")
                setDownloadLinkThree("https://drive.google.com/uc?export=download&id=1CfjNWeCPfGbUZmarVfzPyYrYoiqVNa5Y")
                return;
            }
        }
    }, [locale]);



    return (
        <div className={"app-container"}>
            <StartingModule
                moduleText={texts.M1_title}
                moduleBackgroundColor={"blueBackground"}
                className={styles.sectionContainer}
                commaImage={'/img/europe/quote_darkblue.svg'}
            />
            <div className={`${styles.quotesContainer} ${styles.sectionContainer}`}>
                <div className={`${styles.quotesRow} mb-20`}>
                    <div className={styles.quoteMerkel}>
                        <div className={styles.doubleQuoteMerkel}>
                            <img src={'/img/europe/quote_blue.svg'} className={styles.firstQuote}/>
                            <img src={'/img/europe/quote_blue.svg'} className={styles.secondQuote}/>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.person}>{texts.M1_topic1_quotes[0]}</p>
                            <p className={styles.quoteText}>
                                {texts.M1_topic1_quotes[1]}
                            </p>
                        </div>
                    </div>

                    <div className={styles.quoteKenedy}>
                        <div className={styles.doubleQuoteKenedy}>
                            <img src={'/img/europe/quote_gray.svg'} className={styles.firstQuote}/>
                            <img src={'/img/europe/quote_gray.svg'} className={styles.secondQuote}/>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.person}>{texts.M1_topic1_quotes[2]}</p>
                            <p className={styles.quoteText}>
                                {texts.M1_topic1_quotes[3]}
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
                            <p className={styles.person}>{texts.M1_topic1_quotes[4]}</p>
                            <p className={styles.quoteText}>
                                {texts.M1_topic1_quotes[5]}
                            </p>
                        </div>
                    </div>

                    <div className={styles.quoteBerbatov}>
                        <div className={styles.doubleQuoteBerbatov}>
                            <img src={'/img/europe/quote_darkblue.svg'} className={styles.firstQuote}/>
                            <img src={'/img/europe/quote_darkblue.svg'} className={styles.secondQuote}/>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.person}>{texts.M1_topic1_quotes[6]}</p>
                            <p className={styles.quoteText}>
                                {texts.M1_topic1_quotes[7]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContentReview
                heading={texts.M1_content_heading}
                contentImage={`./img/infoContent-${locale}.png`}
                background={"grayBackground"}
                className={styles.sectionContainer}
            />
            <div
                id={"educational-video-europe"}
                className={`grayBackground ${styles.sectionContainer}`}
            >
                <p className={styles.textForVideo}>{texts.textForVideo}</p>

                <div className={styles.videoContainer}>
                    {ytLink}
                </div>
            </div>
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M1_topic2}
                mainText={texts.M1_topic2_text}
                className={styles.sectionContainer}
                downRightImage={'/img/europe/politics.png'}
                downRightImageClass={styles.politicsImg}
                chatGptMessage={texts.chatGptQuestion1}
            />
            <Table
                tableImg={`/img/europe/politicsTable-${locale}.png`}
                className={styles.sectionContainer}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgBlue} ${styles.activeCitizensContainer2}`}
                scribbleImg={'/img/scribble.svg'}
                hasActionBtn={true}
                actionBtnTxt={texts.M1_topic4_button}
            >
                {parse(texts.M1_topic4_text)}
            </TextWithAction>
            <div className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.countriesListContainer}`}
                 id={"countries-list"}>
                <div className={styles.countriesListTitle}>
                    {texts.M1_topic5}
                    <img src={'/img/sparkle.svg'} className={styles.sparkle}/>
                </div>
                <div className={styles.countriesList}>
                    <div className={styles.coutriesLeftList}>
                        {parse(texts.M1_topic5_texts[0])}
                    </div>
                    <div className={styles.coutriesRightList}>
                        {parse(texts.M1_topic5_texts[1])}
                    </div>
                </div>
            </div>
            <MainTopic
                titleImage={yellowTitleCircle}
                background={"yellowBackgroundEurope"}
                hasButton={false}
                hasTitleImage={true}
                titleText={texts.M1_topic6}
                downRightImage={peopleWithPlanet}
                mainText={texts.M1_topic6_text}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={grayTitleCircle}
                background={"greyBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M1_topic7}
                downRightImage={girls}
                mainText={texts.M1_topic7_text}
                className={`${styles.sectionContainer} ${styles.bgGray} ${styles.institutionsContainer}`}
                chatGptMessage={texts.chatGptQuestion2}
            />
            <div id={"CA-examples"}
                 className={`${styles.citizenAwarenessExamplesContainer} ${styles.sectionContainer}`}>
                <div className={styles.CANotes}>
                    <div className={styles.CAFirstRow}>
                        <div className={styles.stickyNoteContainerBlue}>
                            <div className={styles.CAStickyNotePinBlue}/>
                            <div className={styles.CAStickyNoteText}>
                                {texts.M1_topic8_texts[0]}
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.CAStickyNoteText}>
                                {texts.M1_topic8_texts[1]}
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerBlue}>
                            <div className={styles.CAStickyNotePinBlue}/>
                            <div className={styles.CAStickyNoteText}>
                                {texts.M1_topic8_texts[2]}
                            </div>
                        </div>
                    </div>
                    <div className={styles.CASecondRow}>
                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.CAStickyNoteText}>
                                {texts.M1_topic8_texts[3]}
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.CAStickyNoteText}>
                                {texts.M1_topic8_texts[4]}
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
                titleText={texts.M1_topic9}
                downRightImage={peopleWithPlanet}
                mainText={texts.M1_topic9_text}
                className={styles.sectionContainer}
            />
            <div
                id={"sticky-note-one"}
                className={`${styles.sectionContainer} ${styles.bgBlue} ${styles.singleStickyNoteContainer}`}
            >
                <div className={styles.singleStickyNote}>
                    <div className={styles.stickyNotePinBlue}/>
                    {parse(texts.M1_topic10_texts[0])}
                </div>
            </div>
            <div
                id={"sticky-note-two"}
                className={`${styles.sectionContainer} ${styles.bgBlue} ${styles.singleStickyNoteContainer}`}
            >
                <div className={styles.singleStickyNoteSecond}>
                    <div className={styles.stickyNotePinYellow}/>
                    {parse(texts.M1_topic10_texts[1])}
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
                downloadLink={downloadLinkOne}
            />
            <StartingModule
                id={"starting-module-2"}
                moduleText={texts.M2_title}
                moduleBackgroundColor={"yellowBackground"}
                className={`${styles.sectionContainer} ${styles.bgYellow}`}
                commaImage={'./img/yellowComma.png'}
            />
            <div className={`${styles.contentsModule2Container} ${styles.sectionContainer}`}>
                <div className={styles.contentsModule2Title}>{texts.Content_heading}</div>
                <img src={`./img/contentReview2-${locale}.png`} className={styles.contentsModule2}/>
            </div>
            <MainTopic
                id={"citizen-awareness"}
                titleImage={grayTitleCircle}
                background={"greyBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M2_topic2}
                downRightImage={'/img/europe/citizenAwareness.png'}
                mainText={texts.M2_topic2_text}
                className={`${styles.sectionContainer} ${styles.citizenAwarenessContainer}`}
                btnClass={styles.btnCitizenAwareness}
                chatGptMessage={texts.chatGptQuestion3}
            />
            <div id={"CA-examples"}
                 className={`${styles.citizenAwarenessExamplesContainer} ${styles.sectionContainer}`}>
                <div className={styles.CATitle}>

                </div>
                <div className={styles.CANotes}>
                    <div className={styles.CAFirstRow}>
                        <div className={styles.stickyNoteContainerBlue}>
                            <div className={styles.CAStickyNotePinBlue}/>
                            <div className={styles.CAStickyNoteText}>
                                {parse(texts.M2_topic3_texts[0])}
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.CAStickyNoteText}>
                                {parse(texts.M2_topic3_texts[1])}
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerBlue}>
                            <div className={styles.CAStickyNotePinBlue}/>
                            <div className={styles.CAStickyNoteText}>
                                {parse(texts.M2_topic3_texts[2])}
                            </div>
                        </div>
                    </div>
                    <div className={styles.CASecondRow}>
                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.CAStickyNoteText}>
                                {parse(texts.M2_topic3_texts[3])}
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerBlue}>
                            <div className={styles.CAStickyNotePinBlue}/>
                            <div className={styles.CAStickyNoteText}>
                                {parse(texts.M2_topic3_texts[4])}
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.CAStickyNoteText}>
                                {parse(texts.M2_topic3_texts[5])}
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
                titleText={texts.M2_topic4}
                mainText={texts.M2_topic4_text}
                className={`${styles.sectionContainer} ${styles.youthEngagement} ${styles.bgBlue}`}
                btnClass={styles.btnYouthEngagement}
                btnText={texts.M2_topic4_button}
                chatGptMessage={texts.chatGptQuestion4}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgBlue} ${styles.activeCitizensContainer2}`}
                scribbleImg={'/img/scribble.svg'}
                hasActionBtn={false}
            >
                {parse(texts.M2_topic5_text)}
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
                titleText={texts.M2_topic6}
                downRightImage={"/img/europe/youthEngagementBenefits.png"}
                mainText={texts.M2_topic6_text}
                className={styles.sectionContainer}
                btnClass={styles.YEBenefitsBtn}
                downRightImageClass={styles.YEImage}
                bottomRightImageContainerClass={styles.YEImageContainer}
                chatGptMessage={texts.chatGptQuestion5}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgYellow} ${styles.activeCitizensContainer2}`}
                scribbleImg={'/img/scribble-yellow.svg'}
                scribbleImgClass={styles.YEScribbleClass}
                hasActionBtn={false}
            >
                {parse(texts.M2_topic7_text)}
            </TextWithAction>
            <MainTopic
                id={"youth-enagement-opportunities"}
                titleImage={grayTitleCircle}
                background={"greyBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M2_topic8}
                downRightImage={'/img/europe/ye-opportunities.png'}
                mainText={texts.M2_topic8_text}
                className={`${styles.sectionContainer} ${styles.YEContainer}`}
                btnClass={styles.btnCitizenAwareness}
                downRightImageClass={styles.YEBottomRightImg}
                bottomRightImageContainerClass={styles.YEImageContainer}
                chatGptMessage={texts.chatGptQuestion6}
            />
            <div id={"YE-examples"}
                 className={`${styles.citizenAwarenessExamplesContainer} ${styles.sectionContainer}`}>
                <div className={styles.CANotes}>
                    <div className={styles.CAFirstRow}>
                        <div className={styles.stickyNoteContainerGreen}>
                            <div className={styles.CAStickyNotePinGreen}/>
                            <div className={styles.YEStickyNoteText}>
                                {parse(texts.M2_topic9_texts[0])}
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.YEStickyNoteText}>
                                {parse(texts.M2_topic9_texts[1])}
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerGreen}>
                            <div className={styles.CAStickyNotePinGreen}/>
                            <div className={styles.YEStickyNoteText}>
                                {parse(texts.M2_topic9_texts[2])}
                            </div>
                        </div>
                    </div>
                    <div className={styles.CASecondRow}>
                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.YEStickyNoteText}>
                                {parse(texts.M2_topic9_texts[3])}
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerGreen}>
                            <div className={styles.CAStickyNotePinGreen}/>
                            <div className={styles.YEStickyNoteText}>
                                {parse(texts.M2_topic9_texts[4])}
                            </div>
                        </div>

                        <div className={styles.stickyNoteContainerYellow}>
                            <div className={styles.CAStickyNotePinYellow}/>
                            <div className={styles.YEStickyNoteText}>
                                {parse(texts.M2_topic9_texts[5])}
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
                titleText={texts.M2_topic10}
                downRightImage={'/img/europe/media-engagement.png'}
                mainText={texts.M2_topic10_text}
                className={styles.sectionContainer}
                downRightImageClass={styles.mediaBottomRightImg}
                bottomRightImageContainerClass={styles.YEImageContainer}
            />
            <div
                id={"media-advice"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    {parse(texts.M2_topic11_text)}
                    <img src={'/img/sparkle.svg'} className={styles.MASparkle}/>
                </div>
            </div>
            <div id={"impact-assessment"}
                 className={`${styles.sectionContainer} ${styles.impactAssessment} ${styles.bgYellow}`}>
                <div className={styles.IATitle}>
                    <span>{texts.M2_topic12}</span>
                    <img src={"/img/europe/yellowTitleCircle.png"} className={styles.IATitleCircle}/>
                </div>
                <div className={styles.textContent}>
                    <img src={"/img/sparkle-yellow.svg"} className={styles.IAsparkle}/>
                    {parse(texts.M2_topic12_text)}
                </div>
            </div>
            <MainTopic
                titleImage={yellowTitleCircle}
                background={"yellowBackgroundEurope"}
                hasButton={false}
                hasTitleImage={true}
                titleText={texts.M2_topic13}
                downRightImage={"/img/europe/impact-assessment.png"}
                mainText={texts.M2_topic13_text}
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
                downloadLink={downloadLinkTwo}
            />
            <StartingModule
                id={"starting-module-3"}
                moduleText={texts.M3_title}
                moduleBackgroundColor={"grayBackground"}
                className={styles.sectionContainer}
                commaImage={'/img/grayComma.svg'}
            />
            <div className={`${styles.contentsModule3Container} ${styles.sectionContainer}`}>
                <div className={styles.contentsModule3Title}>{texts.Content_heading}</div>
                <img src={`./img/contentReview3-${locale}.png`} className={styles.contentsModule2}/>
            </div>
            <MainTopic
                id={"travel-europe"}
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M3_topic1}
                downRightImage={europeTravel}
                mainText={texts.M3_topic1_text}
                className={styles.sectionContainer}
                btnClass={styles.TEBtn}
                chatGptMessage={texts.chatGptQuestion7}
            />
            <div
                id={"travel-advice"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.TEAdviceText}>
                    {parse(texts.M3_topic2_text)}
                    <img src={'/img/sparkle.svg'} className={styles.MASparkle}/>
                </div>
            </div>
            <div
                id={"travel-advice-2"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.TEAdviceText2}>
                    {parse(texts.M3_topic3_text)}
                </div>
                <img src={'/img/europe/erasmus-europe.png'} className={styles.TEEurasmusImg}/>
            </div>
            <MainTopic
                id={"active-citizens"}
                titleImage={yellowTitleCircle}
                background={"yellowBackgroundEurope"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M3_topic4}
                downRightImage={"/img/europe/active-citizen.png"}
                mainText={texts.M3_topic4_text}
                className={`${styles.sectionContainer} ${styles.ACContainer}`}
                btnClass={styles.YEBenefitsBtn}
                downRightImageClass={styles.YEImage}
                bottomRightImageContainerClass={styles.YEImageContainer}
                chatGptMessage={texts.chatGptQuestion8}
            />
            <div
                id={"active-citizens-info"}
                className={`${styles.bgYellow} ${styles.sectionContainer} ${styles.activeCitizensContainer}`}
            >
                <div className={styles.MAInner}>
                    {parse(texts.M3_topic5_texts[0])}
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
                    {parse(texts.M3_topic5_texts[1])}
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
                titleText={texts.M3_topic6}
                downRightImage={"/img/europe/eu-benefits.png"}
                mainText={texts.M3_topic6_text}
                className={`${styles.sectionContainer} ${styles.EUBContainer}`}
                btnClass={styles.EUBenefitsBtn}
                downRightImageClass={styles.YEImage}
                bottomRightImageContainerClass={styles.YEImageContainer}
                chatGptMessage={texts.chatGptQuestion9}
            />
            <div
                id={"eu-benefits-info"}
                className={`${styles.bgGray} ${styles.sectionContainer} ${styles.EUBInfoContainer}`}
            >
                <div className={styles.TEAdviceText}>
                    {parse(texts.M3_topic7_texts[0])}
                    <img src={'/img/scribble-gray.svg'} className={styles.EUBSparkle}/>
                </div>
            </div>
            <div
                id={"eu-benefits-info-2"}
                className={`${styles.bgGray} ${styles.sectionContainer} ${styles.EUBInfoContainer}`}
            >
                <div className={styles.TEAdviceText}>
                    {parse(texts.M3_topic7_texts[1])}
                    <img src={'/img/scribble-gray.svg'} className={styles.EUBSparkle2}/>
                </div>
            </div>
            <MainTopic
                id={"eu-tools"}
                titleImage={blueTitleCircle}
                background={"blueBackgroundEurope"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M3_topic8}
                downRightImage={"/img/europe/eu-tools.png"}
                mainText={texts.M3_topic8_text}
                className={`${styles.sectionContainer} ${styles.ACContainer} ${styles.bgBlue}`}
                btnClass={styles.EUToolsBtn}
                downRightImageClass={styles.YEImage}
                bottomRightImageContainerClass={styles.YEImageContainer}
                chatGptMessage={texts.chatGptQuestion10}
            />
            <div
                id={"eu-tools-info"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.EUToolsContainer}`}
            >
                <div className={styles.TEAdviceText}>
                    {parse(texts.M3_topic9_texts[0])}
                </div>
            </div>
            <div
                id={"eu-tools-info-2"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.EUToolsContainer}`}
            >
                <div className={styles.TEAdviceText}>
                    {parse(texts.M3_topic9_texts[1])}
                </div>
            </div>
            <MainTopic
                id={"erasmus-docs"}
                titleImage={yellowTitleCircle}
                background={"yellowBackgroundEurope"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M3_topic10}
                downRightImage={"/img/europe/erasmus-docs.png"}
                mainText={texts.M3_topic10_text}
                className={`${styles.sectionContainer} ${styles.EDContainer}`}
                btnClass={styles.YEBenefitsBtn}
                downRightImageClass={styles.YEImage}
                bottomRightImageContainerClass={styles.YEImageContainer}
                chatGptMessage={texts.chatGptQuestion11}
            />
            <div
                id={"erasmus-docs-info"}
                className={`${styles.bgYellow} ${styles.sectionContainer} ${styles.activeCitizensContainer}`}
            >
                <div className={styles.EDInner}>
                    {parse(texts.M3_topic11_texts[0])}
                    <img src={'/img/sparkle-yellow.svg'} className={styles.EDSparkle}/>
                </div>
            </div>
            <div
                id={"erasmus-docs-info-2"}
                className={`${styles.bgYellow} ${styles.sectionContainer} ${styles.EDInfoContainer}`}
            >
                <div className={styles.EDInner2}>
                    {parse(texts.M3_topic11_texts[1])}
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
                downloadLink={downloadLinkThree}
            />
        </div>
    );
};

export default Europe;