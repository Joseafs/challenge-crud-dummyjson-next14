import { useRouter } from 'next/navigation';
import { FC, ReactNode, useCallback } from 'react';

import { BackButton } from '~/components';

import { Body, Header, Root } from './styled';

type Props = {
  children: ReactNode;
};

export const TemplateScreen: FC<Props> = ({ children }) => {
  // TODO: backButton?
  // TODO: Header?
  const router = useRouter();

  const onBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Root>
      <Header>
        <BackButton onClick={onBack} />
        <div>Lorem user ?</div>
      </Header>
      <Body>{children}</Body>
    </Root>
  );
};
