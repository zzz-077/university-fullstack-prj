import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: () => {
        set({ isLoggedIn: true });
      },
      logout: () => {
        set({ isLoggedIn: false });
        localStorage.clear();
      },
    }),
    {
      name: "userLoginStatus",
    }
  )
);

export default useAuthStore;
