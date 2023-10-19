"use client";
import React, {useState} from "react";
import Navbar from "@/components/navbar";
import StartingModule from "@/components/startingModule";
import CenteredScheme from "@/components/centeredScheme";
import scheme1 from "../../public/img/bulgaria/scheme1.png";
import ContentReview from "@/components/contentReview";
import TopLeftImage from "@/components/topLeftImage";
import TopRightImage from "@/components/topRightImage";
import MainTopic from "@/components/mainTopic";
import greenTitleCircle from "../../public/img/bulgaria/greenTitleCircle.png";
import redTitleCircle from "../../public/img/bulgaria/redTitleCircle.png";
import grayTitleCircle from "../../public/img/bulgaria/grayTitleCircle.png";
import peopleDigging from "../../public/img/bulgaria/twoPeopleDigging.png";
import InfoWithNotes from "@/components/infoWithNotes";
import infoContent from "../../public/img/bulgaria/infoContent.png";
import ContentReview2 from "../../public/img/bulgaria/contentReview2.png";
import womenWorking from "../../public/img/bulgaria/womenWorking.png";
import Exam from "@/components/exam";
import DownLeftImageTexts from "@/components/downLeftImageTexts";
import handsTree from "../../public/img/bulgaria/handsTree.png";
import peopleWorking from "../../public/img/bulgaria/peopleWorking.png"
import cleaning from "../../public/img/bulgaria/cleaning.png"
import greenHandsTree from "../../public/img/bulgaria/greenHandsTree.png"
import falseNews from "../../public/img/bulgaria/falseNews.png"
import heartPeople from "../../public/img/bulgaria/heartPeople.png"
import workAndTravel1 from "../../public/img/bulgaria/workAndTravel1.png"
import workAndTravel2 from "../../public/img/bulgaria/workAndTravel2.png"
import euForPeople from "../../public/img/bulgaria/euForPeople.png"
import europeanInstruments from "../../public/img/bulgaria/europeanInstruments.png"
import docs from "../../public/img/bulgaria/docs.png"
import styles from './bulgaria.module.scss'
import {getTexts} from "@/contexts/LanguageContext";
import parse from "html-react-parser";

const HomePage = () => {
    const [theme, setTheme] = useState("dark");
    const {texts: {Bulgaria: texts}} = getTexts();

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }
    var parse = require('html-react-parser');

    return (
        <div className={"h-full"}>
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <StartingModule moduleText={texts.M1_title} moduleBackgroundColor={"greenBackground"}
                            className={styles.sectionContainer}/>
            <div className={`${styles.quotesContainer} ${styles.sectionContainer}`}>
                <div className={`${styles.quotesRow} mb-20`}>
                    <div className={styles.quoteMerkel}>
                        <div className={styles.doubleQuoteMerkel}>
                            <img src={'/img/bulgaria/CommaImage.png'} className={styles.firstQuote}/>
                            <img src={'/img/bulgaria/CommaImage.png'} className={styles.secondQuote}/>
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
                            <img src={"./img/redComma.svg"} className={styles.firstQuote}/>
                            <img src={"./img/redComma.svg"} className={styles.secondQuote}/>
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
            <ContentReview heading={texts.M1_content_heading} contentImage={infoContent} background={"whiteBackground"}
                           className={styles.sectionContainer}/>
            <MainTopic titleImage={greenTitleCircle} background={"greenBackground"} hasButton={true}
                       hasTitleImage={true}
                       className={styles.sectionContainer}
                       titleText={texts.M1_topic1} mainText={texts.M1_topic1_text}/>
            <CenteredScheme title={texts.M1_topic2} centerImageSrc={scheme1} text={texts.M1_topic2_text} className={styles.sectionContainer}/>
            <div
                id={"eu-for-citizens-3"}
                className={`greenBackground ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        {parse(texts.M1_topic2_texts[0])}
                    </p>
                    <p>
                        {parse(texts.M1_topic2_texts[1])}
                    </p>
                    <p>
                        {parse(texts.M1_topic2_texts[2])}
                    </p>
                    <img src={'./img/greenScribble.svg'} className={styles.maScribbleDownBgLeft}/>
                </div>
            </div>
            <TopLeftImage title={texts.M1_topic3} text1={texts.M1_topic3_text1} text2={texts.M1_topic3_text2}
                          text3={texts.M1_topic3_text3}/>
            <TopRightImage title={texts.M1_topic3} text1={texts.M1_topic3_text4} text2={texts.M1_topic3_text5}/>
            <MainTopic
                titleImage={redTitleCircle}
                background={"redBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={texts.M1_topic5}
                mainText={texts.M1_topic5_text}
                className={styles.sectionContainer}
            />
            <MainTopic
                background={"redBackground"}
                hasButton={false}
                hasTitleImage={false}
                titleText={texts.M1_topic6}
                mainText={texts.M1_topic6_text}
                downRightImage={peopleDigging}
                className={styles.sectionContainer}
            />
            <MainTopic
                background={"grayBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={texts.M1_topic7}
                mainText={texts.M1_topic7_text}
                downRightImage={peopleDigging}
                className={styles.sectionContainer}
            />
            <div
                id={"media-advice"}
                className={`${"grayBackground"} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        {parse(texts.M1_topic8_texts[0])}
                    </p>
                    <p>
                        {parse(texts.M1_topic8_texts[1])}
                    </p>
                    <p>
                        {parse(texts.M1_topic8_texts[2])}
                    </p>
                </div>
            </div>

            <div
                id={"media-advice"}
                className={`${"grayBackground"} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        {parse(texts.M1_topic9_texts[0])}
                    </p>
                    <p>
                        {parse(texts.M1_topic9_texts[1])}
                    </p>
                    <p>
                        {parse(texts.M1_topic9_texts[2])}
                    </p>
                </div>
            </div>

            <InfoWithNotes
                background={"grayBackground"}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={texts.M1_topic10}
                mainText={texts.M1_topic10_text}
                notes={texts.M1_topic10_notes}
                className={styles.sectionContainer}
            />
            <Exam titleImage={greenTitleCircle} background={"greenBackground"} className={styles.sectionContainer}
                  btnClass={styles.greenText} scribbleImg={'./img/greenScribble.svg'}
                  scribbleImgClass={styles.greenScribble}/>
            <StartingModule moduleText={texts.M2_title} moduleBackgroundColor={"redBackground"}
                            className={styles.sectionContainer} commaImage={"./img/redComma.svg"}/>
            <ContentReview heading={texts.M2_content_heading} contentImage={ContentReview2} background={"redBackground"}
                           className={styles.sectionContainer}/>
            <MainTopic
                background={"grayBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={texts.M2_topic1}
                mainText={texts.M2_topic1_text}
                downRightImage={womenWorking}
                className={styles.sectionContainer}
            />
            <InfoWithNotes
                background={"grayBackground"}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={texts.M2_topic2}
                notes={texts.M2_topic2_notes}
                className={styles.sectionContainer}
            />
            <MainTopic
                background={"greenBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleImage={greenTitleCircle}
                titleText={texts.M2_topic3}
                mainText={texts.M2_topic3_text}
                downRightImage={peopleWorking}
                className={styles.sectionContainer}
            />
            <MainTopic
                background={"redBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={texts.M2_topic4}
                mainText={texts.M2_topic4_text}
                downRightImage={cleaning}
                className={styles.sectionContainer}
            />
            <div
                id={"svobodi"}
                className={`${"redBackground"} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        {parse(texts.M2_topic5_texts[0])}
                    </p>
                    <p>
                        {parse(texts.M2_topic5_texts[1])}
                    </p>
                    <p>
                        {parse(texts.M2_topic5_texts[2])}
                    </p>
                    <p>
                        {parse(texts.M2_topic5_texts[3])}
                    </p>
                    <p>
                        {parse(texts.M2_topic5_texts[4])}
                    </p>
                </div>
            </div>
            <MainTopic
                background={"grayBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={texts.M2_topic6}
                mainText={texts.M2_topic6_text}
                downRightImage={greenHandsTree}
                className={styles.sectionContainer}
            />
            <div
                id={"svobodi"}
                className={`${"grayBackground"} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        {parse(texts.M2_topic7_texts[0])}
                    </p>
                    <p>
                        {parse(texts.M2_topic7_texts[1])}
                    </p>
                    <p>
                        {parse(texts.M2_topic7_texts[2])}
                    </p>
                    <p>
                        {parse(texts.M2_topic7_texts[3])}
                    </p>
                </div>
            </div>
            <MainTopic
                background={"greenBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={greenTitleCircle}
                titleText={texts.M2_topic8}
                mainText={texts.M2_topic8_text}
                downRightImage={falseNews}
                className={styles.sectionContainer}
            />
            <div
                id={"false-news-recoginition"}
                className={`${"greenBackground"} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        {parse(texts.M2_topic9_texts[0])}
                    </p>
                    <p>
                        {parse(texts.M2_topic9_texts[1])}
                    </p>
                    <p>
                        {parse(texts.M2_topic9_texts[2])}
                    </p>
                    <p>
                        {parse(texts.M2_topic9_texts[3])}
                    </p>
                </div>
            </div>
            <MainTopic
                background={"redBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleImage={redTitleCircle}
                titleText={texts.M2_topic10}
                mainText={texts.M2_topic10_text}
                downRightImage={heartPeople}
                className={styles.sectionContainer}
            />
            <Exam titleImage={redTitleCircle} background={"redBackground"} className={styles.sectionContainer}/>
            <StartingModule moduleText={texts.M3_title} moduleBackgroundColor={"grayBackground"}
                            className={styles.sectionContainer}/>
            <ContentReview heading={texts.M3_content_heading} contentImage={ContentReview2} background={"redBackground"}
                           className={styles.sectionContainer}/>
            <MainTopic
                background={"greenBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={greenTitleCircle}
                titleText={texts.M3_topic1}
                mainText={texts.M3_topic1_text}
                downRightImage={workAndTravel1}
                className={styles.sectionContainer}
            />
            <MainTopic
                background={"redBackground"}
                hasButton={false}
                hasTitleImage={false}
                titleImage={greenTitleCircle}
                mainText={texts.M3_topic2_text}
                downRightImage={workAndTravel2}
                className={styles.sectionContainer}
            />
            <MainTopic
                background={"grayBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={texts.M3_topic4}
                mainText={texts.M3_topic4_text}
                downRightImage={euForPeople}
                className={styles.sectionContainer}
            />
            <DownLeftImageTexts texts={texts.M3_topic5_texts} background={"grayBackground"}
                                leftImage={handsTree} className={styles.sectionContainer}/>
            <div
                id={"eu-for-citizens-3"}
                className={`grayBackground ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        {parse(texts.M3_topic_6_texts[0])}
                    </p>
                    <p>
                        {parse(texts.M3_topic_6_texts[1])}
                    </p>
                    <img src={'/img/greyScribble.svg'} className={styles.maScribbleDownLeft}/>
                </div>
                <div className={"flex w-full justify-end"}>
                    <img src={'/img/bulgaria/euForCitizen.png'}/>
                </div>
            </div>
            <MainTopic
                background={"greenBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={greenTitleCircle}
                titleText={texts.M3_topic7}
                mainText={texts.M3_topic7_text}
                downRightImage={europeanInstruments}
                className={styles.sectionContainer}
            />
            <div
                id={"european-instrument-texts"}
                className={`${"greenBackground"} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        {parse(texts.M3_topic8_texts[0])}
                    </p>
                    <p>
                        {parse(texts.M3_topic8_texts[1])}
                    </p>
                    <p>
                        {parse(texts.M3_topic8_texts[2])}
                    </p>
                    <p>
                        {parse(texts.M3_topic8_texts[3])}
                    </p>
                </div>
            </div>
            <MainTopic
                background={"redBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={texts.M3_topic9}
                mainText={texts.M3_topic9_text}
                downRightImage={docs}
                className={styles.sectionContainer}
            />
            <div
                id={"european-instrument-texts"}
                className={`${styles.redBackground} ${styles.sectionContainer} ${styles.mediaAdviceContainer}`}
            >
                <div className={styles.MAInner}>
                    <p>
                        {parse(texts.M3_topic8_texts[0])}
                    </p>
                    <p>
                        {parse(texts.M3_topic8_texts[1])}
                    </p>
                    <p>
                        {parse(texts.M3_topic8_texts[2])}
                    </p>
                    <p>
                        {parse(texts.M3_topic8_texts[3])}
                    </p>
                </div>
            </div>
            <Exam titleImage={redTitleCircle} background={"redBackground"} className={styles.sectionContainer}
                  btnClass={styles.redText} scribbleImg={'/img/redScribble.png'}/>
            <div id={"extra-resources"} className={`${styles.sectionContainer} ${styles.redBackground}`}>
                <img src={'/img/europe/extra-resource.png'} className={styles.ERImg}/>
            </div>
        </div>
    )
}

export default HomePage