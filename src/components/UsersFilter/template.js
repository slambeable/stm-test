// export { Function } template for Users Filter
// return { DOMstring } template

export default () => {
  const filterInput = '<input class="users-filter__input" placeholder="Filter by Name"/>';
  const clearButton = '<button class="users-filter__button">Reset</button>';
  const emptyUsers = '<div class="users-filter__empty">Sorry, but no users with this name were found</div>';

  return `<div class="users-filter">${filterInput}${clearButton}${emptyUsers}</div>`;
};
