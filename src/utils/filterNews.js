export default function filterNews(articles) {
  return articles.filter((article) => article.title !== "[Removed]");
}
