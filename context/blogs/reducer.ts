import type { Blog } from '@prisma/client';

type addBlogs = {
  type: 'ADD_BLOGS';
  payload: Blog[];
};

export type AdjustmentAction = addBlogs;

export type StateType = {
  blogs: Blog[];
};

export const reducer = (state: StateType, action: AdjustmentAction) => {
  switch (action.type) {
    case 'ADD_BLOGS': {
      state.blogs.push(...action.payload);
      return state;
    }
    default:
      return state;
  }
};
