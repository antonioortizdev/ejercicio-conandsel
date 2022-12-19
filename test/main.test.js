test("'category4' should output: '/category1/category3/category4'", () => {
  expect('/category1/category3/category4').toBe(getCategoryPath(categories, "category4"))
})
test("'category2' should output: '/category1/category2'", () => {
  expect('/category1/category2').toBe(getCategoryPath(categories, "category2"))
})
test("'category5' should output: '/category5'", () => {
  expect('/category5').toBe(getCategoryPath(categories, "category5"))
})
