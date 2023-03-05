import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faAngellist } from "@fortawesome/free-brands-svg-icons/faAngellist";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: "https://github.com/Baraasher",
    label: "Github",
    icon: faGithub,
  },

  {
    link: "https://www.linkedin.com/in/baraa-alsher",
    label: "LinkedIn",
    icon: faLinkedinIn,
  },

  {
    link: "https://www.youtube.com/@CodeWithBaraa",
    label: "Youtube",

    icon: faYoutube,
  },

  {
    link: "https://wa.me/970593493899",

    label: "Whatsapp",
    icon: faWhatsapp,
  },

  {
    link: "mailto:alsher.info@gmail.com",
    label: "Email",
    icon: faEnvelope,
  },
];

export default data;
