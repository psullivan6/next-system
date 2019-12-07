import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

// Components
import Box from '../components/Box';
import Text from '../components/Text';

// Styles
import Title from '../components/Title/styles';
import Card from '../components/_pages/home/Card/styles';

const Home = () => (
  <div>
    <Head>
      <title>Layout Test</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <Box color="#333">
      <Title>
        TEST <code>styled-system</code> layout
      </Title>
      <Text textAlign="center">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </Text>

      <Box
        display="flex"
        justifyContent="space-around"
        maxWidth={880}
        marginX="auto"
        marginTop={7}
        marginBottom={5}
      >
        <Card href="https://nextjs.org/docs">
          <Text as="h3" margin={0} color="primary" fontSize={18}>
            Documentation &rarr;
          </Text>
          <Text margin={0} padding={0} paddingTop={2} fontSize={13}>
            Learn more about Next.js in the documentation.
          </Text>
        </Card>

        <Card href="https://nextjs.org/learn">
          <Text as="h3" margin={0} color="primary" fontSize={18}>
            Next.js Learn &rarr;
          </Text>
          <Text margin={0} padding={0} paddingTop={2} fontSize={13}>
            Learn about Next.js by following an interactive tutorial!
          </Text>
        </Card>

        <Card href="https://github.com/zeit/next.js/tree/master/examples">
          <Text as="h3" margin={0} color="primary" fontSize={18}>
            Examples &rarr;
          </Text>
          <Text margin={0} padding={0} paddingTop={2} fontSize={13}>
            Find other example boilerplates on the Next.js GitHub.
          </Text>
        </Card>
      </Box>
    </Box>
  </div>
);

export default Home;
