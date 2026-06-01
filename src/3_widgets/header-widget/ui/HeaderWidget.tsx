import React from 'react';
import Container from '@shared/ui/other/container/Container.tsx';
import Logo from '@shared/ui/other/logo/Logo.tsx';
import classes from '@widgets/header-widget/ui/HeaderWidget.module.scss';
import type { HeaderWidgetProps } from '@widgets/header-widget/types.ts';

const HeaderWidget: React.FC<HeaderWidgetProps> = ({ actionSlot }) => {
  return (
    <header className={classes.headerWidget}>
      <Container>
        <div className={classes.headerWidgetWrapper}>
          <Logo className={classes.headerWidgetLogo} />
          {actionSlot}
        </div>
      </Container>
    </header>
  );
};

export default HeaderWidget;
