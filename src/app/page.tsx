"use client"
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight, ShoppingBasket } from "lucide-react";
import React from "react";
import { Quote } from "lucide-react";
// Navbar Section
const Navbar = () => {
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('main-header');
      if (header) {
        setIsSticky(window.scrollY > header.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header id="main-header">
      <div id="top-bar" className={`px-14 border-b-2 py-1 flex justify-between transition-opacity duration-300 ${isSticky ? 'opacity-0 invisible' : 'opacity-100 visible'
        }`}>
        <p className="text-sm font-semibold">For Teams</p>
        <div className="text-sm flex font-semibold gap-4">
          <p className="flex items-center gap-2">Resources <ChevronDown size={15} /></p>
          <p className="flex items-center gap-2">$CAD <ChevronDown size={15} /></p>
        </div>
      </div>
      <nav id="main-nav" className={`bg-white text-black p-5 z-50 transition-all duration-1000 ${isSticky ? 'fixed w-full top-0 border-b-2' : ''
        }`}>
        <div className="flex items-center justify-between px-5">
          <div className="flex items-center gap-10">
            <div className="px-4">
              <Image
                src={"https://www.branchfurniture.ca/cdn/shop/files/branch-hi-res_white-min.png?v=1614780569"}
                width={130}
                height={50}
                alt="Branch Logo"
                className="invert opacity-75"
              />
            </div>
            <div className="flex gap-8 px-5">
              <a href="#" className="text-sm font-bold">SHOP BY</a>
              <a href="#" className="text-sm font-bold">CHAIRS</a>
              <a href="#" className="text-sm font-bold">DESKS</a>
              <a href="#" className="text-sm font-bold">ACCESSORIES</a>
              <a href="#" className="text-sm font-bold">WORKSPACE</a>
              <a href="#" className="text-sm font-bold">BUNDLES</a>
              <a href="#" className="text-sm font-bold">SALE</a>
            </div>
          </div>
          <div>
            <div className="px-5 flex items-center gap-4">
              <button className="text-sm font-semibold text-white px-3 py-1 bg-[#314438]">DESIGN MY OFFICE</button>
              <ShoppingBasket size={22} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

// Hero Section
const Hero = () => {
  return (
    <div className="h-[calc(100vh-10vh)] relative">
      <Image
        src={"https://www.branchfurniture.ca/cdn/shop/files/desktop_homepage.jpg?v=1726096846"}
        width={1920}
        height={1080}
        alt="Branch Furniture"
        className="absolute top-0 left-0 h-full object-cover z-0"
      />
      <div className="z-10 absolute bottom-[15vh] left-[20vh] max-w-lg flex flex-col gap-8">
        <p className="text-6xl font-medium font-serif">A new era of ergonomics</p>
        <p className="text-xl">Introducing Ergonomic Chair Pro: our most advanced ergonomic chair, designed for maximum adjustability and superlative support</p>
        <div>
          <button className="font-semibold bg-gradient-to-r from-black via-gray-600 to-gray-800 px-14 py-4 text-white">LEARN MORE</button>
        </div>
        <p>Need help? <a href="" className="underline">Take Our Quiz</a></p>
      </div>
    </div>
  )
}

const Banner1 = () => {
  return (
    <div className="bg-[#314438] text-center text-white py-10">
      <div className="w-1/2 mx-auto flex flex-col gap-4">
        <p className="font-bold text-sm">PRESS</p>
        <p className="text-3xl font-serif">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In repellendus, maxime voluptate blanditiis accusamus et esse nostrum eos minus magni?</p>
        <div className="flex justify-around py-4 items-center">
          <div className="w-20 h-20 rounded-full bg-white opacity-10"></div>
          <div className="w-20 h-20 rounded-full bg-white opacity-10"></div>
          <div className="w-20 h-20 rounded-full bg-white opacity-10"></div>
          <div className="w-20 h-20 rounded-full bg-white opacity-10"></div>
          <div className="w-20 h-20 rounded-full bg-white opacity-10"></div>
        </div>
      </div>
    </div>
  )
}

// Explore Section
const Explore = () => {
  return (
    <div className="py-12">
      <div className="lg:w-[80%] 2xl:w-[60%] mx-auto flex flex-col gap-6">
        <div className="flex justify-center flex-col items-center">
          <p className="text-4xl font-medium font-serif mb-2">Wherever you are, work your best</p>
          <div className="w-full py-6 flex gap-8">
            <div className="w-1/2">
              <div className="h-[300px] bg-gray-300"></div>
              <p className="font-semibold flex items-center gap-2 text-2xl my-2 text-[#8cc1d2]">Home Office
                <span className="bg-[#8cc1d2] rounded-full"><ChevronRight color="white" /></span>
              </p>
              <p>Work essentials for everyday use.</p>
            </div>
            <div className="w-1/2">
              <div className="h-[300px] bg-gray-300"></div>
              <p className="font-semibold flex items-center gap-2 text-2xl my-2 text-[#8cc1d2]">Team Office
                <span className="bg-[#8cc1d2] rounded-full"><ChevronRight color="white" /></span>
              </p>
              <p>Solutions for teams of all sizes.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <p className="text-4xl font-medium font-serif mb-2">Explore our products</p>
          <div className="w-full py-6 grid grid-cols-3 gap-8">
            {
              ["Chairs", "Desks", "Accessories"].map((item) => (
                <div key={item} className="flex flex-col items-center gap-2">
                  <div className="h-[500px] w-full bg-gray-300"></div>
                  <p className="font-semibold text-2xl">{item}</p>
                  <p className="font-semibold flex items-center gap-2 my-2 text-[#8cc1d2]">See all
                    <span className="bg-[#8cc1d2] rounded-full"><ChevronRight size={15} color="white" /></span>
                  </p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex justify-center pb-4">
          <button className="bg-[#314438] px-12 py-4 text-white font-semibold text-sm">SHOP COLLECTIONS</button>
        </div>
      </div>
    </div>
  )
}

// Banner 2 Section
const Banner2 = () => {
  const items1 = ["ERGONMIC\nSUPPORT", "FEWER\nMIDDLEMEN", "FREE & FAST\nSHIPPING"];
  const items2 = ["WHITE-GLOVE\nSERVICE", "QUICK\nTURNAROUNDS", "TRADE-IN\nFLEXIBILITY"];
  return (
    <div className="w-full py-12 bg-[#f3f0ed]">
      <div className="lg:w-[80%] 2xl:w-[60%] mx-auto">
        <div className="flex flex-col items-center gap-2 py-4">
          <p className="text-4xl font-medium font-serif">We do office furniture a little bit different.</p>
          <p>That means easy, affordable, and flexible—whether you’re furnishing your home office or your business</p>
        </div>
        <div className="py-6 flex items-center">
          <div className="w-1/2 grid grid-cols-3 gap-4">
            {
              items1.map((item) => (
                <div key={item} className="flex flex-col items-center gap-4 whitespace-pre">
                  <div className="w-16 h-16 bg-gray-400"></div>
                  <p className="text-center text-sm font-semibold">{item}</p>
                </div>
              ))
            }
          </div>
          <div className="w-1/2 grid grid-cols-3 bg-white py-8 gap-4 relative">
            {
              items2.map((item) => (
                <div key={item} className="flex flex-col items-center gap-4 whitespace-pre">
                  <div className="w-16 h-16 bg-gray-400"></div>
                  <p className="text-center text-sm font-semibold">{item}</p>
                </div>
              ))
            }
            <span className="bg-[#8cc1d2] px-2 text-xs py-1 font-semibold text-white absolute left-[40%] -translate-y-2 -rotate-3">FOR TEAM OFFICES</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Our Story Section
const OurStory = () => {
  return (
    <div className="py-12">
      <div className="mx-auto lg:w-[80%] 2xl:w-[60%] flex items-center">
        <div className="flex flex-col gap-8 w-1/2">
          <p className="text-4xl font-serif">We sell direct and share the savings.</p>
          <p>We cut out middlemen and maintain a lean line of modular inventory to save you up to 50% compared to traditional office furniture of similar quality.</p>
          <div>
            <button className="bg-[#314438] px-12 py-4 text-white font-semibold text-sm">OUR STORY</button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex gap-8 justify-center w-full">
            <div className="grid grid-flow-row grid-rows-4 whitespace-pre">
              <div className="flex h-full justify-end items-center text-right">{"Delivery, Assembly\n& Disposal"}</div>
              <div className="flex h-full justify-end items-center text-right">{"Dealer\nMarkup"}</div>
              <div className="flex h-full justify-end items-center text-right">{"Manufacturer\nMarkup"}</div>
              <div className="flex h-full justify-end items-center text-right">{"Materials &\nManufacturer"}</div>
              <div className="flex h-full justify-end items-center text-right"><br /></div>
            </div>
            <div>
              <div className="h-[350px] w-[100px] bg-[#314438] opacity-50"></div>
              <p className="font-semibold text-center mt-4">Furniture<br />Dealer</p>
            </div>
            <div className="h-[350px] w-[100px]">
              <div className="text-center flex items-end border-dotted border-2 h-1/2">
                Save upto 50%
              </div>
              <div className="bg-[#314438] h-1/2"></div>
              <p className="text-center font-bold font-serif text-2xl
              mt-4">Branch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// BestSellers Section
const BestSellers = () => {
  const items = [
    {
      name: "Branch Ergonomic Chair",
      price: "$299",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      name: "Branch Ergonomic Chair",
      price: "$299",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      name: "Branch Ergonomic Chair",
      price: "$299",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      name: "Branch Ergonomic Chair",
      price: "$299",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    }
  ]
  return (
    <div className="bg-[#f3f0ed] w-full py-12">
      <div className="lg:w-[80%] 2xl:w-[60%] m-auto py-6">
        <div className="flex justify-between w-full py-6">
          <p className="text-4xl font-medium font-serif">Our bestsellers</p>
          <div className="flex gap-4">
            <div className="border-[1px] border-gray-400 rounded-full p-2">
              <ChevronLeft />
            </div>
            <div className="border-[1px] border-gray-400 rounded-full p-2">
              <ChevronRight />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 py-12 w-full">
          {
            items.map((item) => (
              <div key={item.name} className="bg-white">
                <div className="h-[250px] bg-gray-200"></div>
                <div className="p-4 flex flex-col gap-2">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs">{item.price}</p>
                  <p className="text-xs">{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="flex justify-center py-6">
          <button className="bg-[#314438] px-12 py-4 text-white font-semibold text-sm">SEE ALL PRODUCTS</button>
        </div>
      </div>
    </div>
  )
}

// Shop Space Section
const ShopSpace = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="w-full bg-[#f3eeea] py-12">
      <div className="lg:w-[80%] 2xl:w-[60%] mx-auto py-4">
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
          <p className="text-4xl font-medium font-serif">Shop by space and get inspired</p>
          <p>Get inspired to create your own Branch workspace with our curated rooms. Explore different spaces and their featured products.</p>
        </div>
        <div className="py-6">
          <div className="flex py-3 justify-around font-bold opacity-50 text-lg border-b-4 border-black border-opacity-40">
            <p onClick={() => setActiveTab(0)} className="cursor-pointer">SCANDINAVIAN STUDIO</p>
            <p onClick={() => setActiveTab(1)} className="cursor-pointer">ORGANIZED OASIS</p>
            <p onClick={() => setActiveTab(2)} className="cursor-pointer">MIDCENTURY SANCTURY</p>
          </div>
          <div className="py-6">
            <div className={`h-[500px] w-full ${activeTab === 0 ? "bg-gray-200" : activeTab == 1 ? "bg-gray-400" : "bg-gray-600"}`}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-center py-6">
            <button className="bg-[#314438] px-12 py-4 text-white font-semibold text-sm">SHOP ALL SPACES</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Banner 3 Section
const Banner3 = () => {
  return (
    <div className="bg-[#9c432e] text-white py-12 w-full">
      <div className="flex gap-10 justify-between items-center lg:w-[80%] 2xl:w-[60%] mx-auto py-6">
        <div className="w-1/2 text-3xl flex flex-col gap-2 whitespace-nowrap font-serif">
          <p>Free Shipping</p>
          <p>30 day trial.</p>
          <p>5000+ five-star reviews.</p>
        </div>
        <div className="w-1/2 text-xl">
          <p>
            Get live, local support from assembly to ergonomic tips. If there’s something you don’t like, return your furniture for any reason within 30 days. <a href="#" className="underline">Learn more</a>
          </p>
        </div>
      </div>
    </div>
  )
}

// Testimonials Section
const testimonials = [
  {
    name: "Jeff Cripe",
    title: "CEO of Cargo",
    image: "https://picsum.photos/200",
    quote: "Furnishing a 17K square foot office is complicated. Branch did it all for way less than other options."
  },
  {
    name: "Thomas A.",
    title: "Solutions Engineer",
    image: "https://picsum.photos/200",
    quote: "As an engineer I spent an absurd amount of time reviewing chairs...doesn't get better than this!"
  },
  {
    name: "Jonathan Wasserstrum",
    title: "CEO of Squarefoot",
    image: "https://picsum.photos/200",
    quote: "I see a lot of offices in my line of work. Branch sets a new standard in value for office furnishing."
  },
  {
    name: "Jovanna Feliz",
    title: "Operations at Hive",
    image: "https://picsum.photos/200",
    quote: "Branch crushed a tricky installation in our new office at One World Trade Center. Didn't lift a finger."
  }
]
const companies = [
  { name: "TechCrunch", logo: "https://picsum.photos/700/500", testimonial: '"Brand is now selling directly to individuals, as well as working with Google, Shopify and other companies to outfit home offices for employees who may never work in an office five days a week again."' },
  { name: "Forbes", logo: "https://picsum.photos/700/500", testimonial: '"Process of aquiring office furniture [has not] changed for a long time. Branch makes it easier to obtain office furniture to design a workplace to ones liking. "' },
  { name: "Apartment Therapy", logo: "https://picsum.photos/700/500", testimonial: '"Brand sells premium office furniture, including chairs, desks, table and accessories, at much lower prices, by selling to consumers. Their sought after furniture is beloved by reviewers for its sleek design and exceptionally supportive structure."' }
]
const Testimonials = () => {
  const [selectedCompany, setSelectedCompany] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState('');
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.classList.remove('slide-left', 'slide-right');
    void container.offsetWidth; // Trigger reflow
    container.classList.add(slideDirection);
  }, [selectedCompany, slideDirection]);

  const handleCompanyClick = (index: number) => {
    if (index !== selectedCompany) {
      setSlideDirection(index > selectedCompany ? 'slide-left' : 'slide-right');
      setSelectedCompany(index);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-12">
      <div className=' lg:w-[80%] 2xl:w-[60%] py-12 flex flex-row justify-center items-center gap-16 mx-auto'>
        <div className='flex flex-col w-full h-full justify-center p-2 gap-6'>
          <h1 className="text-5xl font-serif mb-8">Loved by teams, remote workers & press.</h1>
          <div className="flex gap-4 flex-col">
            <Quote />
            <p
              className={`italic transition-all duration-300 ease-in-out font-extralight min-h-[100px]`}
            >
              {companies[selectedCompany].testimonial}
            </p>
          </div>

          <div className="flex items-center space-x-12 mb-12">
            {companies.map((company, index) => (
              <div key={company.name} className="relative cursor-pointer" onClick={() => handleCompanyClick(index)}>
                <img src={company.logo} alt={company.name} className="h-20 w-40 object-contain" />
                <div className={`absolute -bottom-4 left-0 right-0 h-1 bg-blue-500 transition-all duration-300 ease-in-out ${index === selectedCompany ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    transform: `translateX(${(selectedCompany - index) * 100}%)`,
                    width: '100%',
                  }} />
              </div>

            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-7 w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div >
  );
}
const TestimonialCard = ({ name, title, image, quote }: any) => (
  <div className="bg-white p-6 rounded-md border-gray-300 border flex flex-col gap-4 justify-around h-[270px] w-[250px]">
    <div className="flex flex-col items-center gap-3">
      <img src={image} alt={name} className="w-14 h-14 rounded-full mr-4" />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600 text-center">{title}</p>
      </div>
    </div>
    <p className="text-gray-800 italic text-center">{quote}</p>
  </div>
);

// Footer Section
const Footerlinks: Record<string, any> = {
  shop: [
    { name: 'Build My Office', url: '/build-my-office' },
    { name: 'Work From Home', url: '/work-from-home' },
    { name: 'Branch Gift Card', url: '/branch-gift-card' },
    { name: 'Chairs', url: '/chairs' },
    { name: 'Desks', url: '/desks' },
    { name: 'Conference', url: '/conference' },
    { name: 'Lounge', url: '/lounge' },
    { name: 'Phone Booths', url: '/phone-booths' },
    { name: 'Packages', url: '/packages' },
  ],
  explore: [
    { name: 'About Branch', url: '/about-branch' },
    { name: 'Trade Program', url: '/trade-program' },
    { name: 'Free Space Plan', url: '/free-space-plan' },
    { name: 'Design Values', url: '/design-values' },
    { name: 'Ergonomics', url: '/ergonomics' },
    { name: 'Branch Blog', url: '/branch-blog' },
    { name: 'Showroom', url: '/showroom' },
    { name: 'Careers', url: '/careers' },
    { name: 'Press & Media', url: '/press-and-media' },
    { name: 'Reviews', url: '/reviews' },
  ],
  support: [
    { name: 'Contact Us', url: '/contact-us' },
    { name: 'Track My Order', url: '/track-my-order' },
    { name: 'Assembly Guides', url: '/assembly-guides' },
    { name: 'Shipping', url: '/shipping' },
    { name: 'Returns', url: '/returns' },
    { name: 'Warranty', url: '/warranty' },
    { name: 'Terms & Conditions', url: '/terms-and-conditions' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
    { name: 'Careers', url: '/careers' },
  ],
};
const Footer = () => {
  return (
    <footer className="bg-[#314438] text-white">
      <div className="flex justify-center py-12">
        <div className="flex gap-12 py-6">
          <div>
            <div className="opacity-50 text-sm">
              <Image
                src={"https://www.branchfurniture.ca/cdn/shop/files/branch-hi-res_white-min.png?v=1614780569"}
                width={150}
                height={50}
                alt="Branch Logo"
                className="mb-5"
              />
              <p>385 Adelaide St W, Suite</p>
              <p>200, Toronto ON</p>
              <p>© 2024 Branch Canada</p>
            </div>
            <div className="my-5 flex gap-2">
              <p className="w-9 h-9 bg-white rounded-full"></p>
              <p className="w-9 h-9 bg-white rounded-full"></p>
              <p className="w-9 h-9 bg-white rounded-full"></p>
            </div>
          </div>
          {
            Object.keys(Footerlinks).map((key) => (
              <div key={key} className="flex flex-col gap-2 px-4">
                <p className="text-sm font-bold opacity-50">{key.toUpperCase()}</p>
                <ul className="text-sm">
                  {
                    Footerlinks[key].map((link: any) => (
                      <li key={link.name}>
                        <a href={link.url}>{link.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
          <div>
            <p className="text-sm font-bold opacity-50">NEWS, OFFERS AND MORE</p>
            <div className="relative my-4">
              <input type="email" className="px-4 py-2 w-[350px] bg-white bg-opacity-10" placeholder="EMAIL ADDRESS" />
              <ChevronRight className="absolute top-2 right-1" />
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner1 />
      <Explore />
      <Banner2 />
      <OurStory />
      <BestSellers />
      <Banner3 />
      <ShopSpace />
      <Testimonials />
      <Footer />
    </>
  );
}
