import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../Custom Cards/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://monitor-backend-rust.vercel.app/api/products');
        const validProducts = response.data.filter(product =>
          product.name && product.product && product.size && product.price && product.description && product.image
        );

        if (validProducts.length === 0) {
          setError('No valid products found.');
        } else {
          setProducts(validProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className='md:mx-44 my-16 mx-5 '>
        <div className='flex justify-between hidden md:flex'>
          <div>
            <h3>Hard to choose the right products for your pets?</h3>
            <h1 className='text-2xl font-semibold text-secondary'>Our Products</h1>
          </div>
          <div>
            <button className='hidden md:flex border border-secondary px-8 py-2 rounded-full  items-center space-x-2'>
              <span>View more</span>
              <span>&gt;</span>
            </button>
          </div>
        </div>

        {loading ? (
          <p>Loading products...</p> 
        ) : error ? (
          <p className='my-3 text-center text-red-600 bg-red-200 p-3 border-2 border-red-600'>{error}</p> 
        ) : products.length === 0 ? (
          <p className='text-center'>No products available at the moment.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 hidden md:flex'>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                product={product.product}
                size={product.size}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;