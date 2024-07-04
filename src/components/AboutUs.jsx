import { aboutUs } from "../constants";
import styles from "../style";

const AboutUs = () => {
  return (
    <section id="About_us" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <h2 className={`${styles.heading2} mb-4 md:mb-0`}>
        The Team!
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center md:p-4 gap-8 h-full flex-1">
        {aboutUs.map((person, index) => (
          <div key={index} className="flex-1 h-full flex justify-between items-start flex-col w-full md:w-2/3 md:p-4 gap-6">
            <img src={person.pic} alt={`${person.name}_img`} className="w-[50px] h-[50px] rounded-md" />
            <div className="w-full flex justify-start items-center gap-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                {person.name}
              </h4>
              <hr className="w-1 h-5 bg-yellow-300 my-2" />
              <span className="font-poppins font-normal text-[18px] leading-[24px] text-cyan-300">
                {person.title}
              </span>
            </div>
            <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white">
              {person.description}
            </p>
            <div className="flex flex-row w-full h-full">{person.links.map((social, index) => (
              <img
                key={index}
                src={social.icon}
                alt={social.label}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== person.links.length - 1 ? "mr-6" : "mr-0"
                  }`}
                onClick={() => window.open(social.url, "_blank")}
              />
            ))}</div>
          </div>

        ))}
      </div>

    </section>
  );
}

export default AboutUs;
