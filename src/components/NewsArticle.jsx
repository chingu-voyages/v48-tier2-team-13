import PropTypes from "prop-types";

function NewsArticle({ article }) {
  return (
    <div className="p-5">
      <div className="font-bold">NewsArticleDemo</div>
      <div>{article.title}</div>
      <div>Source:{article.source.name}</div>
    </div>
  );
}

NewsArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default NewsArticle;
