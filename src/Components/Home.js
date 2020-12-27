import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        {/* procucts row 1 */}

        <div className="home__row">
          <Product
            id="AMD"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
            price={487.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UL320_.jpg"
          />
          <Product
            id="Core i5"
            title="HP Elite Desktop PC Computer Intel Core i5 3.1-GHz, 8 gb Ram, 1 TB Hard Drive, DVDRW, 19 Inch LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10 (Renewed)"
            price={579.97}
            rating={4}
            image="https://m.media-amazon.com/images/I/61PlVVOd3QL._AC_UY218_.jpg"
          />
        </div>
        {/* procucts row 2*/}

        <div className="home__row">
          <Product
            id="4903850"
            title="Best Choice Products 5-Piece Kitchen Dining Table Set for Dining Room, Kitchen, Dinette, Compact Space w/Glass Tabletop, 4 Faux Leather Metal Frame Chairs - Black"
            price={199.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71KHJss7SML._AC_UL320_.jpg"
          />

          <Product
            id="23445923"
            title="New Apple iPhone 12 Pro (256GB, Pacific Blue) [Locked] + Carrier Subscription"
            price={1099.09}
            rating={5}
            image="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY218_.jpg"
          />

          <Product
            id="3254354301"
            title="Compact refrigerator, TACKLIFE 3.2 Cu.Ft, Mini Fridge with Freezer, 2 Door, With LED Light, Ideal Small Refrigerator for Bedroom, Office, Dorm, RV - MPBFD321"
            price={189.97}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Z6LbX4wNL._AC_UY218_.jpg"
          />
        </div>
        {/* procucts row 3*/}

        <div className="home__row">
          <Product
            id="4903855"
            title="NUBWO Portable Bluetooth Speaker with Enhanced Bass and Stereo Sound, 8H Playtime, Bulti in Mic, Mini Wireless Speaker Portable for Phone, iPad, Mac, Tablet, Echo(Black)"
            price={15.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71XCYPCZBhL._AC_UY218_.jpg"
          />

          <Product
            id="23445903"
            title="CanMixs Smart Watch for Android Phones iOS Waterproof Smart Watches for Women Men Sports Digital Watch Fitness Tracker Heart Rate Blood Oxygen Sleep Monitor Touch Screen Compatible Samsung iPhone"
            price={33.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71nudiW6rBL._AC_UL320_.jpg"
          />

          <Product
            id="3254354365"
            title="Lorell Soho High-Back Leather Executive Chair, Black"
            price={98.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71c5l0YARGL._AC_UL320_.jpg"
          />
        </div>
        {/* procucts row 4*/}

        <div className="home__row">
          <Product
            id="4903853"
            title="bopmen T3 Wired Over Ear Headphones - Stereo Sound Headphones with Tangle Free Cord Bass Comfortable Headphones, Lightweight Portable for Smartphone Tablet Computer PC Laptop Notebook"
            price={17.71}
            rating={5}
            image="https://m.media-amazon.com/images/I/51JgVRxaT3L._AC_UL320_.jpg"
          />

          <Product
            id="23445939"
            title="Brother MFC-J497DW Inkjet Multifunction Printer - Color - Plain Paper Print - Desktop"
            price={161.38}
            rating={5}
            image="https://m.media-amazon.com/images/I/513mkc3wKDL._AC_UY218_.jpg"
          />

          <Product
            id="3254354347"
            title="Tablet 10 Inch Android 9.0 3G Phone Tablets with 32GB Storage Dual Sim Card 5MP Camera, WiFi, Bluetooth, GPS, Quad Core, HD Touchscreen, Support 3G Phone Call (Black)"
            price={106.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61NfcHUmxBL._AC_UY218_.jpg"
          />
        </div>
        {/* procucts row 5*/}

        <div className="home__row">
          <Product
            id="4903817"
            title="WiFi Smart Table Lamp for Bedrooms, LE LampUX Touch Bedside Lamp Works with Alexa Google Home, Modern Dimmable LED Nightstand Lamp, White & RGB Color Changing Night Light for Kids Room, Living Room"
            price={38.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51XdQCl4Z2L._AC_UL320_.jpg"
          />

          <Product
            id="23445909"
            title="Wyze Cam 1080p HD Indoor WiFi Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, White, 1-Pack"
            price={25.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY218_.jpg"
          />

          <Product
            id="3254354345"
            title="Ultimate Collection Meena Kumari 3 DVD Set [NTSC] - [Pyar Ka Sagar / Chirag Kahan Roshni Kahan / Char Dil Char Rahein]"
            price={22.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51eQOC6oa7L._AC_UY218_.jpg"
          />
        </div>
        {/* procucts row 6*/}

        <div className="home__row">
          <Product
            id="90829396"
            title="Dell UltraSharp U3415W 34-Inch Curved LED-Lit Monitor"
            price={590}
            rating={4}
            image="https://m.media-amazon.com/images/I/71br6lyzhuL._AC_UY218_.jpg"
          />

          <Product
            id="3254354354"
            title="Char-Broil Classic 360 3-Burner Liquid Propane Gas Grill"
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81riNz4wRFL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
