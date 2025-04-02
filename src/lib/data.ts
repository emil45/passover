import { ToolData } from "@/types/tool";
import { yemenData } from "@/lib/tribeYemenData";
import { chabadData } from "@/lib/tribeChabadData";
import { ashkenazData } from "@/lib/tribeAshkenazData";
import { eastData } from "@/lib/tribeEastData";

export const tribes = [
  { id: "east", name: "עדות המזרח", disabled: false },
  { id: "ashkenaz", name: "אשכנז", disabled: true },
  { id: "chabad", name: "חב״ד", disabled: true },
  { id: "teiman", name: "תימן", disabled: true },
];

export const tribesData: Record<string, ToolData[]> = {
  east: eastData,
  ashkenaz: ashkenazData,
  chabad: chabadData,
  teiman: yemenData,
};
