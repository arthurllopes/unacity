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
        category: 'pet',
        page: 1,
        totalProducts: 0,
        limitPerPage: 12,
        loading: false,
        products: [],
        error: null
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
        setTotalProducts(state: any, action: PayloadAction<number>) {
            state.totalProducts = action.payload
        },
        setProducts(state: any, action: PayloadAction<any>) {
            state.products = action.payload
        }
    }
})
export const {setAllCategories, setCategory, setLoading, setPage, setTotalProducts, setProducts} = slice.actions

export const getCategories = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const {items} = await client.getEntries({
        content_type: 'categoria'
    })
    const storedCategoriesAtribbutes = items.map((item: any) => (item.fields))
    console.log('stored', storedCategoriesAtribbutes)
    console.log('rodou')

    dispatch(setAllCategories(storedCategoriesAtribbutes))
}
export const getProducts = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    const {page, category, limitPerPage } = getState().Category

    dispatch(setLoading(true))
    const skip = page === 1 ? 0 : (page - 1) * limitPerPage

    const data = await client.getEntries({'metadata.tags.sys.id[in]': `${category}`, 'limit': limitPerPage, 'skip': skip})
    console.log(data)
    dispatch(setTotalProducts(data.total))

    dispatch(setProducts(data.items))


    dispatch(setLoading(false))
}


export default slice.reducer