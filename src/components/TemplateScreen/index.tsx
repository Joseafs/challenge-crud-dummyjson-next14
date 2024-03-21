import { useRouter } from 'next/navigation';
import { FC, ReactNode, useCallback } from 'react';

import { BackButton } from '~/components';

import { Body, Header, Root } from './styled';

type Props = {
  children: ReactNode;
};

export const TemplateScreen: FC<Props> = ({ children }) => {
  const router = useRouter();

  const onBack = useCallback(() => {
    router.back();
  }, [router]);

  // TODO: need loading here for pages and waits
  // TODO: need specift maxWidth

  return (
    <Root>
      <Header>
        <BackButton onClick={onBack} />
        {/* TODO: circle with user image ? */}
      </Header>
      <Body>{children}</Body>
      {/* TODO: footer ? */}
    </Root>
  );
};
