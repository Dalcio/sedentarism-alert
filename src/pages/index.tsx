import { Stack } from '@mantine/core';
import type { NextPage } from 'next';

import CountDown from '@components/CountDown';

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
      <CountDown />
    </Stack>
  );
};

export default Home;
