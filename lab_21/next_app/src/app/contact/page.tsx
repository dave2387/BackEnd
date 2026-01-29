import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact - Space Science Website",
};

export default function ContactPage() {
  return (
    <div id="page">
      {/* Header */}
      <div id="header">
        <div>
          <Link href="/" className="logo">
            <Image src="/images/logo.png" alt="Logo" width={120} height={60} />
          </Link>

          <ul id="navigation">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li className="menu">
              <Link href="/projects">Projects</Link>
              <ul className="primary">
                <li>
                  <Link href="/projects/proj1">proj 1</Link>
                </li>
              </ul>
            </li>
            <li className="menu">
              <Link href="/blog">Blog</Link>
              <ul className="secondary">
                <li>
                  <Link href="/blog/singlepost">Single post</Link>
                </li>
              </ul>
            </li>
            <li className="selected">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Body */}
      <div id="body">
        <div className="header">
          <div className="contact">
            <h1>Contact</h1>
            <h2>DO NOT HESITATE TO CONTACT US</h2>

            {/* Contact Form */}
            <form action="#" method="post">
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email Address" />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea name="message" placeholder="Message" />
              <input type="submit" value="Send" id="submit" />
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="footer">
        <div className="connect">
          <div>
            <h1>FOLLOW OUR MISSIONS ON</h1>
            <div>
              <a className="facebook" href="#">facebook</a>
              <a className="twitter" href="#">twitter</a>
              <a className="googleplus" href="#">googleplus</a>
              <a className="pinterest" href="#">pinterest</a>
            </div>
          </div>
        </div>

        <div className="footnote">
          <div>
            <p>© 2023 BY SPACE PROSPECTION | ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </div>
  );
}
