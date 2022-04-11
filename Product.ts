import { Brand } from "./Brand.ts";
import { Color } from "./Color.ts";
import { Fabric } from "./Fabric.ts";
import { Price } from "./Price.ts";
import { Size } from "./Size.ts";
import { Stock } from "./Stock.ts";
import { Supplier } from "./Supplier.ts";

export interface Product {
  readonly recordID: RecordID
  readonly productID: ProductID
  readonly name: string
  readonly color?: Color
  readonly brand?: Brand
  readonly description?: string
  readonly fabric?: Fabric
  readonly size?: Size
  readonly suppliers?: Supplier[]
  readonly basePrice: Price
  readonly mortgagePrice: Price 
  readonly publicPrice: Price
  readonly lowStockAlert?: boolean
  readonly publicStockQuantity: Stock
  readonly privateStockQuantity: Stock
  readonly totalStockQuantity: Stock 
  readonly lowStockAlertQuantity?: number
  readonly mortagePriceRelation: number
  readonly publicPriceRelation: number

}

type RecordID = number

type ProductID = string