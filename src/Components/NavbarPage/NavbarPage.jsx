import React, { useEffect } from "react";
import "./NavbarPage.css";
import image1 from "../../Assets/car back.webp";
import image2 from "../../Assets/car front.webp";
import image3 from "../../Assets/car top.webp";
import image4 from "../../Assets/car rain.webp";
import image5 from "../../Assets/car frontview.webp";
import sellerImage1 from "../../Assets/logo.png";
import sellerImage2 from "../../Assets/logo.png";
import sellerImage3 from "../../Assets/logo.png";
import sellerImage4 from "../../Assets/logo.png";
import Aos from "aos";
import "aos/dist/aos.css";

const NavbarPage = () => {
  useEffect(() => {
    const imgs = document.querySelectorAll(".img-select a");
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
      imgItem.addEventListener("click", (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
      });
    });

    function slideImage() {
      const displayWidth = document.querySelector(
        ".img-showcase img:first-child"
      ).clientWidth;

      document.querySelector(".img-showcase").style.transform = `translateX(${-(imgId - 1) * displayWidth
        }px)`;
    }

    window.addEventListener("resize", slideImage);

    // Clean up the event listeners when the component unmounts
    return () => {
      imgBtns.forEach((imgItem) => {
        imgItem.removeEventListener("click", slideImage);
      });
      window.removeEventListener("resize", slideImage);
    };
  }, []);

  return (
    <div>
      <div className="card-wrapper">
        <div className="card">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={image1} alt="shoe image" />
                <img src={image2} alt="shoe image" />
                <img src={image3} alt="shoe image" />
                <img src={image4} alt="shoe image" />
                <img src={image5} alt="shoe image" />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a href="#" data-id="1">
                  <img src={image1} alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="2">
                  <img src={image2} alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="3">
                  <img src={image3} alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="4">
                  <img src={image4} alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="5">
                  <img src={image5} alt="shoe image" />
                </a>
              </div>
              {/* YouTube iframe */}
              {/* <iframe
                className="img-item"
                width="420"
                height="345"
                src="https://www.youtube.com/embed/PmVTFtwadzM"
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
          <div className="product-content">
            <h2 className="product-title">nike shoes</h2>
            <a href="#" className="product-link">
              visit nike store
            </a>
            <div className="product-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span>4.7(21)</span>
            </div>

            <div className="product-price">
              <p className="last-price">
                Old Price: <span>$257.00</span>
              </p>
              <p className="new-price">
                New Price: <span>$249.00 (5%)</span>
              </p>
            </div>

            <div className="product-detail">
              <h2>about this item: </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eveniet veniam tempora fuga tenetur placeat sapiente architecto
                illum soluta consequuntur, aspernatur quidem at sequi ipsa!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, perferendis eius. Dignissimos, labore suscipit.
                Unde.
              </p>
              <ul>
                <li>
                  Color: <span>Black</span>
                </li>
                <li>
                  Available: <span>in stock</span>
                </li>
                <li>
                  Category: <span>Shoes</span>
                </li>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>

            <div className="purchase-info">
              <input type="number" min="0" value="1" />
              <button type="button" className="btn">
                Add to Cart <i className="fas fa-shopping-cart"></i>
              </button>
              <button type="button" className="btn">
                Compare
              </button>
            </div>

            <div className="social-links">
              <p>Share At: </p>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Include the Sellers component code below
      <div className="sellers section">
        <div className="secContainer container">
          <div data-aos="fade-up" className="secHeading grid">
            <h3 className="secTitle">Explore top sellers in town</h3>
            <p>
              Joseph Samuel Girard holds the Guinness World Record for being the
              greatest salesman in the world.
            </p>
          </div>
          <div className="sellersContainer grid">
            <div data-aos="fade-up" className="singleSeller flex">
              <div className="imgDiv flex">
                <img src={sellerImage1} alt="" className="img" />
              </div>
              <span className="info">
                <h4 className="name">Toyota</h4>
                <p>from $40k</p>
              </span>
            </div>

            <div data-aos="fade-up" className="singleSeller flex">
              <div className="imgDiv flex">
                <img src={sellerImage2} alt="" className="img" />
              </div>
              <span className="info">
                <h4 className="name">Mercedes Benz</h4>
                <p>from $50k</p>
              </span>
            </div>

            <div data-aos="fade-up" className="singleSeller flex">
              <div className="imgDiv flex">
                <img src={sellerImage3} alt="" className="img" />
              </div>
              <span className="info">
                <h4 className="name">Volkswagen</h4>
                <p>from $35k</p>
              </span>
            </div>

            <div data-aos="fade-up" className="singleSeller flex">
              <div className="imgDiv flex">
                <img src={sellerImage4} alt="" className="img" />
              </div>
              <span className="info">
                <h4 className="name">Hyundai</h4>
                <p>from $23k</p>
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default NavbarPage;
