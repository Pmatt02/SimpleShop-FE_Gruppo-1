import ProductList from "@/components/ProductList";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">

            <header className="text-center py-20 px-4 bg-gradient-to-r from-blue-200 via-blue-100 to-white shadow-inner rounded-xl mx-4 mt-6">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                    Benvenuto nel nostro negozio online
                </h1>
                <p className="text-gray-700 text-xl max-w-2xl mx-auto">
                    Scopri i migliori prodotti selezionati per te a prezzi imbattibili.
                </p>
            </header>

            <ProductList />
        </div>
    );
}
