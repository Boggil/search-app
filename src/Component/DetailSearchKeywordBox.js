import React, { useState, useEffect } from 'react';
import KeywordInfo from '../Search/KeywordInfo';
import SearchOperator from '../Search/SearchOperator';
import CombineOperator from '../Search/CombineOperator';

function DetailSearchKeywordBox({keywordInfo, onKeywordInfoChanged}) {
    const searchOperators = [];
    const combineOperators = [];

    function onKeywordChanged(event)
    {
        keywordInfo.keyword = event.target.value;
        onKeywordInfoChanged();
    }

    function onSearchOperatorSelected(event)
    {
        let searchOperator = SearchOperator.NONE;
        for(let ownKey of Reflect.ownKeys(SearchOperator))
        {
            let searchOperatorByOwnKey = Reflect.get(SearchOperator, ownKey);
            if(event.target.value === searchOperatorByOwnKey.value)
            {
                searchOperator = searchOperatorByOwnKey;
            }
        }

        keywordInfo.searchOperator = searchOperator;
        onKeywordInfoChanged();
    }

    function onCombineOperatorSelected(event)
    {
        let combineOperator = CombineOperator.AND;
        for(let ownKey of Reflect.ownKeys(CombineOperator))
        {
            let combineOperatorByOwnKey = Reflect.get(CombineOperator, ownKey);
            if(event.target.value === combineOperatorByOwnKey.value)
            {
                combineOperator = combineOperatorByOwnKey;
            }
        }
        
        keywordInfo.combineOperator = combineOperator;
        onKeywordInfoChanged();
    }

    function onMustCorrectChanged(event)
    {
        keywordInfo.bMustCorrect = event.target.checked;
        onKeywordInfoChanged();
    }

    useEffect(()=>{
        return ()=>{
            onKeywordInfoChanged();
        }
    })

    {
        let searchOperatorKeys = Reflect.ownKeys(SearchOperator);
        for(let i = 0; i < searchOperatorKeys.length; i++)
        {
            let value = Reflect.get(SearchOperator, searchOperatorKeys[i]);
            searchOperators.push(<option key={i} value={value.value}>{value.displayName}</option>);
        }
    }

    {
        let combineOperatorKeys = Reflect.ownKeys(CombineOperator);
        for(let i = 0; i < combineOperatorKeys.length; i++)
        {
            let value = Reflect.get(CombineOperator, combineOperatorKeys[i]);
            combineOperators.push(<option key={i} value={value.value}>{value.displayName}</option>);
        }
    }
    

    return(
        <div>
            <input type="text" onChange={onKeywordChanged}></input>

            <select onChange={onSearchOperatorSelected}>
            { searchOperators }
            </select>

            <select onChange={onCombineOperatorSelected}>
            { combineOperators }
            </select>
            <label>
                완벽히 일치 
                <input type="checkbox" onChange={onMustCorrectChanged}/>
            </label>
        </div>
    );
}

export default DetailSearchKeywordBox;