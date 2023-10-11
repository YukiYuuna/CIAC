import Image from "next/image";
import styles from "./contentReview.module.scss"

interface Props {
    contentImage: any;
    background: string
    className?: string
    heading: string
}
const ContentReview = ({contentImage, background, className, heading}: Props) => {

    return (
        <div className={`${styles.contentReviewContainer} ${background} ${className}`}>
            <div className={"flex items-center justify-center pt-10"}>
                <span className={styles.titleContainer}>
                    {heading}
                </span>
            </div>
            <div className={"ml-40 mt-14"}>
                <Image src={contentImage} alt={"asd"}/>
            </div>
        </div>
    )
}

export default ContentReview