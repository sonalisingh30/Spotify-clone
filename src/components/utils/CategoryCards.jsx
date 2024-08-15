function CategoryCards({ img, header, bgColor }) {
  console.log(img);
  return (
    <div
      className={`h-[200px] w-[200px]  bg-white px-4 py-2 rounded-lg relative overflow-hidden cursor-pointer`}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <h1 className="text-white text-[1.4rem] font-bold">{header}</h1>
      <div className="w-[100px] h-[100px] absolute bottom-[-1rem] right-[-1rem] ">
        <img
          src={`${img}`}
          alt="car_image"
          className="rotate-[30deg]"
        ></img>
      </div>
    </div>
  );
}

export default CategoryCards;
