import React, { useState } from 'react';
import SearchCategory from '../Search/SearchCategory';
import DetailSearchKeywordList from './DetailSearchKeywordList';
import SearchLibrary from '../Search/SearchLibrary';
import ResultList from './ResultList';

function SearchBox({ setResult }) {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState(SearchCategory.BLOG);

    let categories = [];

    function onCategorySelected(event) {
        let searchCategory = SearchCategory.BLOG;
        for (let ownKey of Reflect.ownKeys(SearchCategory)) {
            let searchCategoryByOwnKey = Reflect.get(SearchCategory, ownKey);
            if (event.target.value === searchCategoryByOwnKey.value) {
                searchCategory = searchCategoryByOwnKey;
            }
        }

        setCategory(searchCategory);
    }

    function onSearchKeywordChanged(event) {
        setKeyword(event.target.value);
    }

    function onClickSearch(event) {
        SearchLibrary.searchData(keyword, category).then((res) => {
            console.log(res);
        });
    }

    {
        let searchCategoryKeys = Reflect.ownKeys(SearchCategory);
        for (let categoryKey of searchCategoryKeys) {
            let categoryValue = Reflect.get(SearchCategory, categoryKey);
            categories.push(<option key={searchCategoryKeys.indexOf(categoryKey)}
                value={categoryValue.value}>{categoryValue.displayName}</option>);
        }
    }

    return (
        <div>
            <input type="text" onChange={onSearchKeywordChanged}></input>
            <select onChange={onCategorySelected}> {categories} </select>
            <input type="button" value="검색" onClick={onClickSearch}></input>
            <br />
            <DetailSearchKeywordList category={category} setResult={setResult}></DetailSearchKeywordList>

        </div>
    );
}

export default SearchBox;