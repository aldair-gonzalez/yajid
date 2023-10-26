import { motion } from "framer-motion";
import { useState } from "react";

import SlideCard from "./slideCard/Index";

function SliderCards(props) {
  const [grab, setGrab] = useState(false);

  const { arr, name } = props;
  const listItems = arr.map((item) => <SlideCard key={item.id} />);

  const grabStart = () => setGrab(true);
  const grabEnd = () => setGrab(false);

  return (
    <section className="Products Section">
      <div className="Products-wrapper Wrapper">
        <div className="Products-header">
          <h2 className="Products-title">{name}</h2>
        </div>

        <motion.div
          className={grab ? "Cards isGrabbing" : "Cards"}
          drag="x"
          dragConstraints={{ right: 0, left: -1300 }}
          onDragStart={grabStart}
          onDragEnd={grabEnd}
        >
          {listItems}
        </motion.div>
      </div>
    </section>
  );
}

export default SliderCards;
