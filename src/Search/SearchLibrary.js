import React from 'react';
import Axios from 'axios';
import SearchCategory from './SearchCategory'
import KeywordInfo from './KeywordInfo';
import SearchContext from '../Component/SearchContext';

function SearchLibrary() { }

SearchLibrary.prototype.searchData = async function (keyword, category) {
    const client_id = '7so2YGouMMLsYKXoo0J3';
    const client_secret = 'qcwyCTBMQA';

    try {
        const { data } = await Axios.get('/search/' + category.value + '?query=' + keyword, {
            headers: {
                'X-Naver-Client-Id': client_id,
                'X-Naver-Client-Secret': client_secret
            }
        });

        return new Promise((resolve, reject) => {
            resolve(data.items);
        });
    }
    catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
}

SearchLibrary.prototype.setupKeywordWithOperator = function setupKeywordWithOperator(keywordInfo) {
    if (!keywordInfo instanceof KeywordInfo || keywordInfo.keyword.length == 0) {
        return '';
    }
    let keyword = keywordInfo.keyword;
    if (keywordInfo.bMustCorrect) {
        keyword = '\"' + keyword + '\"';
    }

    keyword = keywordInfo.searchOperator.value + keyword;
    keyword = keywordInfo.combineOperator.value + keyword;

    //keywordInfo.keyword = keyword;

    return keyword;
}

SearchLibrary.prototype.makeSearchKeyword = function (keywordInfoList) {
    let searchKeyword = '';
    for (let keywordInfo of keywordInfoList) {
        searchKeyword += this.setupKeywordWithOperator(keywordInfo);
    }

    return searchKeyword;
}

export default new SearchLibrary();