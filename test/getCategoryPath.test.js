const categoriesMock = [
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
]

const getCategoryPath = require('../src/getCategoryPath')

test("passing 'category4' should output: '/category1/category3/category4'", () => {
  expect(getCategoryPath(categoriesMock, "category4")).toBe("/category1/category3/category4")
});

test("passing 'category2' should output: '/category1/category2'", () => {
  expect(getCategoryPath(categoriesMock, "category2")).toBe("/category1/category2")
});

test("passing 'category5' should output: '/category5'", () => {
  expect(getCategoryPath(categoriesMock, "category5")).toBe("/category5")
});
