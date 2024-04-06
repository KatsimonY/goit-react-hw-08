import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps"
import { selectFilter } from "./filtersSlice"

const pendingParams = state => {
    state.loading = true;
    state.error = null;
}

const rejectedParams = state => {
    state.loading = false;
    state.error = true;
}

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, pendingParams)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, rejectedParams)
            .addCase(addContact.pending, pendingParams)
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, rejectedParams)
            .addCase(deleteContact.pending, pendingParams)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(item => item.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, rejectedParams)
})

export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter], (contacts, filter) => {
        return contacts.filter(
            (contact) =>
                !filter || contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    })
export default slice.reducer;