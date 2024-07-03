import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  useCallback,
} from "react";

// Define the types for the context state
interface Product {
  Brand: string;
  "Cost Price": number;
  Description: string;
  Gender: string;
  Image_1: string;
  Name: string;
  Quantity: number;
  RETAIL: number | null;
  SKU: string;
  Title: string;
  UPC: string | null;
  URL: string;
  catalog_time: string;
  size: string;
  supplier: string;
}

interface ProductContextState {
  data: Product[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

// Create the context with a default value
const ProductContext = createContext<ProductContextState | undefined>(
  undefined
);

// Create a provider component
interface APIProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<APIProviderProps> = ({ children }) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX&first=0&last=50"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result: Product[] = await response.json();

      setData(result);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const abort = new AbortController();
    fetchData();
    return abort.abort();
  }, [fetchData]);

  return (
    <ProductContext.Provider
      value={{ data, loading, error, refetch: fetchData }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for consuming the Product context
export const useFetchProduct = (): ProductContextState => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error(
      "The useFetchProduct Hook must be used within an ProductProvider"
    );
  }
  return context;
};
