import styles from './topLeftImage.module.scss';
import leftMagnifyingGlass from "../../public/img/bulgaria/leftMagnefyingGlass.png";
import Image from "next/image";
import scribble from "../../public/img/bulgaria/Scribble.png"

interface Props {
    title: string;
    text1: string;
    text2: string;
    text3: string;
}

const TopLeftImage = ({title, text1, text2, text3}: Props) => {
    return (
        <div className={styles.container}>
            <div>
                <div className={""}>
                    <Image src={leftMagnifyingGlass} alt={"magnefinyGlass"} className={"absolute"}/>
                    <div className={"flex pl-[20%] pt-[10%]"}>
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
                        <div className={styles.text}>
                            {text3}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopLeftImage