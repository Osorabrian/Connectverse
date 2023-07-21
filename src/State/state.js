import {create} from 'zustand'

export const useStore = create((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: () => set({isLoggedIn: true}),
    setisLoggedOut: () => set({isLoggedIn: false})
}))