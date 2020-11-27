let SearchOperator = Object.freeze({
    NONE : {displayName:'기본', value:''},
    MUST_HAVE : {displayName:'반드시 포함', value:'+'},
    EXCLUDE : {displayName:'검색 기록에서 제외', value:'-'}
});

export default SearchOperator;