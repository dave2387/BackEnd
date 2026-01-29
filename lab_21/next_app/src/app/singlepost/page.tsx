import Link from "next/link";

export default function SinglePost() {
  return (
    <div id="body">
      <div className="header">
        <div>
          <h1>Single Post</h1>

          <div className="article">
            <img
              src="/images/martianrover-journey.jpg"
              alt="Martian Rover Journey"
            />

            <h1>MARTIAN ROVER JOURNEY</h1>
            <span>FEBRUARY 6, 2023</span>

            <p>
              Our website templates are created with inspiration, checked for
              quality and originality and meticulously sliced and coded. What’s
              more, they’re absolutely free! You can do a lot with them. You can
              modify them. You can use them to design websites for clients, so
              long as you agree with the Terms of Use. You can even remove all our
              links if you want to.
            </p>

            <p>
              Looking for more templates? Just browse through all our Free
              Website Templates and find what you’re looking for. But if you
              don’t find any website template you can use, you can try our Free
              Web Design service and tell us all about it. Maybe you’re looking
              for something different, something special. And we love the
              challenge of doing something different and something special.
            </p>
          </div>

          <div className="sidebar">
            <ul>
              <li>
                <h1>FEATURED POSTS</h1>
                <Link href="/blog">
                  <img src="/images/moon-satellite.jpg" alt="Moon Satellite" />
                </Link>
                <h2>SOYUZ TMA-M</h2>
                <span>FEBRUARY 6, 2023</span>
              </li>

              <li>
                <h1>RECENT POSTS</h1>
                <ul>
                  <li>
                    <Link href="/blog">
                      <img src="/images/alien-life.jpg" alt="Alien Life" />
                    </Link>
                    <h2>ALIEN LIFE</h2>
                    <span>FEBRUARY 3, 2023</span>
                  </li>

                  <li>
                    <Link href="/blog">
                      <img src="/images/galaxy.jpg" alt="Galaxy" />
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
  );
}
