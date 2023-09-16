import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

// just create variable for setting the URL value 
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery, // short for baseQuery: baseQuery 
  tagTypes: ['Product', 'Order', 'User'],  //caching titles 
  endpoints: (builder) => ({}),            // just convention, other slices can implement builder like builder.mutation()  
});
