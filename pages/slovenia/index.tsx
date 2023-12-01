"use client";
import "../../app/globals.scss";
import React, {useEffect, useState} from "react";
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
import {Table} from "@/components/table";
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
import {getTexts} from "@/contexts/LanguageContext";
import parse from "html-react-parser";
import {text} from "stream/consumers";

const Slovenia = () => {
    const {texts: {Slovenia: texts}, locale} = getTexts();
    const [ytLink, setYtLink] = useState<any>()
    const [downloadLinkOne, setDownloadLinkOne] = useState<any>()
    const [downloadLinkTwo, setDownloadLinkTwo] = useState<any>()
    const [downloadLinkThree, setDownloadLinkThree] = useState<any>()

    useEffect(() => {
        switch (locale) {
            case 'bg': {
                setYtLink(
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/dhOhiluSH2w"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                );
                setDownloadLinkOne("https://drive.google.com/uc?export=download&id=1I-XRFJlMx-We6hhHkR6JhKQ41g7pMN4j");
                setDownloadLinkTwo("https://drive.google.com/uc?export=download&id=1OJD8nyLQDLKY7EoW56JT4JiVyio4SMhX");
                setDownloadLinkThree("https://drive.google.com/uc?export=download&id=1kh60v2i6Q0WGj_H2HTT3C6fZ624ocUgI");
                return;
            }
            case 'eng': {
                setYtLink(
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/O-34AfFRErk"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                );
                setDownloadLinkOne("https://drive.google.com/uc?export=download&id=1LYvY5cTsDPhB58_E_mk4BC_BX60dHaQR");
                setDownloadLinkTwo("https://drive.google.com/uc?export=download&id=1qafJQn30Ruell8GAQPQQoqoNezRBufse");
                setDownloadLinkThree("https://drive.google.com/uc?export=download&id=19jyJENojKxtkJpnPOifsDOpYY2GaKucj");
                return
            }
            case 'slo': {
                setYtLink(
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/FEcjIgcJJU8"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                );
                setDownloadLinkOne("https://drive.google.com/uc?export=download&id=17HjSFpV--ksUmCQyx2EYRdbe0IXHD-9P");
                setDownloadLinkTwo("https://drive.google.com/uc?export=download&id=1XGKgBQdcTvVZ93goGXqheetmIMrYhMVm");
                setDownloadLinkThree("https://drive.google.com/uc?export=download&id=1XGKgBQdcTvVZ93goGXqheetmIMrYhMVm");
                return;
            }
        }
    }, [locale]);

    return (
        <div className={"app-container"}>
            <StartingModule
                moduleText={texts.M1_title}
                moduleBackgroundColor={styles.bgRed}
                className={styles.sectionContainer}
                commaImage={"./img/redComma.svg"}
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
                heading={texts.Content_heading}
                contentImage={`./img/infoContent-${locale}.png`} background={styles.redText}
                className={styles.sectionContainer}
            />
            <div
                id={"educational-video-slovenia"}
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
                titleText={texts.M1_topic1}
                mainText={texts.M1_topic1_text}
                className={styles.sectionContainer}
                downRightImage={workingPeople}
                chatGptMessage={texts.chatGptQuestion1}

            />
            <Table
                tableImg={`/img/slovenia/slovTable-${locale}.png`}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={redTitleCircle}
                background={styles.bgRed}
                hasButton={false}
                hasTitleImage={true}
                titleText={texts.M1_topic2}
                downRightImage={sloveniaCommunity}
                mainText={texts.M1_topic2_text}
                className={styles.sectionContainer}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgRed}`}
                scribbleImg={'/img/redScribble.png'}
                hasActionBtn={false}
            >
                {parse(texts.M1_topic3_text)}
            </TextWithAction>
            <SixInfoStickyNotes
                text1={parse(texts.M1_topic3_texts[0]) as string}
                text2={parse(texts.M1_topic3_texts[1]) as string}
                text3={parse(texts.M1_topic3_texts[2]) as string}
                text4={parse(texts.M1_topic3_texts[3]) as string}
                text5={parse(texts.M1_topic3_texts[4]) as string}
                text6={parse(texts.M1_topic3_texts[5]) as string}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={grayTitleCircle}
                background={"greyBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleText={texts.M1_topic4}
                downRightImage={peopleWithPlanet}
                mainText={texts.M1_topic4_text}
                className={styles.sectionContainer}
            />
            <SixInfoStickyNotes
                text1={parse(texts.M1_topic5_texts[0]) as string}
                text2={parse(texts.M1_topic5_texts[1]) as string}
                text3={parse(texts.M1_topic5_texts[2]) as string}
                text4={parse(texts.M1_topic5_texts[3]) as string}
                text5={parse(texts.M1_topic5_texts[4]) as string}
                text6={parse(texts.M1_topic5_texts[5]) as string}
                className={styles.sectionContainer}
            />
            <div id={"three-sticky"} className={`${styles.sectionContainer} greyBackground}`}>
                <div className={styles.titleContainer}>
                    <Image src={grayTitleCircle} alt={"commaImg"} className="mt-6"/>
                    <span className={`${styles.titleText}`}>
                        {texts.M1_topic5_button}
                    </span>
                </div>

                <div className={"flex flex-row justify-center"}>
                    <StickyNote noteImageSrc={blueSticky} circleImageSrc={blueTitleCircle}
                                noteText={parse(texts.M1_topic5_texts[6]) as string}/>
                    <StickyNote noteImageSrc={yellowSticky} circleImageSrc={yellowElipse}
                                noteText={parse(texts.M1_topic5_texts[7]) as string}/>
                    <StickyNote noteImageSrc={blueSticky} circleImageSrc={blueTitleCircle}
                                noteText={parse(texts.M1_topic5_texts[8]) as string}/>
                </div>

            </div>

            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M1_topic6}
                downRightImage={peopleWithPlanet}
                mainText={texts.M1_topic6_text}
                className={styles.sectionContainer}
                chatGptMessage={texts.chatGptQuestion2}
            />

            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgBlue}`}
                scribbleImg={'/img/Scribble.svg'}
                hasActionBtn={false}
                actionBtnTxt={texts.M1_topic7_button}
            >
                {parse(texts.M1_topic7_text)}
            </TextWithAction>

            <Exam
                titleImage={blueTitleCircle} background={"blueBackground"}
                className={styles.sectionContainer}
                downloadLink={downloadLinkOne}
            />

            <StartingModule
                moduleText={texts.M2_title}
                moduleBackgroundColor={styles.bgRed}
                className={styles.sectionContainer}
                commaImage={"./img/redComma.svg"}
            />

            <ContentReview
                heading={texts.Content_heading}
                contentImage={`./img/contentReview2-${locale}.png`} background={styles.bgRed}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M2_topic3}
                downRightImage={citizenEducation}
                mainText={texts.M2_topic3_text}
                className={styles.sectionContainer}
                chatGptMessage={texts.chatGptQuestion3}
            />

            <div className={styles.sectionContainer}>
                <p className={styles.title}>
                    {texts.M2_topic4}
                </p>
                <SixInfoStickyNotes
                    text1={parse(texts.M2_topic4_texts[0]) as string}
                    text2={parse(texts.M2_topic4_texts[1]) as string}
                    text3={parse(texts.M2_topic4_texts[2]) as string}
                    text4={parse(texts.M2_topic4_texts[3]) as string}
                    text5={parse(texts.M2_topic4_texts[4]) as string}
                    text6={parse(texts.M2_topic4_texts[5]) as string}
                    className={styles.sectionContainer}
                />
            </div>
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleText={texts.M2_topic5}
                downRightImage={citizenEducation}
                mainText={texts.M2_topic5_text}
                className={styles.sectionContainer}
            />
            <FiveInfoStickyNotes
                text1={parse(texts.M2_topic6_texts[0]) as string}
                text2={parse(texts.M2_topic6_texts[1]) as string}
                text3={parse(texts.M2_topic6_texts[2]) as string}
                text4={parse(texts.M2_topic6_texts[3]) as string}
                text5={parse(texts.M2_topic6_texts[4]) as string}
                className={styles.sectionContainer}
            />
            <MainTopic
                titleImage={redTitleCircle}
                background={"redBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M2_topic7}
                downRightImage={citizenEducation}
                mainText={texts.M2_topic7_text}
                className={styles.sectionContainer}
                chatGptMessage={texts.chatGptQuestion4}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgRed}`}
                scribbleImg={'/img/redScribble.png'}
                hasActionBtn={false}
                actionBtnTxt={texts.M2_topic8_button}
            >
                {parse(texts.M2_topic8_text)}
            </TextWithAction>
            <MainTopic
                titleImage={grayTitleCircle}
                background={"greyBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M2_topic9}
                downRightImage={celebrating}
                mainText={texts.M2_topic9_text}
                className={styles.sectionContainer}
                chatGptMessage={texts.chatGptQuestion5}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.bgRed}`}
                scribbleImg={'/img/scribble.svg'}
                hasActionBtn={false}
            >
                {parse(texts.M2_topic9_texts2[0])}
            </TextWithAction>
            <div
                id={"european-citizen-text"}
                className={`${styles.bgRed} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}>
                <div className={styles.MAInner}>
                    {parse(texts.M2_topic9_texts2[1])}
                    <img src={'/img/redScribble.png'} className={styles.MAScribble}/>
                </div>
            </div>
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M2_topic10}
                downRightImage={celebrating}
                mainText={texts.M2_topic10_text}
                className={styles.sectionContainer}
                chatGptMessage={texts.chatGptQuestion6}
            />
            <div
                id={"media-advice"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    {parse(texts.M2_topic11_texts[0])}
                    <img src={'/img/sparkle.svg'} className={styles.MASparkle}/>
                </div>
            </div>

            <div
                id={"media-advice"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    {parse(texts.M2_topic11_texts[1])}
                    <img src={'/img/sparkle.svg'} className={styles.MASparkleLeft}/>
                </div>
            </div>
            <MainTopic
                titleImage={redTitleCircle}
                background={"redBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M2_topic12}
                downRightImage={celebrating}
                mainText={texts.M2_topic12_text}
                className={styles.sectionContainer}
                chatGptMessage={texts.chatGptQuestion7}
            />
            <div id={"list"} className={`${styles.sectionContainer}   ${styles.centeredContent} ${"redBackground"}`}>
                <img src={'img/greyScribble.svg'} className={`${styles.topLeftScribble2}`}/>
                <div className={styles.textContent2}>
                    {parse(texts.M2_topic13_text)}
                </div>
            </div>

            <Exam titleImage={redTitleCircle}
                  background={"redBackground"} className={styles.sectionContainer}
                  downloadLink={downloadLinkTwo}
                  btnClass={styles.redText}
                  scribbleImg={'/img/whiteScribble.svg'}
                  scribbleImgClass={styles.scribbleSvg}
            />
            <StartingModule
                moduleBackgroundColor={styles.whiteBackground}
                moduleText={texts.M3_title}
                className={styles.sectionContainer}
                commaImage={'/img/grayComma.svg'}
            />
            <ContentReview heading={texts.Content_heading} contentImage={`./img/contentReview3-${locale}.png`}
                           background={styles.whiteBackground} className={styles.sectionContainer}/>
            <div id={"impact-assessment"}
                 className={`${styles.sectionContainer} ${styles.impactAssessment} ${styles.bgBlue}`}>
                <div className={styles.IATitle}>
                    <span>{texts.M3_topic3}</span>
                    <img src={"/img/europe/blueTitleCircle.png"} className={styles.IATitleCircle}/>
                </div>
                <div className={styles.textContent}>
                    <img src={"/img/sparkle.svg"} className={styles.IAsparkle}/>
                    {parse(texts.M3_topic3_texts[0])}
                </div>
            </div>
            <div
                id={"media-advice"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}>
                    <div className={styles.MAInner}>
                        {parse(texts.M3_topic3_texts[1])}
                        <img src={'/img/sparkle.svg'} className={styles.MASparkleLeft}/>
                    </div>
                </div>
            </div>
            <MainTopic
                titleImage={redTitleCircle}
                background={styles.bgRed}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M3_topic4}
                downRightImage={europeanCitizen}
                mainText={texts.M3_topic4_text}
                className={styles.sectionContainer}
                chatGptMessage={texts.chatGptQuestion8}
            />
            <div
                id={"european-citizen-text"}
                className={`${styles.bgRed} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    {parse(texts.M3_topic5_texts[0])}
                    <img src={'/img/redScribble.png'} className={styles.MAScribble}/>
                </div>
            </div>

            <div
                id={"slovenia-benefits-info"}
                className={`${styles.bgRed} ${styles.sectionContainer} ${styles.EUBInfoContainer}`}
            >
                <div className={styles.TEAdviceText}>
                    {parse(texts.M3_topic5_texts[1])}
                    <img src={'/img/scribble-gray.svg'} className={styles.EUBSparkle}/>
                </div>
            </div>
            <MainTopic
                titleImage={grayTitleCircle}
                background={styles.whiteBackground}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M3_topic6}
                downRightImage={notesCheck}
                mainText={texts.M3_topic6_text}
                className={styles.sectionContainer}
                chatGptMessage={texts.chatGptQuestion9}
            />
            <TextWithAction
                className={`${styles.sectionContainer} ${styles.whiteBackground}`}
                scribbleImg={'/img/greyScribble.svg'}
                hasActionBtn={false}
                actionBtnTxt={texts.M3_topic7_button}
            >
                {parse(texts.M3_topic7_texts[0])}
            </TextWithAction>


            <div
                id={"slovenia-benefits-info"}
                className={`${styles.whiteBackground} ${styles.sectionContainer} ${styles.EUBInfoContainer}`}
            >
                <div className={styles.TEAdviceText}>
                    {parse(texts.M3_topic7_texts[1])}

                    <img src={'/img/scribble-gray.svg'} className={styles.EUBSparkle}/>
                </div>
            </div>
            <div id={"european-instruments"}
                 className={`${styles.sectionContainer} ${styles.impactAssessment} ${styles.bgBlue}`}>
                <div className={styles.IATitle}>
                    <span>{texts.M3_topic8}</span>
                    <img src={"/img/europe/blueTitleCircle.png"} className={styles.IATitleCircle}/>
                </div>
                <div className={styles.textContent}>
                    <img src={"/img/sparkle.svg"} className={styles.IAsparkle}/>
                    {parse(texts.M3_topic8_texts[0])}
                </div>
            </div>

            <div
                id={"media-advice"}
                className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={`${styles.bgBlue} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}>
                    <div className={styles.MAInner}>
                        {parse(texts.M3_topic8_texts[1])}
                        <img src={'/img/sparkle.svg'} className={styles.MASparkleLeft}/>
                    </div>
                </div>
            </div>
            <MainTopic
                titleImage={redTitleCircle}
                background={styles.bgRed}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M3_topic9}
                downRightImage={notesCheck}
                mainText={texts.M3_topic9_text}
                className={styles.sectionContainer}
                btnText={texts.M3_topic9_button}
                chatGptMessage={texts.chatGptQuestion10}
            />
            <FiveInfoStickyNotes
                text1={parse(texts.M3_topic10_texts[0]) as string}
                text2={parse(texts.M3_topic10_texts[1]) as string}
                text3={parse(texts.M3_topic10_texts[2]) as string}
                text4={parse(texts.M3_topic10_texts[3]) as string}
                text5={parse(texts.M3_topic10_texts[4]) as string}
                className={styles.sectionContainer}
            />
            <Exam
                btnClass={styles.redText}
                scribbleImg={'/img/whiteScribble.svg'}
                scribbleImgClass={styles.scribbleSvg}
                titleImage={redTitleCircle} background={styles.bgRed} className={styles.sectionContainer} downloadLink={downloadLinkThree}/>
        </div>
    );
};

export default Slovenia;