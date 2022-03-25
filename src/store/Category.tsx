import { AnyAction, createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { client } from "../services/contentful";
import { RootState } from "./configureStore";

export type SocialPost = {
    id: number;
    date: any,
    social: any,
    img: any,
    status: string,
    text: string
}

const slice = createSlice({
    name: 'Category',
    initialState: {
        categories: [],
        category: 'all',
        page: 1,
        totalProducts: 0,
        limitPerPage: 12,
        loading: false,
        products: [],
        error: null,
        initialDataItems: [],
        totalItems: 0
    },
    reducers: {
        setAllCategories(state: any, action: PayloadAction<any>){
            state.categories = action.payload
        },
        setCategory(state: any, action: PayloadAction<string>) {
            state.category = action.payload
        },
        setLoading(state: any, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        setPage(state: any, action: PayloadAction<number>) {
            state.page = action.payload
        },
        setProducts(state: any, action: PayloadAction<any>) {
            state.totalProducts = action.payload.total
            state.products = action.payload.items
            state.loading = false
        },
        setInitialData(state: any, action: PayloadAction<any>) {
            state.initialDataItems = action.payload.items
            state.products = action.payload.items
            state.totalItems = action.payload.total
        }
    }
})
export const {setAllCategories, setCategory, setLoading, setPage, setProducts, setInitialData} = slice.actions

export const getCategories = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const {items} = await client.getEntries({
        content_type: 'categoria'
    })
    const storedCategoriesAtribbutes = items.map((item: any) => (item.fields))
    dispatch(setAllCategories(storedCategoriesAtribbutes))
}

export const getProducts = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const {page, category, limitPerPage, initialDataItems, totalItems } = getState().Category

    dispatch(setLoading(true))
    const skip = page === 1 ? 0 : (page - 1) * limitPerPage

    if (category === 'all') {
        if (page === 1) {
            dispatch(setProducts({items: initialDataItems, total: totalItems}))
        } else {
            const data = await client.getEntries({content_type: 'barberin', 'limit': limitPerPage, 'skip': skip})
            dispatch(setProducts(data))
        }
    } else {
        const data = await client.getEntries({'metadata.tags.sys.id[in]': `${category}`, 'limit': limitPerPage, 'skip': skip})
        dispatch(setProducts(data))
    }

}


export default slice.reducer