const LINKS = [
  {
    title: "About",
    items: ["How it works", "Featured", "Partnership", "Business Relation"],
  },
  {
    title: "Community",
    items: ["Events", "Blog", "Podcast", "Invite a friend"],
  },
  {
    title: "Socials",
    items: ["Discord", "Instagram", "Twitter", "Facebook"],
  },
];
 
const currentYear = new Date().getFullYear();
 
export function Footer() {
  return (
    <footer className="relative w-full bg-background-default pt-20">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <p
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </p>
                {items.map((link) => (
                  <li key={link}>
                    <p
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </p>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div>
            <img
              src='/img/VGM-Logo.png'
              alt='Vuong Gia Minh'
              width={200}
              height={85}
            />
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <p
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} Vuong Gia Minh. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}