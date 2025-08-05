import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk("Cart/fetchProducts", async () => {
  const res = await axios.get("http://localhost:5000/api/products");
  return res.data;
});



const cartSlice=createSlice({
  name:'Cart',
  initialState:{
    products:[],
    wishlist:[],
    loading:false,
    error:null,
  },
  reducers:{
   additem: (state, action) => {
  const newProduct = {
    ...action.payload,
    id: state.products.length + 1, // auto-increment ID
  };
  state.products.push(newProduct);
},

  addToCart: (state, action) => {
     const existing = state.wishlist.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.wishlist.push({ ...action.payload, quantity: 1 });
      }
    },
  addToCart: (state, action) => {
  const existing = state.wishlist.find(item => item._id === action.payload._id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.wishlist.push({ ...action.payload, quantity: 1 });
  }
},
removeFromCart: (state, action) => {
  state.wishlist = state.wishlist.filter(item => item._id !== action.payload);
},
decreaseQuantity: (state, action) => {
  const item = state.wishlist.find(item => item._id === action.payload);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  } else {
    state.wishlist = state.wishlist.filter(i => i._id !== action.payload);
  }
},

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export const {additem,addToCart,removeFromCart,decreaseQuantity}=cartSlice.actions;

export default cartSlice.reducer;