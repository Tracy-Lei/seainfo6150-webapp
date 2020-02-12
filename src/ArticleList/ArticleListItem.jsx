import React from "react";
import PropTypes from 'prop-types'
import SlugButton from "./SlugButton";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = props => {
  const article = props.article;
  return (
    <article>
        <fieldset className={styles.body}>
            <header className={styles.header}>
                <h1>{article.title}</h1>
            </header>
            <body>
                <p>{article.shortText}</p>
                <time className={styles.time} dateTime={article.pubYear}>{article.pubDate}</time>
                <SlugButton article = {article}></SlugButton>
            </body>
        </fieldset>
    </article>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired
};
export default ArticleListItem;
