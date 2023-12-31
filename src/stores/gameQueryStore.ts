import { create } from "zustand";


export interface GameQuery {
    genre_id?: number;
    platform_id?: number;
    sortOrder?: string;
    searchText?: string;
  }

interface GameQueryStore {
    gameQuery: GameQuery,
    setSearchText: (searchText: string) => void,
    setGenreId: (genre_id: number) => void,
    setPlatformId: (platform_id : number) => void,
    setSortOrder: (sortOrder: string) => void,

}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(store => ({gameQuery:{searchText}})),
    setGenreId: (genre_id) => set(store => ({gameQuery:{...store.gameQuery , genre_id}})),
    setPlatformId: (platform_id) => set(store => ({gameQuery:{...store.gameQuery , platform_id}})),
    setSortOrder: (sortOrder) => set(store => ({gameQuery:{...store.gameQuery ,sortOrder}})),
}));

export default useGameQueryStore;