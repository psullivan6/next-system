import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';

const endpoint = 'https://5debadddd444dd001422a17d.mockapi.io/api/';

interface PropTypes {
  articles: {}[];
}

interface Article {
  id: string;
}

const ArticlesPage: NextPage<PropTypes> = ({ articles }) => (
  <section>
    <h1>Articles:</h1>
    <ul>
      {articles.map((article: Article) => (
        <li>
          <pre>{JSON.stringify(article, null, 2)}</pre>
          <Link href={`/articles/${article.id}`}>LINK HERE 👆</Link>
        </li>
      ))}
    </ul>
  </section>
);

ArticlesPage.getInitialProps = async () => {
  const articles = await fetch(`${endpoint}/articles`).then(response =>
    response.json()
  );

  return { articles };
};

export default ArticlesPage;
