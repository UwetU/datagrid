import Faker from 'faker';
import { orderBy } from 'lodash';

function buildFakeData(id) {
    return {
        id: id,
        firstname: Faker.name.firstName(),
        lastname: Faker.name.lastName(),
        birthday: Faker.date.past(98).toDateString(),
        gender: ['male', 'female', 'any'].sort(() => Math.random() - 0.5),
        married: Faker.random.boolean(),
        address: {
            country: Faker.address.country(),
            city: Faker.address.city(),
            zipcode: Faker.address.zipCode(),
        }
    }
}

const initialState = {
    data: [],
    sortBy: null
};

for (let i = 1; i <= 1000; i++) {
    initialState.data.push(buildFakeData(i));
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SORT_DESC':
            return {
                data: orderBy(initialState.data, action.el.toLowerCase(), 'desc'),
                sortBy: false
            }
        case 'SORT_ASC':
            return {
                data: orderBy(initialState.data, action.el.toLowerCase(), 'asc'),
                sortBy: true
            }
        case 'SEARCH':
            const firstName = initialState.data.filter(
                item =>
                    item.firstname.toLowerCase().indexOf(action.valueSearch.toLowerCase()) > -1,
            );

            const birthDay = initialState.data.filter(
                item =>
                    item.birthday.toLowerCase().indexOf(action.valueSearch.toLowerCase()) > -1,
            );

            const result = Array.from(new Set(firstName.concat(birthDay)));

            return {
                data: result
            }
        default:
            break;
    }
    return state;
}

export default reducer;