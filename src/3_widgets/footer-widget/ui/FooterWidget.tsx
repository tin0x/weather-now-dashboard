import React from 'react';
import Container from '@shared/ui/other/container/Container.tsx';
import classes from '@widgets/footer-widget/ui/FooterWidget.module.scss';

const FooterWidget: React.FC = () => {
  return (
    <footer className={classes.footerWidget}>
      <Container>
        <div className={classes.footerWidgetWrapper}>
          <span>{`@ ${new Date().getUTCFullYear()} Weather Now. Licensed under MIT.`}</span>
        </div>
      </Container>
    </footer>
  );
};

export default FooterWidget;
