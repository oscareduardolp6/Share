import { Brand } from "./Brand";
import { Color } from "./Color";
import { Fabric } from "./Fabric";
import { Price } from "./Price";
import { Size } from "./Size";
import { Stock } from "./Stock";
import { Supplier } from "./Supplier";

export interface Product {
  recordID: RecordID
  productID: ProductID
  name: string
  color?: Color
  brand?: Brand
  description?: string
  fabric?: Fabric
  size?: Size
  suppliers?: Supplier[]
  basePrice: Price
  mortgagePrice: Price 
  publicPrice: Price
  lowStockAlert?: boolean
  publicStockQuantity: Stock
  privateStockQuantity: Stock
  totalStockQuantity: Stock 
  lowStockAlertQuantity?: number
  mortagePriceRelation: number
  publicPriceRelation: number
}

type RecordID = number

type ProductID = string