import Axios from 'axios';
import SearchCategory from './SearchCategory'
import KeywordInfo from './KeywordInfo';

function SearchLibrary()
{
    static async function SearchData(keyword, category)
    {
        if(!Reflect.has(SearchCategory, category))
        {
            console.error('존재하지 않는 카테고리입니다. ' + category);
            return;
        }

        const client_id = '7so2YGouMMLsYKXoo0J3';
        const client_secret = 'qcwyCTBMQA';
    
        try
        {
            await Axios.get('/search/' + category + '?query=' + keyword, {
                headers: {
                'X-Naver-Client-Id':client_id,
                'X-Naver-Client-Secret': client_secret
                }
            }).then((res)=>{console.log(res.data)});
        }
        catch(err)
        {
            console.log('err : ' + err);
        }
    }

    static function MakeSearchKeyword(keywordInfoList)
    {
        let searchKeyword = '';
        for(let keywordInfo of keywordInfoList)
        {
          searchKeyword += SetupKeywordWithOperator(keywordInfo);
        }

        return searchKeyword;
    }

    static function SetupKeywordWithOperator(keywordInfo)
    {
        if(!keywordInfo instanceof KeywordInfo)
        {
            return '';
        }
        let keyword = keywordInfo.keyword;
        if(keywordInfo.bMustCorrect)
        {
            keyword = '\"' + keyword + '\"';
        }

        keyword = keywordInfo.searchOperator + keyword;
        keyword = keywordInfo.combineOperator + keyword;
        
        //keywordInfo.keyword = keyword;

        return keyword;
    }
}

export default SearchLibrary;