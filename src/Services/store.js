import { configureStore } from '@reduxjs/toolkit'
import { articleapi } from './article'

export const store =  configureStore({
  reducer: {
    [articleapi.reducerPath]:articleapi.reducer
    
    
  },
  //create a middleware with concat
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleapi.middleware)
  
})