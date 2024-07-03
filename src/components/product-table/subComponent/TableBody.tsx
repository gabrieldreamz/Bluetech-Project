interface Product {
  Brand: string;
  CostPrice: number;
  Description: string;
  Image_1: string;
  Name: string;
  Quantity: number;
  RETAIL: number | null;
  SKU: string;
  Title: string;
  size: string;
  count: number;
}

export default function TableBody(props: Product) {
  return (
    <div className="table-row">
      <span className="table-cell">
        <input type="checkbox" />
        <p>{props.count}.</p>
      </span>
      <span className="table-cell" id="product-img">
        <img src={props.Image_1} alt={props.Name} />
      </span>
      <span className="table-cell">{props.SKU}</span>
      <span className="table-cell">{props.Name}</span>
      <span className="table-cell">{props.Title}</span>
      <span className="table-cell">{props.Description}</span>
      <span className="table-cell">{props.Brand}</span>
      <span className="table-cell">{props.CostPrice}</span>
      <span className="table-cell">{props.Quantity}</span>
      <span className="table-cell">{props.size}</span>
    </div>
  );
}
