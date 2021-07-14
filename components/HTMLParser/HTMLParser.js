import React from 'react'
import styles from "./HTMLParser.module.scss"
import ReactHtmlParser from 'react-html-parser';

const HTMLParser = ({data}) => {
    return (
        <div className={styles["content-container"]}>
            {ReactHtmlParser(data)}
        </div>
    )
}

export default HTMLParser
