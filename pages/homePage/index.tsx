"use client";
import React, { useState } from "react";
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
import InfoText from "@/components/infoText";
import infoText2 from "../../public/img/bulgaria/imgText2.png";
import infoText1 from "../../public/img/bulgaria/imageText1.png";
import InfoWithNotes from "@/components/infoWithNotes";
import infoContent from "../../public/img/bulgaria/infoContent.png";
import ContentReview2 from "../../public/img/bulgaria/contentReview2.png";
import womenWorking from "../../public/img/bulgaria/womenWorking.png";
import youthText from "../../public/img/bulgaria/youthTextBulgaria.png"
import youthText2 from "../../public/img/bulgaria/youthTextBulgaria2.png"
import Exam from "@/components/exam";
import DownLeftImageTexts from "@/components/downLeftImageTexts";
import handsTree from "../../public/img/bulgaria/handsTree.png";
import volunteerText from "../../public/img/bulgaria/volunteerText.svg"
import europeanInstroTexts from "../../public/img/bulgaria/europeanInstrumentsTexts.png"
import erasmusTexts from "../../public/img/bulgaria/erasmusText.png"
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
import Image from "next/image";
import RedirectButton from "@/components/ui/readMoreBtn";
import {getTexts} from "@/contexts/LanguageContext";

const HomePage = () => {
    const [theme, setTheme] = useState("dark");
    const { texts: {Bulgaria: texts} } = getTexts();

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    return (
        <div className={"h-full"}>
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <StartingModule moduleText={texts.M1_title} moduleBackgroundColor={"greenBackground"} className={styles.sectionContainer}/>
            <ContentReview heading={texts.M1_content_heading} contentImage={infoContent} background={"whiteBackground"} className={styles.sectionContainer}/>
            <MainTopic titleImage={greenTitleCircle} background={"greenBackground"} hasButton={true} hasTitleImage={true}
                       className={styles.sectionContainer}
                       titleText={texts.M1_topic1} mainText={texts.M1_topic1_text}/>
            <CenteredScheme title={texts.M1_topic2} centerImageSrc={scheme1} text={texts.M1_topic2_text}/>
            <TopLeftImage title={texts.M1_topic3} text1={texts.M1_topic3_text1} text2={texts.M1_topic3_text2} text3={texts.M1_topic3_text3}/>
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
            <InfoText background={infoText1} bgColor={"grayBackground"}/>
            <InfoText background={infoText2} bgColor={"grayBackground"}/>
            <InfoWithNotes
                background={"grayBackground"}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={texts.M1_topic10}
                mainText={texts.M1_topic10_text}
                notes={texts.M1_topic10_notes}
            />
            <Exam titleImage={redTitleCircle} background={"redBackground"} className={styles.sectionContainer}/>
            <StartingModule moduleText={texts.M2_title} moduleBackgroundColor={"redBackground"} className={styles.sectionContainer}/>
            <ContentReview heading={texts.M2_content_heading} contentImage={ContentReview2} background={"redBackground"} className={styles.sectionContainer}/>
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
            <InfoText background={youthText} bgColor={"redBackground"}/>
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
            <InfoText background={volunteerText} bgColor={"grayBackgroundBulgaria"}/>

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
            <InfoText background={youthText2} bgColor={"greenBackground"}/>
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
            <StartingModule moduleText={texts.M3_title} moduleBackgroundColor={"grayBackgroundBulgaria"} className={styles.sectionContainer}/>
            <ContentReview heading={texts.M3_content_heading} contentImage={ContentReview2} background={"redBackground"} className={styles.sectionContainer}/>
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
                background={"grayBackgroundBulgaria"}
                hasButton={true}
                hasTitleImage={true}
                titleImage={grayTitleCircle}
                titleText={texts.M3_topic4}
                mainText={texts.M3_topic4_text}
                downRightImage={euForPeople}
                className={styles.sectionContainer}
            />
            <DownLeftImageTexts texts={texts.M3_topic5_texts} background={"grayBackgroundBulgaria"} leftImage={handsTree}/>

        <MainTopic
            background={"greenBackground"}
            hasButton={true}
            hasTitleImage={true}
            titleImage={grayTitleCircle}
            titleText={texts.M3_topic7}
            mainText={texts.M3_topic7_text}
            downRightImage={europeanInstruments}
            className={styles.sectionContainer}
        />
        <InfoText background={europeanInstroTexts} bgColor={"greenBackground"}/>
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
        <InfoText background={erasmusTexts} bgColor={"redBackground"}/>
        <Exam titleImage={redTitleCircle} background={"redBackground"} className={styles.sectionContainer}/>
        </div>
    )
}

export default HomePage