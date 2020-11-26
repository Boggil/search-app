import React, {useState} from 'react';
import KeywordInfo from '../Search/KeywordInfo';
import DetailSearchKeywordBox from './DetailSearchKeywordBox';

function DetailSearchKeywordList({detailKeywordCount})
{
    const [detailKeywordInfoList, setDetailKeywordInfoList] = useState([]);

    function onClickPlus(event)
    {
        detailKeywordInfoList.push(new KeywordInfo());
    }

    function onClickMinus(event)
    {
        detailKeywordInfoList.pop();
    }

    return(
        <div>            
            <input type="button" value="+" onClick={onClickPlus}/>
            <input type="button" value="-" onClick={onClickMinus}/>

            <br/>
            {
                detailKeywordInfoList.map((keywordInfo, index)=>{
                    return <DetailSearchKeywordBox key={index}>
                    </DetailSearchKeywordBox>;
                })
            }
        </div>
    );
}

export default DetailSearchKeywordList;