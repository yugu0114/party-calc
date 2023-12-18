import {ColumnType} from "antd/es/table";
import {PartyCalcTableData} from "../models/pc-table.model";
import {Button, Input, InputRef, Space} from "antd";
import {labels} from "../enums/labels";
import {SearchOutlined} from "@ant-design/icons";
import React from 'react';
import {MutableRefObject} from "react";
//@ts-ignore
import Highlighter from 'react-highlight-words';

type DataIndex = keyof PartyCalcTableData;
//
// export function getColumnSearchProps (dataIndex: DataIndex,
//                                       searchInput: MutableRefObject<InputRef>,
//                                       handleSearch: any, //11 type is function
//                                       handleReset: any, //11 type is function
//                                       searchText: string,
//                                       setSearchText: any, //11
//                                       searchedColumn: string,
//                                       setSearchedColumn: any, //11
//                                       ): ColumnType<PartyCalcTableData> {
//     return {
//         filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters, close}) => (
//             <div style={{padding: 8}} onKeyDown={(e) => e.stopPropagation()}>
//                 <Input
//                     ref={searchInput}
//                     placeholder={labels.search + ` ${dataIndex}`}
//                     value={selectedKeys[0]}
//                     onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//                     onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
//                     style={{marginBottom: 8, display: 'block'}}
//                 />
//                 <Space>
//                     <Button
//                         type="primary"
//                         onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
//                         icon={<SearchOutlined/>}
//                         size="small"
//                         style={{width: 90}}
//                     >
//                         {labels.search}
//                     </Button>
//                     <Button
//                         onClick={() => clearFilters && handleReset(clearFilters)}
//                         size="small"
//                         style={{width: 90}}
//                     >
//                         {labels.reset}
//                     </Button>
//                     <Button
//                         type="link"
//                         size="small"
//                         onClick={() => {
//                             confirm({closeDropdown: false});
//                             setSearchText((selectedKeys as string[])[0]);
//                             setSearchedColumn(dataIndex);
//                         }}
//                     >
//                         {labels.filter}
//                     </Button>
//                     <Button
//                         type="link"
//                         size="small"
//                         onClick={() => {
//                             close();
//                         }}
//                     >
//                         {labels.close}
//                     </Button>
//                 </Space>
//             </div>
//         ),
//         filterIcon: (filtered: boolean) => (
//             <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>
//         ),
//         onFilter: (value, record) =>
//             //@ts-ignore
//             record[dataIndex]
//                 .toString()
//                 .toLowerCase()
//                 .includes((value as string).toLowerCase()),
//         onFilterDropdownOpenChange: (visible) => {
//             if (visible) {
//                 setTimeout(() => searchInput.current?.select(), 100);
//             }
//         },
//         render: (text) =>
//             searchedColumn === dataIndex ? (
//                 <Highlighter
//                     highlightClassName='_highlighted'
//                     searchWords={[searchText]}
//                     autoEscape
//                     textToHighlight={text ? text.toString() : ''}
//                 />
//             ) : (
//                 text
//             ),
//     };
// };
export function a() {

}