import ServiceCard from "../../components/ui/ServiceCard/ServiceCard";
import PropTypes from "prop-types";

const Service = ({ handleModal }) => {
  const services = [
    {
      id: 1,
      title: "Express Delivery",
      description: "Fast and secure courier services at your doorstep.",
      image:
        "https://i.ibb.co.com/RTqjw6v/happy-woman-receiving-food-from-grocery-store-taking-package-from-courier-her-gate-shipping-delivery.jpg",
      modalContent: {
        title: "Express Delivery",
        description: "Fast and secure courier services at your doorstep.",
      },
    },
    {
      id: 2,
      title: "Logistics Support",
      description: "Comprehensive logistics and supply chain solutions.",
      image:
        "https://i.ibb.co.com/0t0vL45/medium-shot-delivery-man-holding-tablet.jpg",
      modalContent: {
        title: "Logistics Support",
        description: "Comprehensive logistics and supply chain solutions.",
      },
    },
    {
      id: 3,
      title: "Package Handling",
      description: "Safe and efficient handling of your valuable packages.",
      image:
        "https://i.ibb.co.com/twf8PC5/deliverywoman-holding-tablet-showing-client-order-data-concentrated-caucasian-man-receiving-paper-ba.jpg",
      modalContent: {
        title: "Package Handling",
        description: "Safe and efficient handling of your valuable packages.",
      },
    },
    {
      id: 4,
      title: "International Shipping",
      description: "Global shipping services to deliver across the world.",
      image:
        "https://i.ibb.co.com/RTqjw6v/happy-woman-receiving-food-from-grocery-store-taking-package-from-courier-her-gate-shipping-delivery.jpg",
      modalContent: {
        title: "International Shipping",
        description: "Global shipping services to deliver across the world.",
      },
    },
  ];

  return (
    <section id="services" className="py-16 bg-[#F7FBFF]">
      <div className="max-w-7xl mx-auto px-2 lg:px-2">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-3xl font-bold text-center mb-12"
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services?.map((item) => (
            <ServiceCard
              handleModal={handleModal}
              key={item.id}
              item={item}
            ></ServiceCard>
          ))}
          {/* <!-- Service Card 1 -->
            <div
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <img
                src="https://i.ibb.co.com/RTqjw6v/happy-woman-receiving-food-from-grocery-store-taking-package-from-courier-her-gate-shipping-delivery.jpg"
                alt="Service 1"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">Express Delivery</h3>
              <p className="mt-2 text-gray-600">
                Fast and secure courier services at your doorstep.
              </p>
              <div className="flex justify-end mt-4">
                <span
                  className="text-indigo-500 font-semibold cursor-pointer"
                  onclick="openModal('Express Delivery', 'Fast and secure courier services at your doorstep.')"
                  >Learn More →</span
                >
              </div>
            </div>
  
            <!-- Service Card 2 -->
            <div
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <img
                src="https://i.ibb.co.com/0t0vL45/medium-shot-delivery-man-holding-tablet.jpg"
                alt="Service 2"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">Logistics Support</h3>
              <p className="mt-2 text-gray-600">
                Comprehensive logistics and supply chain solutions.
              </p>
              <div className="flex justify-end mt-4">
                <span
                  className="text-indigo-500 font-semibold cursor-pointer"
                  onclick="openModal('Logistics Support', 'Comprehensive logistics and supply chain solutions.')"
                  >Learn More →</span
                >
              </div>
            </div>
  
            <!-- Service Card 3 -->
            <div
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <img
                src="https://i.ibb.co.com/twf8PC5/deliverywoman-holding-tablet-showing-client-order-data-concentrated-caucasian-man-receiving-paper-ba.jpg"
                alt="Service 3"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">Package Handling</h3>
              <p className="mt-2 text-gray-600">
                Safe and efficient handling of your valuable packages.
              </p>
              <div className="flex justify-end mt-4">
                <span
                  className="text-indigo-500 font-semibold cursor-pointer"
                  onclick="openModal('Package Handling', 'Safe and efficient handling of your valuable packages.')"
                  >Learn More →</span
                >
              </div>
            </div>
  
            <!-- Service Card 4 -->
            <div
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <img
                src="https://i.ibb.co.com/RTqjw6v/happy-woman-receiving-food-from-grocery-store-taking-package-from-courier-her-gate-shipping-delivery.jpg"
                alt="Service 4"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">International Shipping</h3>
              <p className="mt-2 text-gray-600">
                Global shipping services to deliver across the world.
              </p>
              <div className="flex justify-end mt-4">
                <span
                  className="text-indigo-500 font-semibold cursor-pointer"
                  onclick="openModal('International Shipping', 'Global shipping services to deliver across the world.')"
                  >Learn More →</span
                >
              </div>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default Service;

Service.propTypes = {
  handleModal: PropTypes.func.isRequired,
};
