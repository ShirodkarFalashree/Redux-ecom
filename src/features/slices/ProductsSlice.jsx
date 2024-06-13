import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const initialState = {
    filteredProducts: JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct:JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        filterProducts(state, action) {
            try {
                const filter = storeData.filter((product) => product.type === action.payload);
                state.filteredProducts = filter;
                console.log('filter', filter);
                const saveState = JSON.stringify(filter);
                sessionStorage.setItem('filteredData', saveState);
            } catch (err) {
                console.error("Error filtering products:", err);
            }
        },
        singleProduct(state, action) {
            try {
                const oneProduct = storeData.filter((product) => product.id === action.payload);
                state.singleProduct=oneProduct;
                const saveState = JSON.stringify(oneProduct);
                sessionStorage.setItem("oneProduct",saveState);
            } catch (err) {
                return err;
            }
        },
    },

});

export const { filterProducts, singleProduct } = productsSlice.actions;
export default productsSlice.reducer;
