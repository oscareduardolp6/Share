export interface SellerDTO {
  id: number
  names: string 
  firstLastName: string 
  secondLastName: string
}

const initializedSeller: SellerDTO = {
  firstLastName: '', 
  names: '', 
  id: 0, 
  secondLastName: ''
}