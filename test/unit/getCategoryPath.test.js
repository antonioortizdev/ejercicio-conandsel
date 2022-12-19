const categories = [
  {
    name: "Books",
    subcategories: [
      {
        name: "Fiction",
        subcategories: [
          { name: "Mystery" },
          { name: "Romance" }
        ],
      },
      {
        name: "Non-Fiction",
        subcategories: [
          {
            name: "Self-Help",
            subcategories: [],
          },
          {
            name: "Technology",
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    name: "Music",
    subcategories: [
      { name: "Rock" },
      { name: "Jazz" },
    ],
},
];

const getCategoryPath = require("../../src/getCategoryPath");

describe("getCategoryPath unit test", () => {
  it('should return the correct category path', () => {
    expect(getCategoryPath(categories, "Mystery")).toEqual(
      "/Books/Fiction/Mystery"
    );
    expect(getCategoryPath(categories, "Technology")).toEqual(
      "/Books/Non-Fiction/Technology"
    );
    expect(getCategoryPath(categories, "Rock")).toEqual("/Music/Rock");
    expect(getCategoryPath(categories, "Foo")).toBeNull();
  })
  it('should return the correct category path using a separator', () => {
    expect(getCategoryPath(categories, "Mystery", "\\")).toEqual(
      "\\Books\\Fiction\\Mystery"
    );
    expect(getCategoryPath(categories, "Technology", "\\")).toEqual(
      "\\Books\\Non-Fiction\\Technology"
    );
    expect(getCategoryPath(categories, "Self-Help", "-")).toEqual(
      "-Books-Non-Fiction-Self-Help"
    );
  })
});
