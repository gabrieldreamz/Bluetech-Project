import { useFetchProduct } from "../../lib/context";
import Loader from "../Loader";
import NotData from "../NotData";
import { TableBody, TableHead, Title } from "./subComponent/index";

export default function ProductTable() {
  const { loading, data, error } = useFetchProduct();

  return (
    <main className="product-container">
      <Title />
      <div className="custom-table">
        <TableHead />
        <div className="table-body">
          {loading && <Loader />}
          {error && <NotData />}
          {data &&
            data.map((product, i: number) => (
              <TableBody
                key={i.toString()}
                {...product}
                count={i + 1}
                CostPrice={product["Cost Price"]}
              />
            ))}
        </div>
      </div>
    </main>
  );
}
