import React from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';

const endpoint = 'https://5debadddd444dd001422a17d.mockapi.io/api/';

interface PropTypes {
  data: {};
}

const DynamicPage: NextPage<PropTypes> = ({ data }) => (
  <section>
    <h1>Dynamic Page</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </section>
);

DynamicPage.getInitialProps = async ({ query }) => {
  const { id } = query;

  const data = await fetch(
    // @ts-ignore  [TODO] because of the encodeURIComponent(id) line, can't quickly solve that error
    `${endpoint}/articles/${encodeURIComponent(id)}`
  ).then(response => response.json());

  return { data };
};

export default DynamicPage;
