import React, {useState} from 'react';
import KeywordInfo from '../Search/KeywordInfo';
import SearchCategory from '../Search/SearchCategory';
import DetailSearchKeywordBox from './DetailSearchKeywordBox';
import DetailSearchKeywordList from './DetailSearchKeywordList';

let keyword = '';
let category = '';

function SearchBox()
{
    let categories = [];
    let searchCategoryKeys = Reflect.ownKeys(SearchCategory);
    for(let categoryKey of searchCategoryKeys)
    {
        let categoryValue = Reflect.get(SearchCategory, categoryKey);
        categories.push(<option key={searchCategoryKeys.indexOf(categoryKey)}
         value={categoryValue.value}>{categoryValue.displayName}</option>);
    }

    function onCategorySelected(event)
    {
        category = event.target.value;
    }

    function onSearchKeywordChanged(event)
    {
        keyword = event.target.value;
    }

    function onClickSearch(event)
    {

    }

    return(
        <div>
            <input type="text" onChange={onSearchKeywordChanged}></input>
            <select onChange={onCategorySelected}> { categories } </select>
            <input type="button" value="검색" onClick={onClickSearch}></input>
            <br/>
            <DetailSearchKeywordList></DetailSearchKeywordList>
        </div>
    );
}

export default SearchBox;