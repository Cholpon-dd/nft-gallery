import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCards = createAsyncThunk('card/fetchCards',
    async () => {
    const {data} = await axios.get(`https://api.opensea.io/api/v1/assets?format=json`)

        return data

    })


const cardSlice = createSlice({
    name: 'card',
    initialState: {
        cards: [],
        status: 'loading'
    },
    reducers: {
        setItems(state,action) {
            state.items = action.payload
        }

    },
    extraReducers: {
        [fetchCards.pending]: (state) => {
            state.status = 'loading'
            state.cards = []
        },
        [fetchCards.fulfilled]: (state, action) => {
            state.cards = action.payload.assets
            state.status = 'success'
        },
        [fetchCards.rejected]: (state, action) => {
            state.status =' error'
            state.items = []
        }
    }
})
export const selectCardsItem = (state => state.cards)

export const {setItems} = cardSlice.actions

export default cardSlice.reducer