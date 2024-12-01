import { createEditStore } from "../../../hooks/createEditStore";
import { Bus} from "../models/bus.model";
export const useEditBus = createEditStore<Bus>()
