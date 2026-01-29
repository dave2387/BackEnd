import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About - Space Science Website",
};

export default function AboutPage() {
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
            <li className="selected">
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
      <div id="body" className="about">
        <div className="header">
          <div>
            <h1>About</h1>
            <h2>We Have Free Templates for Everyone</h2>
            <p>
              Our website templates are created with inspiration, checked for
              quality and originality and meticulously sliced and coded. What’s
              more, they’re absolutely free! You can modify them and use them for
              client projects as long as you agree with the{" "}
              <a
                href="https://freewebsitetemplates.com/about/terms/"
                target="_blank"
              >
                Terms of Use
              </a>
              .
            </p>
          </div>
        </div>

        <div className="body">
          <div>
            <Image
              src="/images/earth-satellite.jpg"
              alt="Earth Satellite"
              width={500}
              height={300}
            />
            <h2>We Have More Templates for You</h2>
            <p>
              Browse through our{" "}
              <a href="https://freewebsitetemplates.com/" target="_blank">
                Free Website Templates
              </a>{" "}
              or try our{" "}
              <a
                href="https://freewebsitetemplates.com/freewebdesign/"
                target="_blank"
              >
                Free Web Design
              </a>{" "}
              service if you want something custom.
            </p>
          </div>
        </div>

        <div className="footer">
          <div>
            <Image
              src="/images/space-shuttle.png"
              alt="Space Shuttle"
              width={200}
              height={120}
            />
            <h2>Be Part of Our Community</h2>
            <p>
              Join the discussion on our{" "}
              <a
                href="https://freewebsitetemplates.com/forums/"
                target="_blank"
              >
                forum
              </a>{" "}
              and meet people with the same interests.
            </p>
          </div>
        </div>

        <div className="section">
          <div>
            <h2>Template Details</h2>
            <p>
              Design Version 1. Code version 3. Discussion and updates for this{" "}
              <a
                href="https://freewebsitetemplates.com/discuss/spacescience/"
                target="_blank"
              >
                Space Science Website Template
              </a>
              .
            </p>
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
