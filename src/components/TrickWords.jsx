import { motion } from 'framer-motion';

const TrickWords = ({ text }) => {
  const words = text.split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08, // slower stagger
      },
    },
  };

  const child = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.5, // slower rise per word
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="overflow-hidden flex flex-wrap justify-center gap-1"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }} // starts animating when 40% in view
    >
      {words.map((word, i) => (
        <motion.p className="small" key={i} variants={child}>
          {word}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default TrickWords;
