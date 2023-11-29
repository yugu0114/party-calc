import {FC} from 'react';
import React from 'react';
import {PartyCalcEditableColumnType, PartyCalcTableDataMap} from "../../../models/pc-types.model";
import {Button, Dropdown} from "antd";
import {labels} from "../../../enums/labels";
import {PartyCalcTableData} from "../../../models/pc-table.model";
import PartyCalcTableComponent from "../../common/pc-table/pc-table.component";

interface PartyCalcBillsProps {
    titles: string[];
    tableDataMap: PartyCalcTableDataMap;
    onProductsChange: () => void;
    onNamesChange: () => void;
}

const PartyCalcBillsComponent: FC<PartyCalcBillsProps> = (
    {
        titles,
        tableDataMap,
        onProductsChange,
        onNamesChange
    }
) => {
    const openAddProductPopup = () => {
        // open popup
        // ...
        // onProductsChange()
    };

    const  openRemoveProductPopup = () => {
        // open popup
        // ...
        // onNamesChange()
    };

    const columns: PartyCalcEditableColumnType[] = [
        {
            title: labels.name,
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            // ...getColumnSearchProps('name'),
            //@ts-ignore
            sorter: (a:PartyCalcTableData, b:PartyCalcTableData) => a.name.length - b.name.length,
            sortDirections: ['descend', 'ascend'],
            // editable: false
        },
        {
            title: labels.payForMembers,
            dataIndex: 'payForMembers',
            key: 'payForMembers',
            editable: true,
        },
        {
            title: labels.actualExpense,
            dataIndex: 'actualExpense',
            key: 'actualExpense',
            width: '20%',
            editable: true,
        },
        // remove button render
    ];

    let selectedTabName = "";

    return <>

        <div className='pc-products'>
            {/*for()*/}
            {/*<Tabs>*/}
            {/*/!*<div>{title[i]}</div>*!/ // header*/}
            <div className='pc-products__actions'>
                {/*<Dropdown>*/}
                {/*    <Button type="primary"*/}
                {/*            onClick={openAddProductPopup}>*/}
                {/*        {labels.add}*/}
                {/*    </Button>*/}
                {/*    <Button onClick={openRemoveProductPopup}>*/}
                {/*        {labels.remove}*/}
                {/*    </Button>*/}
                {/*</Dropdown>*/}
            </div>
        </div>

        <Button>{labels.add + labels.name}</Button>
        <PartyCalcTableComponent columns={columns}
                                 data={tableDataMap.get(selectedTabName) || []}
        ></PartyCalcTableComponent>
    </>;
}

export default PartyCalcBillsComponent;