import React, { useEffect } from 'react';

import { Box } from 'components/chakra-parts/Layout';
import { useFetchAlbums } from 'features/albums/hooks';
import { useAlbumsState, useAlbumsMutators } from 'stores/albums';

interface Props {
  children: React.ReactNode;
}

export const GlobalStateMainLayoutProvider = ({ children }: Props) => {
  const { albumsData } = useFetchAlbums();
  const { albums: albumsGlobalState } = useAlbumsState();
  const { setAlbumsState } = useAlbumsMutators();

  useEffect(() => {
    if (!albumsGlobalState && albumsData) {
      setAlbumsState(albumsData);
    }
  }, [albumsGlobalState, albumsData, setAlbumsState]);

  return <Box>{children}</Box>;
};
