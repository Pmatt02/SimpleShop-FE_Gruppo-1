import { Button } from "@/components/ui/button";
import Card from "@/components/ui/Card";
import CardContent from "@/components/ui/CardContent";
import { useFilter } from "@/hooks/useFilter";

export default function ProductList() {
    // Usa il custom hook correttamente:
    const {
        categories,
        selectedCategory,
        setSelectedCategory,
        products,
        isLoading,
        isError,
    } = useFilter();

    if (isLoading) {
        return <div className="text-center mt-10">Caricamento...</div>;
    }

    if (isError) {
        return <div className="text-red-500 text-center mt-10">Errore nel caricamento dei dati</div>;
    }

  return (
    <div className="px-6 py-12">
      {/* Filtro categorie */}
      <div className="mb-10 text-center">
        <label className="mr-3 text-lg font-medium text-gray-700">
          Filtra per categoria:
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="">Tutte</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Lista prodotti */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {productsToShow.map((product) => (
          <Link to={`/product/${product.id}`}>
            <Card
              key={product.id}
              className="h-[600px] rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1 flex flex-col cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[300px] object-contain rounded-t-2xl bg-white"
              />
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 flex-grow">
                  {product.description.slice(0, 100)}...
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-blue-600 font-bold text-lg">
                    €{product.price}
                  </span>
                  <Button className="rounded-full px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white">
                    Aggiungi
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
