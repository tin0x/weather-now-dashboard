import React from 'react';
import SearchByCity from '@features/search-by-city/ui/SearchByCity.tsx';
import classes from '@widgets/hero-widget/ui/HeroWidget.module.scss';

const HeroWidget: React.FC = () => {
  return (
    <div className="heroWidget">
      <div className={classes.heroWidgetWrapper}>
        <h1 className={classes.heroWidgetTitle}>How's the sky looking today?</h1>
        <SearchByCity className={classes.heroWidgetForm} />
      </div>
    </div>
  );
};

export default HeroWidget;
