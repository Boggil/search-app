import React, {useState, useEffect} from 'react';
import KeywordInfo from '../Search/KeywordInfo';
import DetailSearchKeywordBox from './DetailSearchKeywordBox';
import SearchCategory from '../Search/SearchCategory';
import SearchLibrary from '../Search/SearchLibrary';

function DetailSearchKeywordList({category, setResult})
{
    const [keywordInfoList, setKeywordInfoList] = useState([]);
    const [renderNum, setRenderNum] = useState(0);
    const [detailSearchKeyword, setDetailSearchKeyword] = useState('');

    function onClickPlus(event)
    {
        keywordInfoList.push(new KeywordInfo());
        rerender();
    }

    function onClickMinus(event)
    {
        keywordInfoList.pop();
        rerender();
    }

    function onClickDetailSearchButton(event)
    {
        if(detailSearchKeyword.length === 0)
        {
            alert('상세검색 키워드를 설정해주세요.');
            return;
        }

        setResult(SearchLibrary.searchData(detailSearchKeyword, category));
    }

    function onKeywordInfoChanged()
    {
        setDetailSearchKeyword(SearchLibrary.makeSearchKeyword(keywordInfoList));
    }

    function rerender()
    {
        setRenderNum(renderNum + 1);
    }

    

    return(
        <div>            
            <label>
                {detailSearchKeyword}
            </label>
            <input type="button" value="상세검색" onClick={onClickDetailSearchButton}/>
            <br/>
            <input type="button" value="+" onClick={onClickPlus}/>
            <input type="button" value="-" onClick={onClickMinus}/>

            <br/>
            {
                keywordInfoList.map((keywordInfo, index)=>{
                    return <DetailSearchKeywordBox key={index}
                     keywordInfo={keywordInfo}
                     onKeywordInfoChanged={onKeywordInfoChanged}>
                    </DetailSearchKeywordBox>;
                })
            }
        </div>
    );
}

export default DetailSearchKeywordList;