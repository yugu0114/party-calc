import {PartyCalcTableData} from "./pc-table.model";
import {Table} from "antd";

export type PartyCalcTableDataMap = Map<string, PartyCalcTableData[]>;

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;
export type PartyCalcEditableColumnType = ColumnTypes[number] & { editable?: boolean; dataIndex: string; };

