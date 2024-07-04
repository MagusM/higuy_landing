import { logo } from "../assets";
import styles from "../style";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} w-full flex-col gap-8`}>
    <div className={`w-full h-full flex flex-col md:flex-row items-start justify-between md:gap-10 md:px-10`}>
      <div className="flex:1 md:flex-1.5 flex flex-col md:flex-row justify-start items-start w-full">
        <img
          src={logo}
          alt="higuy"
          className="w-[266px] h-[72.14px] object-cover"
        />
        <p className={`${styles.paragraph} flex lg:max-w-[500px] max-w-full`}>
          A new way to revolutionize customer service, making interactions easy, reliable, and personalized.
        </p>
      </div>

      <div className="flex-[1] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            Resources
          </h4>
          <ul className="list-none mt-4">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
              Terms
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
              Blog
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[14px] md:text-[18px] leading-[27px] text-white">
        Copyright Ⓒ {new Date().getFullYear()} HiGuy. All Rights Reserved.
      </p>

      {/* <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div> */}
    </div>
  </section>
);

export default Footer;
