import React from 'react'
import { Link } from "react-router-dom";
// import { FaAngleRight } from "react-icons/fa6";
import { FaShieldAlt, FaTruck, FaTags, FaHeadset } from "react-icons/fa";
import './about.css'

const About = () => {
  return (
    <div>
      {/* Our Story */}
      <div className="about-story">
        <h2>Biz Haqimizda</h2>
        <p>
          Auto Essential — bu avtomobil egalari uchun ishonchli hamkor. Biz sifatli shinalar, disklar va
          avtomobil ehtiyot qismlarini qulay narxlarda taqdim etamiz. Yillar davomida to'plangan tajriba
          va mijozlarimizga bo'lgan g'amxo'rlik bizni ushbu sohada ishonchli tanlovga aylantirdi.
        </p>
        <p>
          Bizning maqsadimiz — har bir mijozga sifat, ishonch va qulaylikni bir vaqtning o'zida taqdim etish.
          Original mahsulotlar, professional maslahat va tezkor xizmat — bularning barchasi bizning
          ustuvorligimizdir.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="about-features">
        <h2>Nima Uchun Bizni Tanlash Kerak</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>Sifat Kafolati</h3>
            <p>Faqat original va sertifikatlangan mahsulotlar bilan ishlaymiz.</p>
          </div>
          <div className="feature-card">
            <FaTruck className="feature-icon" />
            <h3>Tez Yetkazib Berish</h3>
            <p>Buyurtmangiz eng qisqa muddatda manzilingizga yetkaziladi.</p>
          </div>
          <div className="feature-card">
            <FaTags className="feature-icon" />
            <h3>Qulay Narxlar</h3>
            <p>Bozordagi eng raqobatbardosh narxlarni taklif qilamiz.</p>
          </div>
          <div className="feature-card">
            <FaHeadset className="feature-icon" />
            <h3>Doimiy Qo'llab-quvvatlash</h3>
            <p>Mutaxassislarimiz har qanday savolingizga javob berishga tayyor.</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="about-stats">
        <div className="stat-item">
          <h2>5000+</h2>
          <p>Mamnun Mijozlar</p>
        </div>
        <div className="stat-item">
          <h2>200+</h2>
          <p>Shina Modellari</p>
        </div>
        <div className="stat-item">
          <h2>10+</h2>
          <p>Yillik Tajriba</p>
        </div>
        <div className="stat-item">
          <h2>15+</h2>
          <p>Hamkor Do'konlar</p>
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta">
        <h2>Bugun Xarid Qilishga Tayyormisiz?</h2>
        <p>Eng sifatli shina va avto ehtiyot qismlarni hoziroq ko'rib chiqing.</p>
        <Link to="/shop" className="cta-button">
          Do'konga O'tish
        </Link>
      </div>
    </div>
  );
};

export default About