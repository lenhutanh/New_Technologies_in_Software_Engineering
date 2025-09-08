const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg p-4 flex flex-col">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-48 object-cover rounded-xl mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
        {book.title}
      </h3>
      <p className="text-sm text-gray-500 mb-2">Tác giả: {book.author}</p>
      <p className="text-base font-bold text-blue-600">
        {book.price.toLocaleString()}đ
      </p>
    </div>
  );
};

export default BookCard;