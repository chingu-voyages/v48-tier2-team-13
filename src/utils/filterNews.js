const chineseChars = /[\u4e00-\u9fff]+/;

export default function filterNews(articles) {
  return articles.filter((article) => {
    if (article.title !== "[Removed]" && !chineseChars.test(article.title)) {
      return article;
    }
  });
}
