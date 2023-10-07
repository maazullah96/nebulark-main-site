import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const PRODUCTS_URL = 'http://localhost:3000/api/products'

const initialState = {
  products: [],
  status: 'idle', // idle |'loading', 'succeddeed' | failed
  error: null
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await axios.get(PRODUCTS_URL)
      return [...response.data]
    } catch (error) {
      console.log(error)
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.products = state.products.concat(action.payload)
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export const getAllProducts = (state) => state.products.products
export const getProductsStatus = (state) => state.products.status
export const getProductsError = (state) => state.products.error

// export {}
export default productsSlice.reducer
