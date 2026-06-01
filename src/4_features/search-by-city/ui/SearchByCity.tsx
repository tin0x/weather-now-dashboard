import React from 'react';
import Input from '@shared/ui/other/input/Input.tsx';
import classes from '@features/search-by-city/ui/SearchByCity.module.scss';
import IconSearch from '@shared/ui/icons/icon-search/IconSearch.tsx';
import Button from '@shared/ui/other/button/Button.tsx';
import SelectList from '@shared/ui/other/select/select-list/SelectList.tsx';
import SelectOption from '@shared/ui/other/select/select-option/SelectOption.tsx';
import { useCitySelection } from '@features/search-by-city/model/useCitySelection.ts';
import IconSpinner from '@shared/ui/icons/icon-spinner/IconSpinner.tsx';
import clsx from 'clsx';

const SearchByCity: React.FC<{ className: string }> = ({ className }) => {
  const {
    handleInputChange,
    handleChangeCity,
    handleStartSearch,
    mappedGeocoding,
    isLoading,
    isFetching,
    city,
    debouncedSearch,
    showSuggestions,
  } = useCitySelection();

  const isDebouncing = city !== debouncedSearch;
  const showLoader = isLoading || isFetching || (isDebouncing && city.length >= 2);
  const hasResult = mappedGeocoding!.length > 0;
  const showResultsList = showSuggestions && hasResult && !isDebouncing && city.length >= 2;
  const hasCity = debouncedSearch?.length >= 2;

  return (
    <form className={clsx(className, classes.searchByCityForm)} onSubmit={handleStartSearch} action="#">
      <Input
        Icon={IconSearch}
        placeholder="Search for a place..."
        value={city}
        onChange={handleInputChange}
        maxLength={20}
      >
        {showLoader && showSuggestions && (
          <SelectList isOpenSelect={showSuggestions}>
            <div className={classes.searchByCityFormLoader}>
              <IconSpinner size={'1.2rem'} />
              <span>Search in progress...</span>
            </div>
          </SelectList>
        )}

        {showResultsList && (
          <SelectList isOpenSelect={showSuggestions}>
            {mappedGeocoding!.map((item) => (
              <SelectOption
                key={item.id}
                label={`${item.city}, ${item.adminDivision.admin1 ? item.adminDivision.admin1 : ''}, ${item.adminDivision.admin2 ? item.adminDivision.admin2 : ''}`}
                onClick={() => handleChangeCity(item.city, item.location)}
              />
            ))}
          </SelectList>
        )}
      </Input>
      <Button disabled={isLoading || !hasCity} color={'primary'} type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchByCity;
