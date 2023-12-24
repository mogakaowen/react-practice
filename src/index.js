import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books"; // named import
import Book2 from "./Book"; // default import

// const EventExample = () => {
//   const clickHandler = () => {
//     alert("You clicked me!");
//   };

//   const formHandler = (e) => {
//     console.log("Inputs are being typed or deleted ");
//   };

//   const submitHandler = (e) => {
//     e.preventDefault(); // Prevents default behavior of form submission
//     console.log("Event object:", e);
//     console.log("Event target:", e.target);
//     console.log("Event target name:", e.target.name);
//     console.log("Event target type:", e.target.type);
//     console.log("Event target value:", e.target.value);
//     alert("Form submitted");
//   };

//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={formHandler}
//           style={{ margin: "1rem 0" }}
//         />
//         <button type="submit" name="form-submit" onClick={submitHandler}>
//           Submit
//         </button>

//         <div>
//           <button type="button" name="click-me-button" onClick={clickHandler}>
//             Click Me
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// // function Greeting() {
// //   return React.createElement("h1", {}, "My First But Second Try Component");
// // }

// const Person = () => <h2>John Doe</h2>;
// const Message = () => <p>This is my message</p>;

//First BookList Component
const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui non
          mollitia maiores quos ut facere iusto recusandae enim optio labore.
        </p>
        <button>Click Me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const firstBook = {
  title: "Fourth Wing (The Empyrean, 1)",
  img: "./images/fourth-wing.jpg",
  author: "Rebecca Yarros",
};

const secondBook = {
  title: "Interesting Facts For Curious Minds",
  img: "./images/curious-minds.jpg",
  author: "Jordan Moore",
};

const Book = (props) => {
  const { img, title, author, children } = props;
  console.log("BookList:", props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

// Second BookList Component
const BookList2 = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {/* <EventExample /> */}
        {newBooks}
      </section>
    </>
  );
};

const newBooks = books.map((book, index) => {
  const someValue = "Hello readers, hope you enjoyed this book!";
  const displayValue = () => {
    alert(someValue);
  };

  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log("Book: ", book);
  };

  return (
    <Book2
      {...book}
      key={book.id}
      displayValue={displayValue}
      getBook={getBook}
      number={index + 1}
    />
  );
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList2 />);
