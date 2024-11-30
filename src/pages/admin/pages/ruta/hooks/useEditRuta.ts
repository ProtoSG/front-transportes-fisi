import { createEditStore } from "../../../hooks/createEditStore";
import { Ruta } from "../models/ruta.model";
export const useEditRuta = createEditStore<Ruta>()
