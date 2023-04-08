import { IPost } from "../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface PostState {
  posts: IPost[];
  trashCan: IPost[];
  isTrashCanEmpty: boolean;
}
interface AddPostType {
  text: string;
  title: string;
}

const initialState: PostState = {
  posts: [
    {
      id: 1,
      isCompleted: false,
      date: "2",
      subtitle: "2",
      title: "3",
      selected: false,
    },
  ],
  trashCan: [],
  isTrashCanEmpty: true,
};

export const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts(state, action: PayloadAction<AddPostType>) {
      state.posts.push({
        id: Date.now(),
        isCompleted: false,
        date: Date.now().toLocaleString(),
        subtitle: action.payload.title,
        title: action.payload.text,
        selected: false,
      });
    },
    selectPost(state, action: PayloadAction<IPost>) {
      state.trashCan = state.trashCan.map((post) =>
        post.id === action.payload.id
          ? { ...post, selected: !post.selected }
          : post
      );
      console.log(state.trashCan, "trashCan");
    },
    removePosts(state, action: PayloadAction<number>) {
      state.posts.map(
        (post) => post.id === action.payload && state.trashCan.push(post)
      );
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    removeTrashCanPosts(state) {
      state.trashCan = state.trashCan.filter(
        (trashCan) => trashCan.selected == false
      );
    },
    returnRemovePosts(state) {
      state.trashCan.map((post) =>
        post.selected == true
          ? state.posts.push(post)
          : console.log(post.selected)
      );
      state.trashCan = state.trashCan.filter((post) => post.selected == false);
    },
    checkIsTranshCanEmpty(state) {
      state.trashCan.length > 0
        ? (state.isTrashCanEmpty = false)
        : (state.isTrashCanEmpty = true);
    },
    resetSelection(state) {
      console.log(state.trashCan,"lol");
      state.trashCan.map((post) => (post.selected = false));
      console.log(state.trashCan,"lol");
    },
  },
});

export default PostSlice.reducer;
export const {
  addPosts,
  removePosts,
  removeTrashCanPosts,
  returnRemovePosts,
  selectPost,
  checkIsTranshCanEmpty,
  resetSelection,
} = PostSlice.actions;
