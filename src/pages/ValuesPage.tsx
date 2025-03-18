import WeBelieve from "/assets/WeBelieve2.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const subtleAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
}

function AnimatedDiv({ children, className }: AnimatedDivProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px 0px -25% 0px", once: false });

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={inView ? "visible" : "hidden"}
      variants={subtleAnimation}
    >
      {children}
    </motion.div>
  );
}

export default function ValuesPage() {
  return (
    <div className="background-blue text-white mt-24 md:mt-0">
      <div className="flex justify-center items-baseline">
        <img className="img-webelieve" src={WeBelieve} alt="We Believe" />
      </div>
      
      <motion.div 
        className="flex flex-wrap lg:flex-nowrap justify-center md:gap-20 md:mx-48 h-full pb-0 md:pb-20"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <AnimatedDiv className="md:w-full flex md:mt-0 justify-center">
          <div className="p-4 mt-4 w-7/12 md:p-0 md:mt-0 border-solid border-2 md:border-4 gradient-border md:px-5 md:py-5 md:w-full flex flex-wrap">
            <h3 className="md:text-4xl">Empathy & Human Connection</h3>
            <div className="mt-24 lg:mt-48 flex justify-center items-end">
              <p className="md:text-2xl">
                Empathy drives us. Behind every innovation, there are real people with unique stories and needs.
              </p>
            </div>
          </div>
        </AnimatedDiv>
        
        <AnimatedDiv className="md:w-full mt-8 md:mt-0 flex justify-center">
          <div className="p-4 mt-4 w-7/12 md:mt-0 border-solid border-2 md:border-4 gradient-border md:px-5 md:py-5 md:w-full flex flex-wrap">
            <h3 className="md:text-4xl">Privacy & Trust</h3>
            <div className="mt-24 md:mt-48 flex justify-center items-end">
              <p className="md:text-2xl">
                We uphold the highest data privacy standards, ensuring trust at every step.
              </p>
            </div>
          </div>
        </AnimatedDiv>
        
        <AnimatedDiv className="md:w-full mt-8 md:mt-0 flex justify-center">
          <div className="p-4 mt-4 w-7/12 md:mt-0 border-solid border-2 md:border-4 gradient-border md:px-5 md:py-5 md:w-full flex flex-wrap">
            <h3 className="md:text-4xl">Ethical AI with Real Impact</h3>
            <div className="mt-24 md:mt-48 flex justify-center items-end">
              <p className="md:text-2xl">
                Our AI solutions are ethical, impactful, and designed to create real-world value.
              </p>
            </div>
          </div>
        </AnimatedDiv>
      </motion.div>
    </div>
  );
}