import styled from "styled-components";
import { Column, DefaultImage, Row } from "../element";
import Team1 from "../assets/image/team1.jpg";
import Team2 from "../assets/image/team2.jpg";
import Team3 from "../assets/image/team3.jpg";
import Team4 from "../assets/image/team4.jpg";
import Team5 from "../assets/image/team5.jpg";
import Team6 from "../assets/image/team6.jpg";
import Team7 from "../assets/image/team7.jpg";
import { FaDiscord, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const data = [
  {
    image: Team3,
    role: "CEO",
    name: "Joe Dantoni (JoesWearld)",
    description:
      "Joe has been buying crypto since 2017 and started getting involved with NFTs around the end of 2021. He has been business oriented since childhood, selling containers made of popsicle-sticks to neighbors instead of playing tee-ball. After winning a cash prize in an entrepreneur competition in 2019, missing out on the competition in 2020, and failing to start a business alone in 2021, Joe knew he needed to gather an accomplished team if he wanted to become a successful entrepreneur. In 2022 he helped form Kosha Creations by combining ideas from the entrepreneur competition and passion for web 3 communities. Joe is currently pursuing a Naturopathic Medical degree from a prestigious university in the US.",
    twitter: "https://twitter.com/JoesWearld?t=QFrGuNgUkPBljwe_TQC5IQ&s=09",
    discord: "https://discordapp.com/users/740321579929567292",
  },
  {
    image: Team1,
    role: "CFO",
    name: "Griffin Hinkle (Chief Financial Oyster)",
    description:
      "Griffin has 2+ years in the Tech, IT, and Engineering consulting space as a Financial Manager. He brings 6+ years of investing experience within traditional financial assets and 3 years experience within the cryptocurrency space. His prior experience is through actively trading assets, managing trusts, creating AI platform projects, and mining Bitcoin and Ethereum before actively trading crypto. Griffin currently holds a Finance and Information Systems dual degree and is pursuing his MBA in Finance at a nationally accredited US institution.",
    linkedin: "https://www.linkedin.com/in/griffin-hinkle",
    discord: "https://discordapp.com/users/645072568654757888 ",
  },
  {
    image: Team4,
    role: "CMO",
    name: "Patrick Higgins (p_higs)",
    description:
      "Patrick, a native of Maryland, has been deeply involved in cryptocurrency since late 2020 and started taking an interest in NFTs towards the end of 2021. His experience in the world of crypto includes trading Ethereum, altcoins, and De-Fi tokens in various ecosystems like Solana, Polygon, and Fantom. Patrick holds a dual bachelor's degree in Marketing and Business Management. Since high school, he has been honing his entrepreneurial skills, starting several small businesses and gaining valuable knowledge along the way. In the summer of 2022, Patrick joined the team at Kosha Creations, bringing his expertise and business acumen to the venture.",
    twitter: "https://twitter.com/p_higs?t=4OfCa9mK_56NYthZmOoEpA&s=09",
    discord: "https://discordapp.com/users/599719559657816074",
  },

  {
    image: Team6,
    role: "Lead Artist",
    name: "Esktn",
    description:
      "Esktn is an impulsive creative with over 6 years of experience and a diverse background in illustration, graphic design, merchandising, UX/UI design, and social media management. With a proven track record of delivering high-quality work in these fields, Esktn has worked as a freelance designer and collaborated with a range of industries including craft brewing, music, and mortgage lending. He is a master at creating digital illustrative assets and building brands with businesses, making him an essential addition to the SUOC team.",
    instagram: "https://instagram.com/esktn?igshid=YmMyMTA2M2Y=",
    discord: "https://discordapp.com/users/803052680859090944",
  },
  {
    image: Team2,
    role: "Artist",
    name: "Ryan Khatam (Etnica82)",
    description:
      "As an animation industry veteran with 17 years of experience, Ryan has lent his talents to a range of well-known shows, including Spongebob Squarepants and Looney Tunes. He has previously collaborated with notable companies like Adult Swim, Cartoon Network, and Marvel Studios on various projects. In addition to designing games such as Johnny Rocketfingers, Ryan currently serves as an animator at Nickelodeon Studios in Burbank, California.",
    twitter: "https://twitter.com/NickGoonzNFT",
    instagram: "https://instagram.com/ryankhatam?igshid=YmMyMTA2M2Y=",
    discord: "https://discordapp.com/users/702227031731208363",
  },
  {
    image: Team5,
    role: "Intern",
    name: "Kidneyy (onekidneyy)",
    description:
      "Kidneyy is a student at Salisbury University currently in his senior year working on a Fine Arts Major with a concentration in Graphic Design. He is the president of the Salisbury NFT Club, which intends to educate and guide Salisbury students who are interested in NFTs. During high school, Kidneyy began developing an entrepreneurial mindset by founding his own brand, YOC. Kidneyy has been in the Web3 space since 2020 and has been actively trading digital collectibles since May of 2021. Kidneyy is an advocate for 1/1 art in the Solana space, currently building out his art series “Transcendent Textures ”. Kidneyy was essential in the development of many aspects of the project and is a vital member of The Shucked Up Oyster Club team",
    twitter: "https://twitter.com/onekidneyy?t=o5pXvb8FhyE3zYl1m27F_A&s=09",
    discord: "https://discordapp.com/users/313448525658849282",
  },

  {
    image: Team7,
    role: "Senior Developer",
    name: "Infierno",
    description:
      "Infierno is a skilled web, full stack, and blockchain developer with over 8 years of experience in the blockchain development space. With a formal education in computer science and web development from Singapore University of Technology and Design, Infierno is dedicated to producing exceptional products and bringing his expertise to all projects. Infierno shares a deep knowledge of decentralized technologies, has successfully deployed NFT projects on Opensea, and has extensive knowledge and practice in developing smart contracts on multiple chains. He has a proven track record of building NFT card and casino games, NFT marketplace apps, and DeFi projects, including a DEX, farming, staking, and liquidity platforms.",
    twitter: "",
    discord: "https://discordapp.com/users/979112274893619211",
  },
];
const Team = () => {
  return (
    <TeamWrapper>
      <TeamBox>
        {data.map((item, key) => (
          <TeamBoxImage key={key}>
            <DefaultImage src={item.image.src} className="default-Image" />
            <TeamBoxContent>
              <>{item.name} </>
              <HeroText>{item.role} </HeroText>
              <HeroLink>
                {item.twitter && (
                  <Link href={item.twitter}>
                    <FaTwitter />
                  </Link>
                )}
                {item.instagram && (
                  <Link href={item.instagram}>
                    <FaInstagram />
                  </Link>
                )}
                {item.linkedin && (
                  <Link href={item.linkedin}>
                    <FaLinkedin />
                  </Link>
                )}{" "}
                <Link href={item.discord}>
                  <FaDiscord />
                </Link>
              </HeroLink>
              <HeroContent>{item.description}</HeroContent>
            </TeamBoxContent>
          </TeamBoxImage>
        ))}
      </TeamBox>
    </TeamWrapper>
  );
};

const TeamWrapper = styled(Column)`
  gap: 20px;
  color: #5b463f;
  font-size: 35px;
`;
const TeamBox = styled.div`
  display: grid;
  gap: 20px;
  justify-items: center;
  width: 100%;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
const TeamBoxImage = styled(Row)`
  .default-Image {
    width: 30%;
    height: 100%;
  }
  align-items: flex-start;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .default-Image {
      width: 100%;
      height: auto;
    }
  }
`;
const TeamBoxContent = styled(Column)`
  align-items: flex-start;
  gap: 10px;
  font-size: 28px;
  font-weight: bold;
  box-sizing: border-box;
  padding: 10px;
  background-color: white;
  height: 100%;
  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }
`;
const HeroText = styled(Column)`
  font-weight: 500;
`;
const HeroContent = styled(Column)`
  font-weight: 500;
  font-size: 22px;
  line-height: 25px;
  @media screen and (max-width: 1300px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 17px;
  }
`;
const HeroLink = styled(Row)`
  gap: 10px;
  a {
    color: #5b463f;
  }
`;
export default Team;
