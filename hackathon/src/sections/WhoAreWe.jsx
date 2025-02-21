import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const WhoAreWe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);



  return (
    <section className="relative font-futura ">
       <img src="/WhoAreWeBg.svg" alt=""  className="w-full"/>
       {/* About us section  Desktop.svg  WhoAreWeBg.svg   */}
      
       <section className="w-[320px]  absolute cursor-grab top-10 lg:top-[27rem]  left-16 md:w-[500px]  bg-[url('/bg1.png')] bg-cover bg-center text-white p-6 rounded-lg shadow-lg"
       onClick={() => setIsOpen(true)}
       >
  <h2 className="text-2xl font-bold mb-4">About us :</h2>
  <div className="border-l-2 border-white pl-4">
    <p className="text-sm md:text-base leading-relaxed mb-4">
      Lorem ipsum dolor sit amet consectetur. Dolor enim facilisis maecenas
      interdum amet. Vitae viverra risus mi cursus eu pharetra. interdum amet.
      Vitae viverra risus mi cursus eu pharetra.
    </p>
    <p className="text-sm md:text-base leading-relaxed">
      Cum enim quis pellentesque vestibulum elementum nulla. Bibendum netus id
      feugiat purus fringilla ac tincidunt cum nisl. Bibendum netus id feugiat
      purus fringilla ac tincidunt cum nisl.
    </p>
  </div>
</section>
       {/* Our Speciality */}
       <section className="w-[260px] absolute  cursor-grab top-[27rem] right-64 md:w-[300px] bg-[url('/bg2.png')] bg-cover bg-center text-white p-6 rounded-lg shadow-md"
         onClick={() => setIsOpen2(true)}
       >
  <h2 className="text-lg md:text-xl font-bold mb-4">Our specialty :</h2>
  <div className="border-l-2 border-gray-200 pl-4">
    <p className="text-sm md:text-base leading-relaxed mb-4">
      Lorem ipsum dolor sit amet consectetur. Dolor enim facilisis maecenas
      interdum amet. Vitae viverra risus mi cursus eu pharetra.
    </p>
    <p className="text-sm md:text-base leading-relaxed">
      interdum amet. Vitae viverra risus mi cursus eu viverra risus mi cursus
      eu pharetra.
    </p>
  </div>
</section>

 {/* Our Vision */}
 <section className="w-[260px] absolute  cursor-grab top-[49rem] left-[16.5rem] md:w-[300px] bg-[url('/bg2.png')] bg-cover bg-center text-white p-6 rounded-lg shadow-md"
  onClick={() => setIsOpen3(true)}

 >
  <h2 className="text-lg md:text-xl font-bold mb-4">Our specialty :</h2>
  <div className="border-l-2 border-gray-200 pl-4">
    <p className="text-sm md:text-base leading-relaxed mb-4">
      Lorem ipsum dolor sit amet consectetur. Dolor enim facilisis maecenas
      interdum amet. Vitae viverra risus mi cursus eu pharetra.
    </p>
    <p className="text-sm md:text-base leading-relaxed">
      interdum amet. Vitae viverra risus mi cursus eu viverra risus mi cursus
      eu pharetra.
    </p>
  </div>
</section>


{/* Our Achievments */}
<section className="w-[320px] absolute  cursor-grab top-[49rem]  right-[3.5rem] md:w-[500px] bg-[url('/bg1.png')] bg-cover bg-center text-white p-6  rounded-lg shadow-lg"
onClick={() => setIsOpen4(true)}

>
  <h2 className="text-2xl font-bold mb-4">About us :</h2>
  <div className="border-l-2 border-white pl-4">
    <p className="text-sm md:text-base leading-relaxed mb-4">
      Lorem ipsum dolor sit amet consectetur. Dolor enim facilisis maecenas
      interdum amet. Vitae viverra risus mi cursus eu pharetra. interdum amet.
      Vitae viverra risus mi cursus eu pharetra.
    </p>
    <p className="text-sm md:text-base leading-relaxed">
      Cum enim quis pellentesque vestibulum elementum nulla. Bibendum netus id
      feugiat purus fringilla ac tincidunt cum nisl. Bibendum netus id feugiat
      purus fringilla ac tincidunt cum nisl.
    </p>
  </div>
</section>

<SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
<SpringModal2 isOpen2={isOpen2} setIsOpen2={setIsOpen2} />
<SpringModal3 isOpen3={isOpen3} setIsOpen3={setIsOpen3} />
<SpringModal4 isOpen4={isOpen4} setIsOpen4={setIsOpen4} />

    </section>
  );
};



export default WhoAreWe;

{/* Spring Modal for the about Us card  */}

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-white to-gray-50 text-gray-800 lg:p-20 p-4 rounded-lg w-ful max-w-7xl shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <section className="flex flex-col items-start justify-center min-h-full px-6 md:px-16 lg:px-24 bg-white text-gray-800">
                <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold leading-tight mb-6">
                  About Us
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed mb-4 lg:w-[800px]">
                  Lorem ipsum dolor sit amet consectetur. Dolor enim facilisis
                  maecenas interdum amet. Vitae viverra risus mi cursus eu
                  pharetra. interdum amet. Vitae viverra risus mi cursus eu
                  pharetra.
                </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-500 mb-4 lg:w-[800px]">
                  Cum enim quis pellentesque vestibulum elementum nulla.
                  Bibendum netus id feugiat purus fringilla ac tincidunt cum
                  nisl. Bibendum netus id feugiat purus fringilla ac tincidunt
                  cum nisl.
                </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-500 mb-4 lg:w-[800px]">
                  Lorem ipsum dolor sit amet consectetur. Dolor enim facilisis
                  maecenas interdum amet. Vitae viverra risus mi cursus eu
                  pharetra.
                </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-500 lg:w-[800px]">
                  Cum enim quis pellentesque vestibulum elementum nulla.
                  Bibendum netus id feugiat purus fringilla Bibendum netus id
                  feugiat purus fringilla ac tincidunt cum nisl.
                </p>
              </section>
              <div className="mt-6 flex justify-center">
               {/* <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-4 py-2 rounded"
                >
                  Close
                </button>
      */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};



{/* Spring Modal for the Our Speciality  card  */}

const SpringModal2 = ({ isOpen2, setIsOpen2 }) => {
  return (
    <AnimatePresence>
      {isOpen2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen2(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-white to-gray-50 text-gray-800 lg:p-20 p-4 rounded-lg w-ful max-w-7xl shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <section className="flex flex-col items-start justify-center min-h-full px-6 md:px-16 lg:px-24 bg-white text-gray-800">
                <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold leading-tight mb-6">
                  About Us
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed mb-4 lg:w-[800px]">
                  Lorem ipsum dolor sit amet consectetur. Dolor enim facilisis
                  maecenas interdum amet. Vitae viverra risus mi cursus eu
                  pharetra. interdum amet. Vitae viverra risus mi cursus eu
                  pharetra.
                </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-500 mb-4 lg:w-[800px]">
                  Cum enim quis pellentesque vestibulum elementum nulla.
                  Bibendum netus id feugiat purus fringilla ac tincidunt cum
                  nisl. Bibendum netus id feugiat purus fringilla ac tincidunt
                  cum nisl.
                </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-500 mb-4 lg:w-[800px]">
                  Lorem ipsum dolor sit amet consectetur. Dolor enim facilisis
                  maecenas interdum amet. Vitae viverra risus mi cursus eu
                  pharetra.
                </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-500 lg:w-[800px]">
                  Cum enim quis pellentesque vestibulum elementum nulla.
                  Bibendum netus id feugiat purus fringilla Bibendum netus id
                  feugiat purus fringilla ac tincidunt cum nisl.
                </p>
              </section>
              <div className="mt-6 flex justify-center">
               {/* <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-4 py-2 rounded"
                >
                  Close
                </button>
      */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};




{/* Spring Modal for the Our Vision card  */}

const SpringModal3 = ({ isOpen3, setIsOpen3 }) => {
  return (
    <AnimatePresence>
      {isOpen3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen3(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-white to-gray-50 text-gray-800 lg:p-20 p-4 rounded-lg w-ful max-w-7xl shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <section className="flex flex-col items-start justify-center min-h-full px-6 md:px-16 lg:px-24 bg-white text-gray-800">
                <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold leading-tight mb-6">
                  About Us
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed mb-4 lg:w-[800px]">
                  Lorem ipsum dolor sit amet consectetur. Dolor enim facilisis
                  maecenas interdum amet. Vitae viverra risus mi cursus eu
                  pharetra. interdum amet. Vitae viverra risus mi cursus eu
                  pharetra.
                </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-500 mb-4 lg:w-[800px]">
                  Cum enim quis pellentesque vestibulum elementum nulla.
                  Bibendum netus id feugiat purus fringilla ac tincidunt cum
                  nisl. Bibendum netus id feugiat purus fringilla ac tincidunt
                  cum nisl.
                </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-500 mb-4 lg:w-[800px]">
                  Lorem ipsum dolor sit amet consectetur. Dolor enim facilisis
                  maecenas interdum amet. Vitae viverra risus mi cursus eu
                  pharetra.
                </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-500 lg:w-[800px]">
                  Cum enim quis pellentesque vestibulum elementum nulla.
                  Bibendum netus id feugiat purus fringilla Bibendum netus id
                  feugiat purus fringilla ac tincidunt cum nisl.
                </p>
              </section>
              <div className="mt-6 flex justify-center">
               {/* <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-4 py-2 rounded"
                >
                  Close
                </button>
      */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};




{/* Spring Modal for the Our Achievments  card  */}

const SpringModal4 = ({ isOpen4, setIsOpen4 }) => {
  return (
    <AnimatePresence>
      {isOpen4 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen4(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-white to-gray-50 text-gray-800 lg:p-20 p-4 rounded-lg w-ful max-w-7xl shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <section className="flex flex-col items-start justify-center min-h-full px-6 md:px-16 lg:px-24 bg-white text-gray-800">
                <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold leading-tight mb-6">
                  About Us
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed mb-4 lg:w-[800px]">
                  Lorem ipsum dolor sit amet consectetur. Dolor enim facilisis
                  maecenas interdum amet. Vitae viverra risus mi cursus eu
                  pharetra. interdum amet. Vitae viverra risus mi cursus eu
                  pharetra.
                </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-500 mb-4 lg:w-[800px]">
                  Cum enim quis pellentesque vestibulum elementum nulla.
                  Bibendum netus id feugiat purus fringilla ac tincidunt cum
                  nisl. Bibendum netus id feugiat purus fringilla ac tincidunt
                  cum nisl.
                </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-500 mb-4 lg:w-[800px]">
                  Lorem ipsum dolor sit amet consectetur. Dolor enim facilisis
                  maecenas interdum amet. Vitae viverra risus mi cursus eu
                  pharetra.
                </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-500 lg:w-[800px]">
                  Cum enim quis pellentesque vestibulum elementum nulla.
                  Bibendum netus id feugiat purus fringilla Bibendum netus id
                  feugiat purus fringilla ac tincidunt cum nisl.
                </p>
              </section>
              <div className="mt-6 flex justify-center">
               {/* <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-4 py-2 rounded"
                >
                  Close
                </button>
      */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
