import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [  
        "Model S", 
        "Model 3", 
        "Model X",
        "Model Y",
        "Solar Roof",
        "Solar Panels",
        "Existing Inventory",
        "Used Inventory",
        "Trade-In",
        "Text Drive",
        "Powerwall",
        "Commercial Energy",
        "Utilities",
        "Charging",
        "Find Us",
        "Support",
        "More"
    ]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer