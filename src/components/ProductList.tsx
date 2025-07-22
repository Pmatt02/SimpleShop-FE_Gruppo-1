import { products } from "@/lib/Products";
import Card from "@/components/ui/Card";
import CardContent from "@/components/ui/CardContent";
import { Button } from "@/components/ui/button";

export default function ProductList() {
    return (
        <section id="prodotti" className="px-6 py-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">I nostri prodotti</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map((product) => (
                    <Card key={product.id}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <CardContent>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-blue-600 font-bold text-lg">{product.price}</span>
                                <Button className="rounded-full px-5 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white">
                                    Aggiungi
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
