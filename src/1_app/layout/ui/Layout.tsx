import React from 'react';
import classes from '@app/layout/ui/Layout.module.scss';
import { FooterWidget } from '@widgets/footer-widget';
import { HeaderWidget } from '@widgets/header-widget';
import { UnitsWidget } from '@widgets/units-widget';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <HeaderWidget actionSlot={<UnitsWidget />} />
      <main className={classes.layoutMain}>{children}</main>
      <FooterWidget />
    </div>
  );
};

export default Layout;
