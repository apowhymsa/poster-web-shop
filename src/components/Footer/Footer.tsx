import "./Footer.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex h-fit gap-x-3 bg-gray-900 text-white px-10 py-10 flex-wrap"
    >
      <nav>
        <ul>
          <li className="font-semibold">Карта сайта</li>
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/products?sort=1">Товары</Link>
          </li>
          <li>
            <Link href="/about-us">О нас</Link>
          </li>
        </ul>
      </nav>
      <div>
        <p className="font-semibold">Контактная информация</p>
        <p>+380680000000</p>
        <p>г. Кривой Рог, Улица 1А.</p>
      </div>
      <div>
        <p className="font-semibold">Мы в социальных сетях</p>
        <Link href="https://www.instagram.com/clumba.krrog/" target="_blank">
          <Image
            src={"/icons8-instagram.svg"}
            alt="Instagram Logo"
            width={48}
            height={48}
          />
        </Link>
      </div>
      <iframe
        width="400"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA"
      ></iframe>
    </footer>
  );
};

export default Footer;
