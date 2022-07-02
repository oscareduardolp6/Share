export interface SellerDTO {
  id: number
  names: string 
  firstLastName: string 
  secondLastName: string
}

export type SellTypes = 'Hipóteca' | 'Público'

export const initializedSeller: SellerDTO = {
  firstLastName: '', 
  names: '', 
  id: 0, 
  secondLastName: ''
}