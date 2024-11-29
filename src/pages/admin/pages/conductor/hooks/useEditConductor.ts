import { createEditStore } from "../../../hooks/createEditStore";
import { Conductor } from "../models/conductor.model";

export const useEditConductor = createEditStore<Conductor>()
