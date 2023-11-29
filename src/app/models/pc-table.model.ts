export interface PartyCalcTableData {
    key: string;
    name: string;
    actualExpense?: number;
    expectedExpense?: number;
    payForMembers?: number;
}

export interface PartyCalcResultData {
    key: string;
    from: string;
    to: string;
    amount: number;
};