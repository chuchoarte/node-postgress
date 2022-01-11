const express = require("express");
const router = express.Router();
const faker = require("faker");

router.get('/', (req, res) => {
  const product = [];
  const {size} = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    product.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }
  res.json(product);
});

module.exports = router;
