import Image from "next/image";
import styles from './Carousel.module.css';

export default function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1500">
          <img src="/assets/img/carousel1.png" className={`${styles.carouselImage} card-img-top`} alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="1500">
          <img src="/assets/img/carousel2.png" className={`${styles.carouselImage} card-img-top`} alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="1500">
          <img src="/assets/img/carousel3.png" className={`${styles.carouselImage} card-img-top`} alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
