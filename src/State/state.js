import {create} from 'zustand'

export const useTextStore = create((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: () => set({isLoggedIn: true}),
    setisLoggedOut: () => set({isLoggedIn: false})
}))