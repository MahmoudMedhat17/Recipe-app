// type itemProps = {
//   id: number;
//   image: string;
//   title: string;
// };

const CuisineInfo = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center space-y-4">
      <h3 className="font-semibold text-lg text-center">{item.title}</h3>
      <img src={item.image} className="rounded-lg" />
    </div>
  );
};

export default CuisineInfo;
