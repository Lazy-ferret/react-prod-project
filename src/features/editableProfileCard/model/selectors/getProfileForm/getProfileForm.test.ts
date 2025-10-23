import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm test', () => {
    test('should return form', () => {
        const data = {
            username: 'admin',
            age: 41,
            country: Country.Russia,
            lastname: 'Ves',
            first: 'Alex',
            city: 'Msc',
            currency: Currency.RUB,

        };
        const state: DeepPartial<StateSchema> = {
            profile: { form: data },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
