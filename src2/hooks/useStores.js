import { useContext } from "react";
import StoresContext from "../context/stores";

export default function useStores(...names) {
  let stores = useContext(StoresContext)

  return names.map(name => stores[name])
}