import search from "./assets/search.svg";
import percent from "./assets/percent.svg";
import substract from "./assets/substract.svg";
import mail from "./assets/mail.svg";
import money from "./assets/money.svg";
import Form from "./Form";

export default function SectionOrder() {
  return (
    <section className="order">
      <div className="container">
        <div className="order__title">
          <h2 className="order__title--heading">
            Оформление <span className="c-accent">Заказа</span>
          </h2>
          <p className="order-title--text">
            Перед заполнением формы ознакомьтесь с нашей схемой работы!
          </p>
        </div>
        <div className="widget-steps">
          <div className="widget-steps__item">
            <img src={search} alt="Icon search" className="" />
            <p className="widget-steps__item-text">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <CirclesSvg />
          <div className="widget-steps__item">
            <img src={percent} alt="Icon percent" className="" />
            <p className="widget-steps__item-text">Сonsectetura elit</p>
          </div>
          <CirclesSvg />
          <div className="widget-steps__item">
            <img src={substract} alt="Icon percent" className="" />
            <p className="widget-steps__item-text">Sed do eiusmod tempor</p>
          </div>
          <CirclesSvg />
          <div className="widget-steps__item">
            <img src={mail} alt="Icon mail" className="" />
            <p className="widget-steps__item-text">
              Esse cillum dolore eu fugiat
            </p>
          </div>
          <CirclesSvg />
          <div className="widget-steps__item">
            <img src={money} alt="Icon money" className="" />
            <p className="widget-steps__item-text">
              Excepteur sint occaecat cupidatat non proident
            </p>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
}

const CirclesSvg = () => (
  <svg width="111" viewBox="0 0 111 6" fill="none">
    <circle cx="81.0111" cy="3" r="3" fill="#C4C4C4" />
    <circle cx="107.011" cy="3" r="3" fill="#C4C4C4" />
    <circle cx="55.0111" cy="3" r="3" fill="#C4C4C4" />
    <circle cx="29.0111" cy="3" r="3" fill="#C4C4C4" />
    <circle cx="3.01111" cy="3" r="3" fill="#C4C4C4" />
  </svg>
);
