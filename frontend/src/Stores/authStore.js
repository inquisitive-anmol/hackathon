import { create } from "zustand";
const apiUrl = import.meta.env.VITE_API_URL;
import axios from "axios";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
  login: async (email, password) => {
   try{
    const response = await axios.post(`${apiUrl}/api/v1/login`, { email, password }, {withCredentials: true});
    set((state) => ({ state: { isAuthenticated: true } }));
    console.log(response);
    return response.data;
   } catch (error) {
    console.log(error);
    return error;
   }
  },
}));
