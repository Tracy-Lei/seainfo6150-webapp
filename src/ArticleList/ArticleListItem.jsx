import React from "react";
import styles from "./ArticleListItem.module.css";
import SlugButton from "./SlugButton";
import ArticleImage from "./ArticleImage";

const ArticleListItem = props => {
  return (
    <div className={styles.container}>
        <ArticleImage url = {props.article.image._url} title = {props.article.title}/>
        <div className={styles.articleContext}>
            <h3 className={styles.title}>{props.article.title}</h3>
            <p>{props.article.shortText}</p>
            <time className={styles.pubDate} dateTime={props.article.pubYear}>{props.article.pubDate}</time>
        </div>
        <SlugButton slug={props.article.slug} buttonText={props.article.author} />
    </div>
  );
};

export default ArticleListItem;