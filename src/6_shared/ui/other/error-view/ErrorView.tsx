import React from 'react';
import classes from '@shared/ui/other/error-view/ErrorView.module.scss';
import type { ErrorViewProps } from '@shared/ui/other/error-view/types.ts';

const ErrorView: React.FC<ErrorViewProps> = ({ Icon, title, text, Button }) => {
  return (
    <div className={classes.errorView}>
      <div className={classes.errorViewWrapper}>
        {Icon && <Icon size={'4rem'} color={'secondary'} />}
        <h1 className={classes.errorViewTitle}>{title}</h1>
        <p className={classes.errorViewDescription}>{text}</p>
        {Button && <Button color={'secondary'} />}
      </div>
    </div>
  );
};

export default ErrorView;
