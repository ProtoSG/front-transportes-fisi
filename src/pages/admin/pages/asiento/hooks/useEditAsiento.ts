import { createEditStore } from "../../../hooks/createEditStore";
import { Asiento } from "../models/asiento.model";

export const useEditAsiento = createEditStore<Asiento>()
