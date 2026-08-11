import React from 'react';
import classes from '@widgets/hero-widget/ui/HeroWidget.module.scss';
import { SearchByCity } from '@features/search-by-city';

const HeroWidget: React.FC = () => {
  return (
    <div className="heroWidget">
      <div className={classes.heroWidgetWrapper}>
        <h1 className={classes.heroWidgetTitle}>How's the sky looking today?</h1>
        <SearchByCity />
      </div>
    </div>
  );
};

export default HeroWidget;
