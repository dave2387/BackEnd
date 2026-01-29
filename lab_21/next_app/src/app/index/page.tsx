import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Space Science Website",
};

export default function HomePage() {
  return (
    <div id="page">
      {/* Header */}
      <div id="header">
        <div>
          <Link href="/" className="logo">
            <Image src="/images/logo.png" alt="Logo" width={120} height={60} />
          </Link>

          <ul id="navigation">
            <li className="selected">
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
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Body */}
      <div id="body" className="home">
        {/* Hero Section */}
        <div className="header">
          <div>
            <Image
              src="/images/satellite.png"
              alt="Satellite"
              width={300}
              height={300}
              className="satellite"
            />

            <h1>SOYUZ TMA-M</h1>
            <h2>SPACECRAFT</h2>

            <Link href="/blog" className="more">
              Read More
            </Link>

            <h3>FEATURED PROJECTS</h3>
            <ul>
              <li>
                <Link href="/projects">
                  <Image
                    src="/images/project-image1.jpg"
                    alt="Project 1"
                    width={150}
                    height={100}
                  />
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <Image
                    src="/images/project-image2.jpg"
                    alt="Project 2"
                    width={150}
                    height={100}
                  />
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <Image
                    src="/images/project-image3.jpg"
                    alt="Project 3"
                    width={150}
                    height={100}
                  />
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <Image
                    src="/images/project-image4.jpg"
                    alt="Project 4"
                    width={150}
                    height={100}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission */}
        <div className="body">
          <div>
            <h1>OUR MISSION</h1>
            <p>
              This website template has been designed by Free Website Templates
              for you, for free. You can replace all this text with your own
              content.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer">
          <div>
            <ul>
              <li>
                <h1>FEATURED VIDEO</h1>
                <Link href="/blog">
                  <Image
                    src="/images/mars-rover.jpg"
                    alt="Mars Rover"
                    width={300}
                    height={200}
                  />
                  <span></span>
                </Link>
              </li>

              <li>
                <h1>LATEST BLOG</h1>
                <ul>
                  <li>
                    <Link href="/blog">
                      <Image
                        src="/images/finding-planet.jpg"
                        alt="Finding Planet"
                        width={120}
                        height={80}
                      />
                    </Link>
                    <h1>FINDING PLANET X-123</h1>
                    <span>FEBRUARY 6, 2023</span>
                    <Link href="/blog" className="more">
                      Read More
                    </Link>
                  </li>

                  <li>
                    <Link href="/blog">
                      <Image
                        src="/images/new-satellitedish.jpg"
                        alt="Satellite Dish"
                        width={120}
                        height={80}
                      />
                    </Link>
                    <h1>NEW SATELLITE DISH</h1>
                    <span>FEBRUARY 3, 2023</span>
                    <Link href="/blog" className="more">
                      Read More
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
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
