import classNames from "classnames/bind";
import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import NavBar from "../NavBar";
import NoPurchase from "../NoPurchase";
import styles from "./Refund.module.scss";

const cx = classNames.bind(styles);

function Refund() {
  return (
    <>
      <Header />
      <div className={cx("refund_wrapper")}>
        <div className={cx("refund_container")}>
          <NavBar />
          <div className={cx("purchase_item")}>
            <div className={cx("purchase_item-info")}>
              <div className={cx("purchase_item-header")}>
                <div className={cx("shop-name")}>Baboon’s Toys Shop</div>
                <div className={cx("status")}>REFUND</div>
              </div>
              <div className={cx("purchase_item-detail")}>
                <div className={cx("content")}>
                  <img
                    src="https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg"
                    alt="product-img"
                    className={cx("product-img")}
                  />
                  <div className={cx("product-content")}>
                    <div className={cx("product-name")}>
                      Prevue Pet Products Travel Carrier for Birds, Black
                    </div>
                    <div className={cx("quantity")}>x2</div>
                  </div>
                </div>
                <div className={cx("price")}>$1000</div>
              </div>
            </div>
            <div className={cx("purchase_item_order-total")}>
              <div className={cx("order-total-detail")}>
                <div className={cx("text")}>Order Total:</div>
                <div className={cx("price")}>$1000</div>
              </div>
            </div>
            <div className={cx("purchase_item-options")}>
              <div className={cx("text")}>No rating received</div>
              <div className={cx("button")}>
                <button className={cx("contact-btn")}>Contact Seller</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Refund;
