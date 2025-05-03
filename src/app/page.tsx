'use client';
import { useState } from 'react';
import SearchInput from '../components/common/SearchInput';
import { formatRupiah } from '@/utils/format-currency';

interface IProducts {
  id: number;
  name: string;
  price: number;
}

const products: IProducts[] = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Smartphone', price: 800 },
  { id: 3, name: 'Tablet', price: 600 },
  { id: 4, name: 'Laptop ASUS ZenBook', price: 14500000 },
  { id: 5, name: 'Smartphone Samsung Galaxy S24', price: 13000000 },
  { id: 6, name: 'Smart TV LG 55 inch', price: 9800000 },
  { id: 7, name: 'Headset Sony WH-1000XM5', price: 3500000 },
  { id: 8, name: 'Kamera Canon EOS 90D', price: 21000000 },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>

        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-100 dark:bg-slate-600 shadow-md rounded-xl p-6 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="mt-2">{formatRupiah(product.price)}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full ">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
