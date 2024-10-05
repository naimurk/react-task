const ServiceCard = ({ item }) => {
  return (
    <div
      //   data-aos="zoom-in-up"
      //   data-aos-easing="linear"
      //   data-aos-duration="1500"
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
    >
      <img
        src={item.image}
        alt="Service 1"
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold">{item?.title}</h3>
      <p className="mt-2 text-gray-600">{item?.description}</p>
      <div className="flex justify-end mt-4">
        <span
          className="text-indigo-500 font-semibold cursor-pointer"
          //   onclick="openModal('Express Delivery', 'Fast and secure courier services at your doorstep.')"
        >
          Learn More →
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
    item: Object
}