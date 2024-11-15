import { createEditStore } from "../../../hooks/createEditStore";
import { Servicio } from "../models/servicio.model";

export const useEditServicio = createEditStore<Servicio>()
