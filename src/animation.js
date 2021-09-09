export const pageAnimation = {
   hidden: {
      opacity: 0,
      y: 500,
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.75,
      },
   },
   exit: {
      opacity: 0,
      y: 500,
      transition: {
         duration: 0.8,
      },
   },
};

export const slideLeftAnim = {
   hidden: {
      x: 800,
   },
   show: {
      x: 0,
      transition: {
         duration: 0.75,
      },
   },
   exit: {
      x: 800,
      transition: {
         duration: 0.8,
      },
   },
};

export const openModal = {
   hidden: {
      opacity: 0,
      scale: 0.2,
   },
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         delayChildren: 0.5,
         duration: 0.5,
      },
   },
};

export const displayModalContent = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: {
         duration: 0.4,
         ease: "easeIn",
      },
   },
};

export const fadePhoto = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: {
         duration: 0.7,
         ease: "easeIn",
      },
   },
};
