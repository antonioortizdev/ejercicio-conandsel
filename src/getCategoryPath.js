const getCategoryPath = (categories, categoryName) => {
  const traverseCategories = (categories, targetName) => {
    for (const category of categories) {
      if (category.name === targetName) {
        return [category];
      }
      if (!category.subcategories) {
        continue;
      }
      const found = traverseCategories(category.subcategories, targetName);
      if (found) {
        found.unshift(category);
        return found;
      }
    }
    return null;
  }

  const buildCategoryPath = (categories) => {
    return `/${categories.map(({ name }) => name).join("/")}`;
  };

  const categoryPath = traverseCategories(categories, categoryName);
  if (!categoryPath) {
    return null;
  }
  return buildCategoryPath(categoryPath);
};

module.exports = getCategoryPath;
