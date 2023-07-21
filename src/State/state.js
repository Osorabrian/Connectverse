import {create} from 'zustand'

export const useStore = create((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (str) => set({isLoggedIn: str})
}))