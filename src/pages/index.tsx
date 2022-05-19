import { Stack } from '@mantine/core';
import type { NextPage } from 'next';

import CountDown from '@components/CountDown';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Stack
      sx={(theme) => ({
        minHeight: '100vh',
        background: ' #9eabe4 linear-gradient(315deg, #9eabe4 0%, #77eed8 74%)',
        padding: theme.spacing.lg,
      })}
      align="center"
    >
      <Head>
        <title>Sedentarism Alert - PWA</title>
      </Head>
      <CountDown />
    </Stack>
  );
};

export default Home;
