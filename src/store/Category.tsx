import { AnyAction, createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { client } from "../services/contentful";
import { RootState } from "./configureStore";

const slice = createSlice({
    name: 'Category',
    initialState: {
        type: 'barberin',
        barberin: {
            categories: [],
            products: [],
            category: 'all',
            totalProducts: 0,
            initialDataItems: [],
            totalItems: 0,
            page: 1,
        },
        servico: {
            categories: [],
            products: [],
            category: 'all',
            totalProducts: 0,
            initialDataItems: [],
            totalItems: 0,
            page: 1,
        },
        limitPerPage: 12,
        loading: false,
        error: null,
    },
    reducers: {
        setType(state: any, action: PayloadAction<string>) {
            state.type= action.payload
        },
        setCategory(state: any, action: PayloadAction<string>) {
            state[state.type].category= action.payload
            state[state.type].page = 1
        },
        setLoading(state: any, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        setPage(state: any, action: PayloadAction<number>) {
            state[state.type].page = action.payload
        },
        setProducts(state: any, action: PayloadAction<any>) {
            state[state.type].totalProducts = action.payload.total
            state[state.type].products = action.payload.items
            state.loading = false
        },
        setInitialData(state: any, action: PayloadAction<any>) {
            state[state.type].initialDataItems = action.payload.items
            state[state.type].products = action.payload.items
            state[state.type].totalItems = action.payload.total
        }
    }
})
export const {setType, setCategory, setLoading, setPage, setProducts, setInitialData} = slice.actions


export const getProducts = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const { limitPerPage, type } = getState().Category
    const {category, totalItems, initialDataItems, page} = (getState() as any).Category[type]

    dispatch(setLoading(true))
    const skip = page === 1 ? 0 : (page - 1) * limitPerPage

    if (category === 'all') {
        if (page === 1) {
            dispatch(setProducts({items: initialDataItems, total: totalItems}))
        } else {
            const data = await client.getEntries({content_type: `${type}`, 'limit': limitPerPage, 'skip': skip})
            dispatch(setProducts(data))
        }
    } else {
        const data = await client.getEntries({'metadata.tags.sys.id[in]': `${category}`, 'limit': limitPerPage, 'skip': skip})
        dispatch(setProducts(data))
    }

}


export default slice.reducer