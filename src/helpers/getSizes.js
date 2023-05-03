const sizesDict = {
  tops: {
    items: ['t-shirts', 'shirts', 'jackets', 'hoodies', 'sweatshirts'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  bottoms: {
    items: ['pants', 'sweatpants', 'cargos', 'shorts', 'denim'],
    sizes: [30, 31, 32, 33, 34, 35, 36],
  },
  accessories: {
    items: ['hats', 'bags'],
    sizes: ['One Size'],
  },
  shoes: {
    items: ['sneakers', 'slides'],
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5],
  },
};

export const getSizes = prodCategory => {
  const category = Object.values(sizesDict).find(({ items }) => items.includes(prodCategory));
  return category ? category.sizes : null;
};

getSizes('hats');
