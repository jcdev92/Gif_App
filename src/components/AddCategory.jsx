import PropTypes from "prop-types";

export function AddCategory({ onAddCategory }) {

  const submitCategory = (e) => {
    e.preventDefault();

    const inputValue = e.target.category.value;
    const inputCategory = inputValue.trim();

    if (inputCategory.length <= 1) return;
    onAddCategory(inputCategory);

    // clear input
    e.target.category.value = "";
  };

  return (
    <div>
      <h1>GifExpertApp</h1>
      <form onSubmit={submitCategory} aria-label="form">
        <input type="text" name="category"/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}