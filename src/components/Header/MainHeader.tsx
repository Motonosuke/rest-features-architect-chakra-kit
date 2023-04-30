import Link from 'next/link';

import { HStack } from 'components/chakra-parts/Layout';
import { chakra } from 'components/chakra-parts/Other';
import { Text } from 'components/chakra-parts/Typography';
import { ROUTE_PATHS } from 'constants/route-paths';

export const MainHeader = () => {
  return (
    <chakra.header>
      <chakra.nav
        alignItems="center"
        backgroundColor="pink.100"
        display="flex"
        justifyContent="space-between"
        minHeight="64px"
        px={20}
        width="full"
      >
        <Link href={ROUTE_PATHS.HOME}>Home</Link>
        <HStack spacing={4}>
          <Text>aaa</Text>
          <Text>bbb</Text>
          <Text>ccc</Text>
        </HStack>
      </chakra.nav>
    </chakra.header>
  );
};
