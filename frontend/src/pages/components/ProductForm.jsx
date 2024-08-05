import React, { useState } from 'react';

function ProductForm() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const product = { title, price };
    
        try {
            const response = await fetch('http://localhost:8080/api/products/product-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Product added:', data);
        } catch (error) {
            console.error('There was an error adding the product!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product Name:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
}

export default ProductForm;