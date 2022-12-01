import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemon } from "../../action/pokemon";
import type { IPokemonByIdResponse } from "../../action/pokemon";

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
  reducers: {
    getPokemon: (state) => {
      state.loading = true;
    },
    getPokemonSuccess: (state, action) => {
      state.pokemon = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemon.fulfilled, (state, { payload }) => {
        state.pokemon = payload;
        state.loading = false;
      })
      .addCase(fetchPokemon.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { getPokemon, getPokemonSuccess } = pokemon.actions;

export default pokemon.reducer;
