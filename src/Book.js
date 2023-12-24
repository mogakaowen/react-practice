const Book2 = (props) => {
  const { img, title, author, displayValue, getBook, id, number } = props;
  console.log("BookList2 props:", props);

  const getSingleBook = () => {
    getBook(id);
  }; // reference the getBook function so that it can be called when the button is clicked

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{`# ${number}`}</span>
      <div>
        <button onClick={displayValue}>Display Value</button>
        <button onClick={() => getBook(id)}>Get Book</button>
        {/* <button onClick={getSingleBook}>Get Book</button> */}
      </div>
    </article>
  );
};

export default Book2;
