import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city) => {
        const apiKey = "9924eb364c42d8d33f2b25357135caee"
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const json = await response.json();
        console.log(json);
        return json;
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        isLoading: false,
        hasError: false,
        currentWeather: {}
    },
    extraReducers: {
        [fetchWeather.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
          },
        [fetchWeather.fulfilled]: (state, action) => {
            const { clouds, main, weather} = action.payload;
            state.isLoading = false;
            state.hasError = false;
            state.currentWeather = {couds: clouds, temp: main.temp, weather: weather[0]};
        },
        [fetchWeather.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
          }
    }
})

export default weatherSlice.reducer;
export const selectWeather = state => state.weather.currentWeather;
export const selectIsLoading = state => state.isLoading;