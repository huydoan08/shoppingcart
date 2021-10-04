import React from 'react'
import Product from './Product';

export default function Main({ products, onAddToCart }) {
	return (
		<div className="bg-gray-200 px-32 -mt-20 pb-20">
			<p className="flex justify-center text-green-500 font-bold text-2xl mt-20">Our Dishes</p>
			<p className="flex justify-center text-blue-900 text-4xl font-bold mb-10">Popular Dishes</p>
			<div className="flex justify-center flex-wrap">
			{products.map((product) => (
				<Product product={product} onAddToCart={onAddToCart}/>
			))}
			</div>
			
		</div>
	)
}
