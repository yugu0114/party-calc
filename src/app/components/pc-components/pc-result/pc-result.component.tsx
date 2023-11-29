import {FC} from 'react';
import React from 'react';
import {PartyCalcEditableColumnType} from "../../../models/pc-types.model";
import {labels} from "../../../enums/labels";
import {PartyCalcResultData, PartyCalcTableData} from "../../../models/pc-table.model";
import PartyCalcTableComponent from "../../common/pc-table/pc-table.component";

interface PartyCalcResultComponentProps {
    showDetails: boolean;
}

const PartyCalcResultComponent: FC<PartyCalcResultComponentProps> = (
    {
        showDetails
    }
) => {
    const preCalcColumns: PartyCalcEditableColumnType[] = [
        {
            title: labels.name,
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            // ...getColumnSearchProps('name'),
            //@ts-ignore
            sorter: (a:PartyCalcTableData, b:PartyCalcTableData) => a.name.length - b.name.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: labels.payForMembers,
            dataIndex: 'payForMembers',
            key: 'payForMembers',
            width: '10%',
        },
        {
            title: labels.actualExpense,
            dataIndex: 'actualExpense',
            key: 'actualExpense',
            width: '20%',
        },
        {
            title: labels.expectedExpense,
            dataIndex: 'expectedExpense',
            key: 'expectedExpense',
            className: !showDetails ? '_hidden' : ''
        },
    ];

    const resultColumns: PartyCalcEditableColumnType[] = [
        {
            title: labels.from,
            dataIndex: 'from',
            key: 'from',
            width: '30%',
            // ...getColumnSearchProps('from'),
            //@ts-ignore
            sorter: (a:PartyCalcTableData, b:PartyCalcTableData) => a.name.length - b.name.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: labels.to,
            dataIndex: 'to',
            key: 'to',
            width: '30%',
            // ...getColumnSearchProps('to'),
            //@ts-ignore
            sorter: (a:PartyCalcTableData, b:PartyCalcTableData) => a.name.length - b.name.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: labels.amount,
            dataIndex: 'amount',
            key: 'amount',
        },
    ];

    const inputTabData: PartyCalcTableData[] = [];// service pre calc result per one tab
    const outputTabData: PartyCalcResultData[] = [];// service result per one tab
    const totalOutputData: PartyCalcResultData[] = [];// service result!!!!!!!!!

    return <>
        if (showDetails) {
            <div className='pc-result__details'>

                // for each tab
                // name of tab, total count, total mew members, per person, who is fine (delta is 0)

                <PartyCalcTableComponent columns={preCalcColumns}
                                         data={inputTabData}
                ></PartyCalcTableComponent>

                <PartyCalcTableComponent columns={resultColumns}
                                         data={outputTabData}
                ></PartyCalcTableComponent>
            </div>
        }

        // sum for all tabs!!!!
        <PartyCalcTableComponent columns={resultColumns}
                                 data={totalOutputData}
        ></PartyCalcTableComponent>
        </>;
}

export default PartyCalcResultComponent;