import {FC, useState} from "react";
import {labels} from "./enums/labels";
import {Switch} from "antd";
import PartyCalcBillsContainer from "./components/pc-components/pc-bills/pc-bills.container";
import PartyCalcResultComponent from "./components/pc-components/pc-result/pc-result.component";
import React from "react";

const PartyCalcApp: FC = () => {
    const [showDetails, setShowDetails] = useState(false);
    const onShowDetailsChange = (value: boolean) => {
        setShowDetails(value);
    };

    return <>
        {labels.showDetails}: <Switch onChange={onShowDetailsChange}/>

        <PartyCalcBillsContainer/>
        <PartyCalcResultComponent showDetails={showDetails}/>
    </>;
}

export default PartyCalcApp;