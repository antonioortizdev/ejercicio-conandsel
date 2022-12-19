const categories = [
  {
    name: "category1",
    subcategories: [
      {
        name: "category2",
        subcategories: [],
      },
      {
        name: "category3",
        subcategories: [
          {
            name: "category4",
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    name: "category5",
    subcategories: [],
  },
];

// TO-DO: Implement this function

const getCategoryPath = (categories, categoryName) => {
  const traverseCategories = (categories, targetName) => {
    for (const category of categories) {
      if (category.name === targetName) {
        return category;
      }
      for (const subcategory of category.subcategories) {
        subcategory.parent = category;
      }
      const found = traverseCategories(category.subcategories, targetName);
      if (found) {
        return found;
      }
    }
    return null;
  }

  const category = traverseCategories(categories, categoryName);
  if (!category) {
    return null;
  }
  let path = category.name;
  let parent = category.parent;
  while (parent) {
    path = `${parent.name}/${path}`;
    parent = parent.parent;
  }
  return `/${path}`;
};


test("passing 'category4' should output: '/category1/category3/category4'", () => {
  expect(getCategoryPath(categories, "category4")).toBe("/category1/category3/category4")
});

test("passing 'category2' should output: '/category1/category2'", () => {
  expect(getCategoryPath(categories, "category2")).toBe("/category1/category2")
});

test("passing 'category5' should output: '/category5'", () => {
  expect(getCategoryPath(categories, "category5")).toBe("/category5")
});
