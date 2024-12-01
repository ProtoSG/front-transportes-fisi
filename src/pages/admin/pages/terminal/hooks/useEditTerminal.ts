import { createEditStore } from "../../../hooks/createEditStore";
import { Terminal} from "../models/terminal.model";
export const useEditTerminal = createEditStore<Terminal>()