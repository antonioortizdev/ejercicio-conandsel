test("passing 'category4' should output: '/category1/category3/category4'", () => {
  expect(getCategoryPath(categories, "category4")).toBe("/category1/category3/category4")
});

test("passing 'category2' should output: '/category1/category2'", () => {
  expect(getCategoryPath(categories, "category2")).toBe("/category1/category2")
});

test("passing 'category5' should output: '/category5'", () => {
  expect(getCategoryPath(categories, "category5")).toBe("/category5")
});
