import React, { useRef, useEffect, useState } from 'react';

const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ease-out transform ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
