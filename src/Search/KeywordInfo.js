import SearchOperator from './SearchOperator';
import CombineOperator from './CombineOperator';

function KeywordInfo()
{
    this.keyword = '';
    this.searchOperator = SearchOperator.NONE;
    this.combineOperator = CombineOperator.AND;
    this.bMustCorrect = false;
    this.lastBuildDate = new Date();
}

export default KeywordInfo;