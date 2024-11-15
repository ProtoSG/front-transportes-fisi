import { createEditStore } from "../../../hooks/createEditStore";
import { Descuento } from "../models/descuento.model";

export const useEditDescuento = createEditStore<Descuento>()
