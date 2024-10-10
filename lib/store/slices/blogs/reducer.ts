// store/blogSlice.ts
import { Blog, BlogState } from "@/utilities/commonInterface/commonInterface";
import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogs } from "./thunks";

// Define the initial state
const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
};

// Create the blog slice
const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    // Optional synchronous reducers can go here
    clearError(state) {
      state.error = null;
    },
    addBlogs: (state, action) => {
      state.blogs = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        console.log("blogs", action.payload.data);
        state.blogs = action.payload.data; // Assuming payload is an array of blogs
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch blogs";
      });
    // .addCase(addBlog.fulfilled, (state, action) => {
    //   state.blogs.push(action.payload); // Assuming payload is the newly created blog
    // });
  },
});

// Export actions and reducer
export const { clearError, addBlogs } = blogSlice.actions;
export default blogSlice.reducer;
