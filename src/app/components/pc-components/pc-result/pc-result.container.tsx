import {FC, memo} from 'react';
import React from 'react';
import PartyCalcResultComponent from "./pc-result.component";

interface PartyCalcResultContainerProps {
    showDetails: boolean;
}

const PartyCalcResultContainer: FC<PartyCalcResultContainerProps> = (
    {
        showDetails
    }
) => {
    return <PartyCalcResultComponent showDetails={showDetails}/>;
}

export default memo(PartyCalcResultContainer);