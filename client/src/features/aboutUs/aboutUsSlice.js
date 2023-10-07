import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const ABOUTUS_URL = 'http://localhost:3000/api/about-us'

const initialState = {
  aboutUs: {},
  status: 'idle',
  error: null
}

export const fetchAboutUs = createAsyncThunk(
  'aboutUs/fetchAboutUs',
  async () => {
    try {
      const response = await axios.get(ABOUTUS_URL)
      return response.data
      // []
    } catch (error) {
      console.log(error)
    }
  }
)
const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAboutUs.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(fetchAboutUs.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.aboutUs = action.payload
    })
    builder.addCase(fetchAboutUs.rejected, (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    })
  }
})

export const getAboutUsData = (state) => state.aboutUs.aboutUs
export const getAboutUsStatus = (state) => state.aboutUs.status
export const getAboutUsError = (state) => state.aboutUs.error
export default aboutUsSlice.reducer
