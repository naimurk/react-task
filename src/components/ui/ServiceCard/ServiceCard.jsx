import { useSpring, animated } from "@react-spring/web";
import PropTypes from "prop-types";

const ServiceCard = ({ item, handleModal }) => {
  // Animation for card fade-in and slide-up on render
  const cardAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 200, friction: 20 },
  });

  // Hover effect using React Spring
  const [hoverStyle, setHoverStyle] = useSpring(() => ({
    scale: 1,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  }));

  return (
    <animated.div
      style={{ ...cardAnimation, ...hoverStyle }} // Apply both entry animation and hover style
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
      onMouseEnter={() =>
        setHoverStyle({
          scale: 1.05,
          boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
        })
      }
      onMouseLeave={() =>
        setHoverStyle({
          scale: 1,
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        })
      }
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold">{item?.title}</h3>
      <p className="mt-2 text-gray-600">{item?.description}</p>
      <div className="flex justify-end mt-4">
        <span
          onClick={() => handleModal()}
          className="text-indigo-500 font-semibold cursor-pointer"
        >
          Learn More →
        </span>
      </div>
    </animated.div>
  );
};

ServiceCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ServiceCard;
