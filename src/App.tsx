import { MainNavigation, ProductTable } from "./components";
import { ProductProvider } from "./lib/context";

function App() {
  return (
    <main>
      <MainNavigation />

      <ProductProvider>
        <ProductTable />
      </ProductProvider>
    </main>
  );
}

export default App;
