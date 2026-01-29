import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects - Space Science Website",
};

export default function ProjectsPage() {
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
            <li className="menu selected">
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
      <div id="body">
        <div className="header">
          <div>
            <h1>Projects</h1>

            <ul>
              {/* Project 1 */}
              <li>
                <Link href="/projects/proj1">
                  <Image
                    src="/images/curious-rover.jpg"
                    alt="Mars Curiosity Rover"
                    width={300}
                    height={200}
                  />
                </Link>

                <div>
                  <h1>MARS CURIOSITY ROVER</h1>
                  <p>
                    Our website templates are created with inspiration, checked
                    for quality and originality and meticulously sliced and
                    coded. You can modify them and use them for client projects
                    as long as you agree with the Terms of Use.
                  </p>
                  <Link href="/projects/proj1" className="more">
                    Read More
                  </Link>
                </div>
              </li>

              {/* Project 2 */}
              <li>
                <Link href="/projects/proj1">
                  <Image
                    src="/images/space-station.jpg"
                    alt="International Space Station"
                    width={300}
                    height={200}
                  />
                </Link>

                <div>
                  <h1>INTERNATIONAL SPACE STATION</h1>
                  <p>
                    Browse through all our free website templates. If you don’t
                    find what you’re looking for, try our free web design service
                    and tell us about your idea. We love building something
                    special.
                  </p>
                  <Link href="/projects/proj1" className="more">
                    Read More
                  </Link>
                </div>
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
