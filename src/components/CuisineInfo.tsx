const CuisineInfo = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center space-y-4">
      <h3 className="font-semibold text-lg text-center">{item.title}</h3>
      <img
        src={item.image}
        className="rounded-lg hover:scale-105 duration-300"
      />
    </div>
  );
};

export default CuisineInfo;
