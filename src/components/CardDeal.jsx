import { card } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Enhance Customer Engagement <br className="sm:block hidden" /> in a Few Easy Steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Transform your customer service experience with HiGuy. Our advanced AI solutions make it simple to provide personalized and efficient support, enhancing customer satisfaction with every interaction.
        <br className="sm:block hidden" />
        <br className="sm:block hidden" />
        HiGuy streamlines your support operations, allowing you to focus on growing your business while we handle the customer engagement. Experience the future of customer service with HiGuy.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
