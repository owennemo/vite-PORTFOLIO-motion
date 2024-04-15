// import { motion } from "framer-motion";
// import { useState } from "react";
// import "./test.scss";

const Test = () => {
  //   const [open, setOpen] = useState(false);

  //   const variants = {
  //     visible: {
  //       opacity: 1,
  //       x: 800,
  //       transition: { type: "spring", stiffness: 100, damping: 100 },
  //     },
  //     hidden: { opacity: 0 },
  //   };

  //   const items = ["item1", "item2", "item3", "item4"];

  //   const variants2 = {
  //     visible: (i) => ({
  //       opacity: 1,
  //       x: 100,
  //       transition: { delay: i * 0.3 },
  //     }),
  //     hidden: { opacity: 0 },
  //   };

  return (
    <div className="course">
      {/* <motion.div
        className="box"
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1, x:200, y:500 }}
        // transition={{ duration: 2 }}
        // whileHover={{opacity: 1, scale:2}}
        // whileTap={{opacity: 1, scale:2}}
        // whileInView={{opacity: 1, scale:2}}
        // drag
      ></motion.div> */}

      {/* <motion.div
        className="box"
        variants={variants}
        // initial="hidden"
        // animate="visible"
        animate={open ? "visible" : "hidden"}
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>Click</button> */}

      {/* <motion.ul initial="hidden" animate="visible" variants={variants2}>
        {items.map((item, i) => (
          <motion.li variants={variants2} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul> */}
    </div>
  );
};

export default Test;
