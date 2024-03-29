export interface SellerDTO {
  id: number
  names: string 
  firstLastName: string 
  secondLastName: string
}

export const initializedSeller: SellerDTO = {
  firstLastName: '', 
  names: '', 
  id: 0, 
  secondLastName: ''
}

export type SellTypes = 'Hipóteca' | 'Público'