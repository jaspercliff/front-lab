import { useState } from 'react'
import type { ChangeEvent, ReactNode } from 'react'

// 商品类型
interface Product {
  category: string
  price: string
  stocked: boolean
  name: string
}

// ProductCategoryRow 组件 Props
interface ProductCategoryRowProps {
  category: string
}

// ProductRow 组件 Props
interface ProductRowProps {
  product: Product
}

// ProductTable 组件 Props
interface ProductTableProps {
  products: Product[]
  filterText: string
  inStockOnly: boolean
}

// SearchBar 组件 Props
interface SearchBarProps {
  filterText: string
  inStockOnly: boolean
  onFilterTextChange: (value: string) => void
  onInStockOnlyChange: (value: boolean) => void
}

// FilterableProductTable 组件 Props
interface FilterableProductTableProps {
  products: Product[]
}


// 分类行
function ProductCategoryRow({ category }: ProductCategoryRowProps) {
  return (
    <tr>
      <th colSpan={2}>
        {category}
      </th>
    </tr>
  )
}


// 商品行
function ProductRow({ product }: ProductRowProps) {
  const name: ReactNode = product.stocked
    ? product.name
    : <span style={{ color: 'red' }}>{product.name}</span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}


// 商品表格
function ProductTable({
  products,
  filterText,
  inStockOnly,
}: ProductTableProps) {

  const rows: ReactNode[] = []

  let lastCategory: string | null = null

  products.forEach((product) => {

    // 过滤名称
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return
    }

    // 过滤库存
    if (inStockOnly && !product.stocked) {
      return
    }

    // 分类发生变化，添加分类行
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={`category-${product.category}`}
        />
      )
    }

    // 添加商品行
    rows.push(
      <ProductRow
        product={product}
        key={`product-${product.name}`}
      />
    )

    lastCategory = product.category
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {rows}
      </tbody>
    </table>
  )
}


// 搜索栏
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: SearchBarProps) {

  // 输入框事件类型
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFilterTextChange(e.target.value)
  }

  // Checkbox 事件类型
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInStockOnlyChange(e.target.checked)
  }

  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={handleTextChange}
      />

      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleCheckboxChange}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  )
}


// 父组件：管理筛选状态
function FilterableProductTable({
  products,
}: FilterableProductTableProps) {

  const [filterText, setFilterText] = useState<string>('')
  const [inStockOnly, setInStockOnly] = useState<boolean>(false)

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />

      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}


// 商品数据
const PRODUCTS: Product[] = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
]


export default function App() {
  return (
    <FilterableProductTable products={PRODUCTS} />
  )
}
