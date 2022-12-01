import { useState, useEffect } from "react";
import { fetchPokemon } from "../action/pokemon";
import { useAppDispatch, useAppselector } from "../hooks/reduxHooks";

export const usePokemon = () => {
  const dispatch = useAppDispatch();
  const pokemon = useAppselector((state) => state.pokemon);
  const [helth, setHelth] = useState(100);
  const [attackPoint, setAttackPoint] = useState(0);
  const [info, setInfo] = useState({ name: "", img: "" });

  useEffect(() => {
    dispatch(fetchPokemon(Math.floor(Math.random() * 100).toString()));
  }, [dispatch]);
  useEffect(() => {
    setInfo({
      name: pokemon.pokemon?.name || "",
      img: pokemon.pokemon?.sprites.back_default || "",
    });
  }, [pokemon]);

  const demage = (demage: number) => {
    setHelth((prev) => prev - demage);
  };

  const newPokemon = () => {
    dispatch(fetchPokemon(Math.floor(Math.random() * 100).toString()));
  };

  return {
    setAttackPoint,
    demage,
    helth,
    attackPoint,
    info,
    newPokemon,
    setHelth,
  };
};
