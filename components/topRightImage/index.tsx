import styles from './topRightImage.module.scss';
import leftMagnifyingGlass from "../../public/img/bulgaria/leftMagnefyingGlass.png";
import Image from "next/image";
import scribble from "../../public/img/bulgaria/Scribble.png"
import RedirectButton from "@/components/ui/readMoreBtn";

interface Props {
    title: string;
    text1: string;
    text2: string;
}

const TopRightImage = ({title, text1, text2}: Props) => {
    return (
        <div className={styles.container}>
            <div>
                <div className={""}>
                    <div className={styles.glassContainer}>
                        <Image src={leftMagnifyingGlass} alt={"magnefinyGlass"} className={styles.magnifyingGlass}/>
                    </div>
                    <div className={"flex pl-[40%] pt-[10%]"}>
                        <span className={styles.title}>
                            {title}
                        </span>
                    </div>
                    <div className={styles.textContainer}>
                        <Image src={scribble} alt={"scribbl"} className={styles.scribble}/>
                        <div className={`${styles.text}`}>
                            {text1}
                        </div>
                        <div className={styles.text}>
                            {text2}
                        </div>
                        <RedirectButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopRightImage