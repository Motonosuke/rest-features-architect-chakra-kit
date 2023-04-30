import { RecoilRoot } from 'recoil';

import type { CustomLayout } from 'next';

import { MainHeader } from 'components/Header';
import { Box } from 'components/chakra-parts/Layout';
import { chakra } from 'components/chakra-parts/Other';
import { GlobalStateMainLayoutProvider } from 'providers/global-state-control-provider/global-state-main-layout-provider';

const HEADER_HEIGHT = 64;

export const MainLayout: CustomLayout = (page) => {
  return (
    <RecoilRoot>
      <GlobalStateMainLayoutProvider>
        <MainHeader />
        <chakra.main>
          <Box height={`calc(100vh - ${HEADER_HEIGHT}px)`} mt={20} mx="auto" width="70vw">
            {page}
          </Box>
        </chakra.main>
      </GlobalStateMainLayoutProvider>
    </RecoilRoot>
  );
};
