import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const menuLists = [
    {
      name: "top",
      href: "/",
    },
    {
      name: "ABOUT",
      href: "/about/",
    },
    {
      name: "ROOM",
      href: "/#room",
    },
    {
      name: "REVIEW",
      href: "/review/",
    },
    {
      name: "BLOG",
      href: "/blog/",
    },
    {
      name: "ACCESS",
      href: "/access/",
    },
    {
      name: "CONTACT",
      href: "/contact/",
    },
  ];

  const snsLists = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/echofee_osaka/",
      imagePath: "/public/images/ico-isg-bk.png",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/ECHO-HOUSE-324063728318655/?modal=admin_todo_tour",
      imagePath: "/public/images/ico-fb-bk.png",
    },
  ];

  return (
    <header
      className="header top-0 w-full bg-white ease-in duration-300 [&.add]:bg-[rgba(255,255,255,0.8)] shadow-[0_3px_6px_rgba(0,0,0,0.2)]"
      id="header"
    >
      <div className="header-inner">
        <p className="mainvisual-contact-btn">
          <Link href="/contact/">CONTACT US</Link>
        </p>
        <ul className="header-menu">
          {menuLists.map((item) => {
            return (
              <li className="header-menu-list" key={item.name}>
                <Link href={item.href} className="text-black">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="global-nav">
          <nav>
            <ul>
              {menuLists.map((item) => {
                return (
                  <li key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                );
              })}
              {snsLists.map((item) => {
                return (
                  <li key={item.name}>
                    <Link href={item.href} target="_blank">
                      <Image
                        src={item.imagePath}
                        alt={item.name}
                        width={20}
                        height={20}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="toggle-wrap">
          <div className="toggle-wrapper">
            <div className="toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <ul className="header-sns">
          {snsLists.map((item) => {
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  target="_blank"
                  className="header-sns-instagram"
                >
                  <Image
                    src={item.imagePath}
                    alt={item.name}
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
