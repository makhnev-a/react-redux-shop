import * as R from 'ramda';

// export const getPhoneById = (state, id) => state.phones[id];
export const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getPhones = state => {
    return R.map((id => getPhoneById(state, id)), state.phonesPage.ids);
};

export const getRenderedPhonesLength = state => {
    return R.length(state.phonesPage.ids);
};