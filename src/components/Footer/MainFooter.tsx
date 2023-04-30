import { Box, HStack } from 'components/chakra-parts/Layout';
import { chakra } from 'components/chakra-parts/Other';
import { Text } from 'components/chakra-parts/Typography';

export const MainFooter = () => {
  return (
    <chakra.footer
      alignItems="center"
      backgroundColor="blue.100"
      height="64px"
      justifyContent="space-between"
      px={10}
      width="full"
    >
      <HStack>
        <Text>aaa</Text>
        <Text>bbb</Text>
        <Text>ccc</Text>
      </HStack>
      <Box>
        <Text>ddd</Text>
      </Box>
    </chakra.footer>
  );
};
