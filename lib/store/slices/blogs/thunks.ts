import { API_END_POINTS, BASE_URL, fetchData } from "@/utilities/api/apiConfig";
import { Blog } from "@/utilities/commonInterface/commonInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Create async thunk for fetching blogs
export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (_, { rejectWithValue, getState }) => {
    try {
      return fetchData<Blog[]>(
        {},
        {},
        `data/${API_END_POINTS.BLOGS}`,
        BASE_URL
      );
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// // Create async thunk for adding a new blog
// export const addBlog = createAsyncThunk(
//   "blogs/addBlog",
//   async (newBlog: Blog) => {
//     const response = await axios.post("/api/blogs", newBlog); // Adjust the API endpoint as needed
//     return response.data;
//   }
// );
