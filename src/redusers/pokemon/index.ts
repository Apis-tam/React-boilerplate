import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemon } from "../../action/pokemon";
import type { IPokemonByIdResponse } from "../../action/pokemon";
import { isError } from "../../utils";

interface IPokemonState {
  pokemon: IPokemonByIdResponse | null;
  loading: boolean;
  error: unknown | null;
}

const initialState: IPokemonState = {
  pokemon: null,
  loading: false,
  error: null,
};

const pokemon = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemon.fulfilled, (state, { payload }) => {
        state.pokemon = payload;
        state.loading = false;
      }) // You can use two variants for Errors
      .addCase(fetchPokemon.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }) // For works with all rejected request tou can use addMatcher
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

//if you have  sync action in reducer you can use this method to export action
// export const { getPokemon } = pokemon.actions;

export default pokemon.reducer;
