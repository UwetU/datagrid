export const search = (e) => ({
    type: 'SEARCH',
    valueSearch: e.target.value
});

export const sort = (e, sortBy) => ({
    type: sortBy ? 'SORT_DESC' : 'SORT_ASC',
    el: e.target.textContent ? e.target.textContent : e.target.value
});