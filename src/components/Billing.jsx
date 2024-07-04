import { bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily Enhance Your <br className="sm:block hidden" /> Customer Service Experience
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        HiGuy makes it simple to deliver top-notch customer service with our AI-driven solutions. Our intelligent assistant ensures every customer interaction is handled efficiently and personally.
        <br className="sm:block hidden" />
        <br className="sm:block hidden" />
        Enhance customer satisfaction and streamline your support operations with HiGuy. Let our advanced AI take your customer service to the next level, providing real-time, personalized assistance to your clients.
      </p>
    </div>
  </section>
);

export default Billing;
