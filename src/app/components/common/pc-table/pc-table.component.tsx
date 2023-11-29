import {FC, useRef, useState} from 'react';
import React from 'react';
import {SearchOutlined} from '@ant-design/icons';
import type {InputRef} from 'antd';
import {Button, Input, Space, Switch, Table} from 'antd';
import type {ColumnType} from 'antd/es/table';
import type {FilterConfirmProps} from 'antd/es/table/interface';
//@ts-ignore
import Highlighter from 'react-highlight-words';
import {labels} from "../../../enums/labels";
import {PartyCalcResultData, PartyCalcTableData} from "../../../models/pc-table.model";
import {PartyCalcEditableColumnType} from "../../../models/pc-types.model";

interface PartyCalcTableComponentProps {
    columns: PartyCalcEditableColumnType[],
    data: PartyCalcTableData[] | PartyCalcResultData[];
    onSelectedChange?: (value: boolean) => void;
}

type DataIndex = keyof PartyCalcTableData;

const PartyCalcTableComponent: FC<PartyCalcTableComponentProps> = (
    {
        columns,
        data,
        onSelectedChange
    }
) => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    // const onRowSelectChange = (newSelectedRowKeys: React.Key[]) => {
    //     console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    //     setSelectedRowKeys(newSelectedRowKeys);
    //     onSelectedChange(newSelectedRowKeys.length > 0);
    // };

    // const rowSelection = {
    //     selectedRowKeys,
    //     onChange: onRowSelectChange,
    // };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    //TODO: move to a helper
    // @ts-ignore
    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<PartyCalcTableData> => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters, close}) => (
            <div style={{padding: 8}} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={labels.search + ` ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{marginBottom: 8, display: 'block'}}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{width: 90}}
                    >
                        {labels.search}
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{width: 90}}
                    >
                        {labels.reset}
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({closeDropdown: false});
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        {labels.filter}
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        {labels.close}
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>
        ),
        onFilter: (value, record) =>
            //@ts-ignore
             record ? record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()) : false,
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightClassName='_highlighted'
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    return <Table className='pc-table'
                  bordered
                  // rowSelection={rowSelection}
                  columns={columns}
                  dataSource={data}/>;
    // paginator
};

export default PartyCalcTableComponent;