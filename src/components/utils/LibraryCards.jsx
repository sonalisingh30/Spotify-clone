function LibraryCards({ header, para, buttonContent }) {
  return (
    <div className="bg-bg_more_gray p-2 px-4 rounded-lg mt-6 flex flex-col gap-3  items-start ">
      <h2 className="text-white font-semibold">{header}</h2>
      <p
        className="text-white text-sm font-small
      "
      >
        {para}
      </p>
      <button className="bg-white px-4 py-1 rounded-full  font-bold mt-1 hover:scale-105">
        {buttonContent}
      </button>
    </div>
  );
}

export default LibraryCards;
