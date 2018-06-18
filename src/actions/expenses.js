import uuid from 'uuid';
const uuidv1 = require('uuid/v1');
export const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv1(),description,note,amount,createdAt

    }
});

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// Edit Expense
export const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE', id, updates
});