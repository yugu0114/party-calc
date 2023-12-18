import {FC} from 'react';
import React from 'react';
import {PartyCalcEditableColumnType, PartyCalcTableDataMap} from "../../../models/pc-types.model";
import {Button, Dropdown, Tabs, TabsProps} from "antd";
import type { MenuProps } from 'antd';
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
        titles=[],
        tableDataMap,
        onProductsChange,
        onNamesChange
    }
) => {
    let selectedTabName = titles[0];

    const columns: PartyCalcEditableColumnType[] = [
        {
            title: labels.name,
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            //@ts-ignore
            sorter: (a:PartyCalcTableData, b:PartyCalcTableData) => a.name.length - b.name.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: labels.payForMembers,
            dataIndex: 'payForMembers',
            key: 'payForMembers',
            width: '10%',
            editable: true,
        },
        {
            title: labels.actualExpense,
            dataIndex: 'actualExpense',
            key: 'actualExpense',
            width: '20%',
            editable: true,
        },
    ];

    const actionsMenu: MenuProps['items'] = [
        {
            key: '1',
            label: <Button onClick={(event: any) => openAddProductPopup(event)}>
                {labels.add}
            </Button>
        },
        {
            key: '2',
            label: <Button onClick={(event: any) => openRemoveProductPopup(event)}>
                {labels.remove}
            </Button>
        },
    ];

    const openAddProductPopup = (event: Event) => {
        // open popup
        // ...
        // onProductsChange()
        console.log("openAddProductPopup", selectedTabName);
        event.preventDefault();
    };

    const  openRemoveProductPopup = (event: Event) => {
        // open popup
        // ...
        // onNamesChange()
        console.log("openRemoveProductPopup ", selectedTabName);
        event.preventDefault();
    };

    const onTabChange = (key: string) => {
        const keyNumber = Number(key);
        if (keyNumber < titles?.length) {
            selectedTabName = titles[keyNumber];
        }
        console.log("onTabChange=", keyNumber, selectedTabName);
    };

    const openAddNamePopup = () => {
        console.log("openAddNamePopup ", selectedTabName);
    };

    const getTabsItems = (titles: string[]) => {
        const result: TabsProps['items'] = titles.map((title, index) => {
            return {
                key: index.toString(),
                label: title,
                children:
                    <div className='pc-products__tab'>
                        {title}
                    </div>
            };
        });
        return result;
    }

    return <>
        <div className='pc-products__tabs'>
            <Tabs defaultActiveKey="0" items={getTabsItems(titles)} onChange={onTabChange}/>
            <Dropdown menu={{ items : actionsMenu}} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    ...
                </a>
            </Dropdown>
        </div>

        <Button onClick={openAddNamePopup}>{labels.add + labels.name}</Button>
        <PartyCalcTableComponent columns={columns}
                                 data={tableDataMap.get(selectedTabName) || []}
                                 dataIndex={"name"}
        ></PartyCalcTableComponent>
    </>;
}

export default PartyCalcBillsComponent;