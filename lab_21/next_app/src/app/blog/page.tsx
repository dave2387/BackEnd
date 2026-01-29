import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog - Space Science Website",
};

export default function BlogPage() {
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
            <li className="menu selected">
              <Link href="/blog">Blog</Link>
              <ul className="secondary">
                <li>
                  <Link href="/blog/singlepost">Single post</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Body */}
      <div id="body">
        <div className="header">
          <div>
            <h1>Blog</h1>

            {/* Articles */}
            <div className="article">
              <ul>
                <li>
                  <Link href="/blog/singlepost">
                    <Image
                      src="/images/astronaut.jpg"
                      alt="Astronaut"
                      width={300}
                      height={200}
                    />
                  </Link>
                  <h1>SUCCESFUL REPAIR OF THE MX-1 SAT</h1>
                  <span>FEBRUARY 6, 2023</span>
                  <p>
                    This website template has been designed by Free Website
                    Templates for you, for free.
                  </p>
                  <Link href="/blog/singlepost" className="more">
                    Read More
                  </Link>
                </li>

                <li>
                  <Link href="/blog/singlepost">
                    <Image
                      src="/images/satellite-dish.jpg"
                      alt="Satellite Dish"
                      width={300}
                      height={200}
                    />
                  </Link>
                  <h1>ALIEN SIGNAL DISCOVERY</h1>
                  <span>FEBRUARY 3, 2023</span>
                  <p>
                    You can remove any link to our website from this website
                    template.
                  </p>
                  <Link href="/blog/singlepost" className="more">
                    Read More
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sidebar */}
            <div className="sidebar">
              <ul>
                <li>
                  <h1>FEATURED POSTS</h1>
                  <Link href="/blog/singlepost">
                    <Image
                      src="/images/moon-satellite.jpg"
                      alt="Moon Satellite"
                      width={250}
                      height={150}
                    />
                  </Link>
                  <h2>SOYUZ TMA-M</h2>
                  <span>FEBRUARY 6, 2023</span>
                </li>

                <li>
                  <h1>RECENT POSTS</h1>
                  <ul>
                    <li>
                      <Link href="/blog/singlepost">
                        <Image
                          src="/images/alien-life.jpg"
                          alt="Alien Life"
                          width={100}
                          height={80}
                        />
                      </Link>
                      <h2>ALIEN LIFE</h2>
                      <span>FEBRUARY 3, 2023</span>
                    </li>

                    <li>
                      <Link href="/blog/singlepost">
                        <Image
                          src="/images/galaxy.jpg"
                          alt="Galaxy"
                          width={100}
                          height={80}
                        />
                      </Link>
                      <h2>THE GALAXY</h2>
                      <span>FEBRUARY 1, 2023</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
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
