const getCategoryPath = (categories, categoryName) => {
  const traverseCategories = (categories, targetName) => {
    for (const category of categories) {
      if (category.name === targetName) {
        return category;
      }
      if (!category.subcategories) {
        continue;
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

module.exports = getCategoryPath