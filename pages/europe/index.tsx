"use client";
import "../../app/globals.scss"
import { useState } from "react";
import Navbar from "@/components/navbar";
import StartingModule from "@/components/startingModule";
import ContentReview from "@/components/contentReview";
import infoContent from "@/public/bulgaria/infoContent.svg";
import MainTopic from "@/components/mainTopic";
import yellowTitleCircle from "../../public/europe/yellowTitleCircle.png";
import blueTitleCircle from "../../public/europe/blueTitleCircle.png";
import peopleWithPlanet from "../../public/europe/Group.png";
import grayTitleCircle from "../../public/bulgaria/grayTitleCircle.png";
import FiveInfoStickyNotes from "@/components/fiveInfoStickyNotes";
import Exam from "@/components/exam";
import SingleStickyNotePage from "@/components/singleStickyNotePage";
import yellowSticky from "../../public/bulgaria/StickyBgYellow.png"
import yellowElipse from "../../public/bulgaria/yellowElipse.png"

const Europe = () => {
    const [theme, setTheme] = useState("dark");

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    return (
        <div className={"app-container"}>
            <Navbar changeTheme={changeTheme} currentTheme={theme}/>
            <StartingModule moduleText={"Модул 1 Европа"} moduleBackgroundColor={"blueBackground"}/>
            <ContentReview contentImage={infoContent} background={"whiteBackgroundEurope"}/>
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={true}
                hasTitleImage={true}
                titleText={"Политика"}
                mainText={"Политиката в Европа е изключително разнообразна, тъй като Европа се състои от множество държави със собствени правителства и политически системи. Европейският съюз (ЕС) обаче играе ключова роля във формирането на общата политическа атмосфера на континента."}
            />
            <MainTopic
                titleImage={yellowTitleCircle}
                background={"yellowBackgroundEurope"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Общество"}
                downRightImage={peopleWithPlanet}
                mainText={"Обществото в Европа е изключително разнообразно и многослойно, като обхваща множество култури, езици, религии и обичаи. Европейското общество се характеризира с богата история, дълбоки традиции и променящи се социални структури."}
            />
            <MainTopic
                titleImage={grayTitleCircle}
                background={"greyBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Институции"}
                downRightImage={peopleWithPlanet}
                mainText={"Институциите в Европа обхващат различни организации и структури, които играят ключова роля в управлението и функционирането на Европейския съюз (ЕС). Тези институции създават, прилагат и наблюдават законодателството на ЕС, както и изпълняват други важни функции. Най-важните институции на Европейския съюз са:"}
            />
            <FiveInfoStickyNotes/>
            {/*<SingleStickyNotePage*/}
            {/*    circleImageSrc={yellowElipse}*/}
            {/*    noteImageSrc={yellowSticky}*/}
            {/*    noteHeight={450}*/}
            {/*    noteWidth={600}*/}
            {/*    noteText={"    Политическият ред в Европа:\n" +*/}
            {/*    "\n" +*/}
            {/*    "Европейският съюз: ЕС е политически и икономически съюз на 27 европейски държави, целящ да насърчи икономическото и политическо сътрудничество между своите членки. Институциите на ЕС включват Европейския парламент, Европейския съвет, Съвета на министрите, Европейската комисия и Европейския съд на правата на човека.\n" +*/}
            {/*    "\n" +*/}
            {/*    "Националните правителства: Всяка европейска държава има свои национални правителства, които се занимават с вътрешните въпроси и политики на държавата.\n" +*/}
            {/*    "\n" +*/}
            {/*    "Местните и регионални органи: Много държави в Европа са разделени на различни административни райони и области със свои местни и регионални органи."}*/}
            {/*/>*/}
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Информационни страници"}
                downRightImage={peopleWithPlanet}
                mainText={"Политиката в Европа е изключително разнообразна, тъй като Европа се състои от множество държави със собствени правителства и политически системи. Европейският съюз (ЕС) обаче играе ключова роля във формирането на общата политическа атмосфера на континента."}
            />
            <MainTopic
                titleImage={blueTitleCircle}
                background={"blueBackground"}
                hasButton={false}
                hasTitleImage={true}
                titleText={"Медийна грамотност и разпознаване на фалшиви новини"}
                downRightImage={peopleWithPlanet}
                mainText={"Европейските институции и много неправителствени организации работят за повишаване на медийната грамотност и разпознаването на фалшиви новини сред гражданите. Това включва обучителни програми, кампании за информиране и насърчаване на критичното мислене при използването на информация от различни източници. Някои от начините, по които хората могат да разпознаят фалшиви новини, включват:"}
            />
            <Exam titleImage={blueTitleCircle} background={"blueBackground"}/>
            <StartingModule moduleText={"Модул 2 Европа"} moduleBackgroundColor={"yellowBackgroundEurope"}/>
            <ContentReview contentImage={infoContent} background={"yellowBackgroundEurope"}/>
            <MainTopic titleImage={grayTitleCircle} hasTitleImage={true} titleText={"Уроци по гражданско образование"} hasButton={true} mainText={"Гражданското образование в Европа е от съществено значение за формирането на активни граждани. В различните европейски страни се провеждат уроци, които насърчават разбирането на демократични принципи, правата на човека, социалната отговорност и устойчивото развитие. Различните страни в Европа имат различни подходи и програми за гражданско образование, като се стремят да развиват активни граждани с разнообразни умения и знания за успешно участие в обществото."} background={"greybackground"}/>

        </div>
    )
}

export default Europe