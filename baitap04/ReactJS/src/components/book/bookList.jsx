import BookCard from "./bookCard";

const BookList = ({ books }) => {
  if (!books?.length) {
    return <p className="text-center text-gray-500">Không có sách nào</p>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {books?.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;