import {configureStore} from '@reduxjs/toolkit';
import libraryReducer from './cartSlice';


const appStore = configureStore({
    reducer: {
        library: libraryReducer,
    },
});
export default appStore;