export function AddCategory({ onAddCategory }) {

  const submitCategory = (e) => {
    e.preventDefault();

    const inputValue = e.target[0].value;
    const inputCategory = inputValue.trim();

    if (inputCategory.length <=1) return;
    onAddCategory(inputCategory);

    // clear input
    e.target.category.value = "";

  };

  return (
    <div>
      <h1>GifExpertApp</h1>
      <form onSubmit={submitCategory}>
        <input type="text" name="category" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
