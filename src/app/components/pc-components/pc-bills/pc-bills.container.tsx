import {FC, memo, useEffect} from 'react';
import React from 'react';
// import {useDispatch} from "react-redux";
import {PartyCalcTableData} from "../../../models/pc-table.model";
import {PartyCalcTableDataMap} from "../../../models/pc-types.model";
import PartyCalcBillsComponent from "./pc-bills.component";

const PartyCalcBillsContainer: FC = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     // dispatch(loadTitles);
    // }, [dispatch]);

    const titles: string[] = [];
    const fullData: PartyCalcTableDataMap = new Map<string, PartyCalcTableData[]>();

    const productsChange = () => {
        console.log("productsChange");
    };

    const namesChange = () => {
        console.log("namesChange");
    };

    return <PartyCalcBillsComponent titles={titles}
                                    tableDataMap={fullData}
                                    onProductsChange={productsChange}
                                    onNamesChange={namesChange}/>;
}

export default memo(PartyCalcBillsContainer);