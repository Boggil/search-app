import React, {createContext, useState, useContext} from 'react';

export const SearchContext = createContext({result : {}});

export const useSearchContext = () => {useContext(SearchContext)};

export default SearchContext;