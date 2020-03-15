import Faker from 'faker';

function buildFakeData(id) {
    return {
        id: id,
        firstName: Faker.name.firstName(),
        lastName: Faker.name.lastName(),
        birthDay: Faker.date.past(98).toDateString(),
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
    sort: '',
    search: ''
};

for (let i = 1; i <= 40; i++) {
    initialState.data.push(buildFakeData(i));
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SORT':
            return state;
        case 'SEARCH':
            return state;
        default:
            break;
    }
    return state;
}

export default reducer;