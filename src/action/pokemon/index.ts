import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/index";

export interface IPokemonByIdResponse {
  name: string;
  sprites: { back_default: string };
}

//Generic for  createAsyncThunk <typeResponse,dataWthatYouSend,type of AsyncThunkConfig library>

export const fetchPokemon = createAsyncThunk<
  IPokemonByIdResponse,
  string,
  { rejectValue: unknown }
  //"pokemon/getPokemon" - pokemon =name of Reducer; getPokemon = name of Action
>("pokemon/getPokemon", async (userId: string, { rejectWithValue }) => {
  try {
    const response = await axios.get(userId);

    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
