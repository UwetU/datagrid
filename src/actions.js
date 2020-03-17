export const search = (e) => ({
    type: 'SEARCH',
    valueSearch: e.target.value
});

export const sort = () => ({ type: 'SORT' });