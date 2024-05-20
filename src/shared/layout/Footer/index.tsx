import facebook from "@/shared/media/imgs/facebook.png";
import linkedin from "@/shared/media/imgs/linkedin.png";
import twitter from "@/shared/media/imgs/twitter.png";

const footerSections = [
  {
    title: "Home",
    links: ["Categories", "Devices", "Pricing", "FAQ"],
  },
  {
    title: "Movies",
    links: ["Genres", "Trending", "New Release", "Popular"],
  },
  {
    title: "Shows",
    links: ["Genres", "Trending", "New Release", "Popular"],
  },
  {
    title: "Support",
    links: ["Contact Us"],
  },
  {
    title: "Subscription",
    links: ["Plans", "Features"],
  },
];

function Footer() {
  return (
    <footer className="bg-[#0F0F0F] w-full flex justify-center">
      <div className="w-[87%] flex flex-col gap-3">
        <div className="md:py-16 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold">{section.title}</h4>
              <ul className="[&>li]:text-[#999999] lg:[&>li]:text-base [&>li]:text-[0.9rem] flex flex-col gap-2 pt-3 ">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="flex gap-3 pt-3">
              <button className="border border-[#262626] bg-[#1A1A1A] p-3 rounded-lg">
                <img className="w-5" src={facebook} alt="facebook" />
              </button>
              <button className="border border-[#262626] bg-[#1A1A1A] p-3 rounded-lg">
                <img className="w-5" src={twitter} alt="twitter" />
              </button>
              <button className="border border-[#262626] bg-[#1A1A1A] p-3 rounded-lg">
                <img className="w-5" src={linkedin} alt="linkedin" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#262626] h-[0.06rem] w-full"></div>
          <div className="flex flex-col md:flex-row md:justify-between pt-5 pb-7 gap-2">
            <p className="text-[#999999] text-[0.9rem] md:text-base font-normal">
              @2023 streamvib, All Rights Reserved
            </p>
            <div className="[&>p]:text-[#999999] [&>p]:text-[0.9rem] md:[&>p]:text-base flex gap-3 justify-start lg:justify-center">
              <p>Terms of Use</p>
              <div className="w-[0.06rem] h-full bg-[#262626] text-transparent">
                .
              </div>
              <p>Privacy Policy</p>
              <div className="w-[0.06rem] h-full bg-[#262626] text-transparent">
                .
              </div>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
