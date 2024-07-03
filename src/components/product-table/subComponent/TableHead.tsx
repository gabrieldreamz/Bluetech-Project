export default function TableHead() {
  return (
    <div className="table-header">
      <span className="table-cell">
        <input type="checkbox" />
        <p>S/N</p>
      </span>
      <span className="table-cell" id="product-header__img">
        Image
      </span>
      <span className="table-cell">SKU</span>
      <span className="table-cell">Name</span>
      <span className="table-cell">Title</span>
      <span className="table-cell">Description</span>
      <span className="table-cell">Brand</span>
      <span className="table-cell">Cost Price</span>
      <span className="table-cell">Quantity</span>
      <span className="table-cell">Size</span>
    </div>
  );
}
