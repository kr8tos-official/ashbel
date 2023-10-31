const main_header_font =
  " text-[8vw] md:text-[4vw] text-center 2xl:text-[65px]";

const component_div = "min-h-[100vh] mt-[5vw]";
const flex_component_div =
  "flex items-center flex-col  md:flex-row md:items-start   h-auto mt-[5vw] 2xl:mt-[100px]";

const default_text =
  "  w-[80%] mx-auto  leading-[2em]  text-[1em] text-center md:text-[1vw] lg:text-[0.8vw] md:w-[50%] lg:w-[40%]   2xl:text-[20px]";

const default_text_left =
  "  font-regular  w- mx-auto md:mx-[0px] leading-[2em] text-[0.8em] w-[80%] text-center md:text-[1vw] lg:text-[0.8vw] 2xl:text-[15px] md:text-left";

const var_btns = [
  {
    title: "Art & Design",
    slug: "Design",
    desc: "We design and brand your ideas, company and vision by creating a cohesive visual language to better visualize your products, concepts and ideas. We create these designs to appeal what you want to sell to your target audience. Our team of talented Digital , Traditional and Artificial Intelligence Artists  create all forms of artworks and illustrations which best suits your interest.",
  },

  {
    title: "Software",
    slug: "Software Development",
    desc: "We develop Websites, Apps, Databases, Backend Systems, Artificial Intelligent(AI) Systems, Expert Systems, UX/UI etc.",
  },

  {
    title: "Animation",
    slug: "Animation",
    desc: "We are equipped with animators to produce High End 2d, 3d and Motion Design and Motion Graphics Animations for every scope where the use of animation as a whole is applicable.",
  },

  {
    title: "3D",
    slug: "3D",
    desc: "Our Creative Studio has a dedicated team of talented 3D Artists and Designers to design 3D concepts and Animations. Some of our 3D services include, 3D Modeling, Architectural Visualizations, Hard Surface Modeling, Product Design, 3D Fashion, Game Asset modeling, etc.",
  },

  {
    title: "Media Production",
    slug: "Media_Production",
    desc: "As a company, we provide multimedia Production services like Photography, Videography, Visual Effects, Voice Overs, Music Production, etc.",
  },
];

const another_text =
  "font-Montserrat font-extralight text-[2vw] w-[80%] text-center mx-auto hover:leading-[7vw]   md:hover:leading-[2.5vw] duration-300  font-light leading-[2em] md:text-[1.5vw] lg:text-[15px] lg:w-2/5 md:w-1/2";
const sample_portfolio = [
  "/sample_images/LightPainting.jpg",
  "/sample_images/Wedding Photography.jpg",
  "/sample_images/1649989616601.jpg",
  "/sample_images/A lady posed with ambient lighting.jpg",
  "/sample_images/LightPainting.jpg",
  "/sample_images/Wedding Photography.jpg",
  "/sample_images/1649989616601.jpg",
  "/sample_images/A lady posed with ambient lighting.jpg",
  "/sample_images/WomanWithLight.png",
  "/sample_images/Wedding Photography.jpg",
  "/sample_images/1649989616601.jpg",
  "/sample_images/A lady posed with ambient lighting.jpg",
  "/sample_images/LightPainting.jpg",
];

const team = [
  {
    teamate_firstname: "RAVI ",
    teamate_lastname: "ASHBEL",
    role: "CHIEF EXECUTIVE OFFICER",
    expertise: "Photogrpahy, Videography & Design",
    short_dec:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl",
    teamate_pic: "/team/Ravi.jpg",
  },
  {
    teamate_firstname: "JOJO ",
    teamate_lastname: "WELSING-JONES",
    role: "Senior Designer/Developer",
    expertise: "Development And Design ",
    short_dec:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl",
    teamate_pic: "/team/Jojo.jpg",
  },
  {
    teamate_firstname: "Abii ",
    teamate_lastname: "Keren",
    role: "Lead Content Manager",
    expertise: "Writing, Management",
    short_dec:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl",
    teamate_pic: "/team/Abii.jpg",
  },
  {
    teamate_firstname: "ANG ",
    teamate_lastname: "FERGUSON",
    role: "Creative Director",
    expertise: "VideoGraphy, Photography, Animation",
    short_dec:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl",
    teamate_pic: "/team/Ang.jpg",
  },
];

const header_3 =
  "font-medium text-[8vw] md:text-[4vw] leading-[1em] text-center md:text-left 2xl:text-[65px]";

const header_4 =
  "font-medium text-[9vw] md:text-[4.5vw] leading-[1em] text-center md:text-left 2xl:text-[80px]";

const header_new =
  "font-medium text-[9vw] md:text-[8vw] lg:text-[6vw] leading-[1em] text-center  2xl:text-[80px]";

const header_text =
  "font-Montserrat font-extralight text-[2vw] w-[80%] mx-auto text-center hover:leading-[7vw]   md:hover:leading-[2.5vw] duration-300  font-light leading-[2em] md:text-[1.5vw] lg:text-[15px] lg:w-2/5 md:w-1/2";
const blur_bg = {
  backgroundImage: `url(/blur.png)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
export {
  header_text,
  blur_bg,
  header_3,
  header_4,
  main_header_font,
  component_div,
  default_text,
  var_btns,
  sample_portfolio,
  flex_component_div,
  team,
  default_text_left,
  another_text,
  header_new,
};
