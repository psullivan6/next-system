import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

// Components
import Box from '../components/Box';
import Text from '../components/Text';

// Styles
import ExtendedBox from '../components/ExtendedBox';

const Home = () => (
  <div>
    <Head>
      <title>Layout Test</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <Box as="section" backgroundColor="#eee" p={3}>
      <ExtendedBox href="https://google.com">
        <h1>ExtendedBox</h1>
      </ExtendedBox>

      <ExtendedBox p={2} as="a" display="block" href="https://google.com">
        <h1>ExtendedBox</h1>
      </ExtendedBox>

      <Text textAlign="center">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </Text>
    </Box>
  </div>
);

export default Home;
