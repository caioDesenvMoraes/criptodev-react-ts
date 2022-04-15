export interface IBlockchainData {
    data: {
        items: IBlockchainData[]
    }
}

export interface IBlockchainDataItems {
    minedInBlockHash: string
    minedInBlockHeight: number
    recipients: IRecipientData[]
}

export interface IRecipientData {
    address: string
    amount: string
}