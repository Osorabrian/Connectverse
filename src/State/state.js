import {create} from 'zustand'

export const useTextStore = create((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: () => set({isLoggedIn: true}),
    setisLoggedOut: () => set({isLoggedIn: false})
}))

export const useDataStore = create((set) => ({
    profileName: '',
    userId: 0,
    setprofileName: (str) => set({profileName: str}),
    setUserId: (int) => set({userId: int})
}))