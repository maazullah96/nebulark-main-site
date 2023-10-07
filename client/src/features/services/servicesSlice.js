import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const SERVICES_URL = 'http://localhost:3000/api/services'

const initialState = {
  services: [],
  status: 'idle', // idle |'loading', 'succeddeed' | failed
  error: null
}

export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async () => {
    try {
      const response = await axios.get(SERVICES_URL)
      return [...response.data]
    } catch (error) {
      console.log(error)
    }
  }
)

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchServices.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.services = state.services.concat(action.payload)
    })
    builder.addCase(fetchServices.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export const getAllServices = (state) => state.services.services
export const getServicesStatus = (state) => state.services.status
export const getServicesError = (state) => state.services.error

// export {}
export default servicesSlice.reducer
