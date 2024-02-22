// likes.store.ts
import { create, StateCreator } from "zustand";
import {
  persist,
  PersistOptions,
  StateStorage,
} from "zustand/middleware";

interface LikesState {
  likesCount: Record<number, number>; // Use a record to store likesCount for each organization
  likes: Record<number, boolean>; // Use a record to store isLiked for each organization
  incrementLikes: (organizationId: number) => void;
  decrementLikes: (organizationId: number) => void;
  toggleLike: (organizationId: number) => void;
}

type MyPersistLikes = (
  config: StateCreator<LikesState>,
  options: PersistOptions<LikesState>
) => StateCreator<LikesState>;

export const useLikesStore = create<LikesState>(
  (persist as MyPersistLikes)(
    (set) => ({
      likesCount: {},
      likes: {},
      incrementLikes: (organizationId) =>
        set((state) => ({
          likesCount: {
            ...state.likesCount,
            [organizationId]: (state.likesCount[organizationId] || 0) + 1,
          },
          likes: {
            ...state.likes,
            [organizationId]: true,
          },
        })),
      decrementLikes: (organizationId) =>
        set((state) => ({
          likesCount: {
            ...state.likesCount,
            [organizationId]: Math.max((state.likesCount[organizationId] || 0) - 1, 0),
          },
          likes: {
            ...state.likes,
            [organizationId]: false,
          },
        })),
      toggleLike: (organizationId) =>
        set((state) => ({
          likesCount: {
            ...state.likesCount,
            [organizationId]: state.likes[organizationId] ? Math.max((state.likesCount[organizationId] || 0) - 1, 0) : (state.likesCount[organizationId] || 0) + 1,
          },
          likes: {
            ...state.likes,
            [organizationId]: !state.likes[organizationId],
          },
        })),
    }),
    {
      name: "LikesStore",
      getStorage: () => localStorage as StateStorage,
    }
  )
);
