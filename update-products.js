// 

// const productUpdate: FeedProductUpdate = {
//   sku: "EXAMPLE-SKU-001",
//   source: { locale: "en-US" },
//   name: "Updated Product Name",
// };

// const response = await client.updateProducts([productUpdate]);
// response.data: { status: 'ACCEPTED', acceptedCount: 1 }

import FeedProductUpdate from "@adobe-commerce/aco-ts-sdk";
import products from './data/products.json' with { type: 'json' };

products.forEach(product => {
  const productUpdate = {
    sku: product.sku,
    source: { locale: "en-US" },
    attributes: [
      {
        "code": "new_arrival",
        "type": "BOOLEAN",
        "values": ["true"]
      }
    ]
  };
  const response = client.updateProducts([productUpdate]).then(response => console.log(`Update response for ${product.sku}:`, response.data));
});

