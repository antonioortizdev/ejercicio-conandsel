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

const getCategoryPath = require('../../src/getCategoryPath')

describe('getCategoryPath functional test', () => {
  it("passes 'category4' and outputs '/category1/category3/category4'", () => {
    expect(getCategoryPath(categoriesMock, "category4")).toBe("/category1/category3/category4")
  });
  
  it("passes 'category2' and outputs '/category1/category2'", () => {
    expect(getCategoryPath(categoriesMock, "category2")).toBe("/category1/category2")
  });
  
  it("passes 'category5' and outputs '/category5'", () => {
    expect(getCategoryPath(categoriesMock, "category5")).toBe("/category5")
  });
  
  it("passes 'category4' with '\\' as separator and outputs '\\category1\\category3\\category4'", () => {
    expect(getCategoryPath(categoriesMock, "category4", "\\")).toBe("\\category1\\category3\\category4")
  });
  
  it("passes 'category4' with '-' as separator and outputs '\\category1\\category3\\category4'", () => {
    expect(getCategoryPath(categoriesMock, "category4", "-")).toBe("-category1-category3-category4")
  });
})
