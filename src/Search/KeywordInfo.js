import SearchOperator from './SearchOperator';
import CombineOperator from './CombineOperator';

function KeywordInfo()
{
    let keyword = '';
    let searchOperator = SearchOperator.NONE;
    let combineOperator = CombineOperator.AND;
    let bMustCorrect = false;
    let lastBuildDate = new Date();
}

export default KeywordInfo;