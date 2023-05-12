import styled from "styled-components";
import { Column } from "../element";
import FaqComponent from "./faq";

const General = () => {
  return (
    <FaqContent>
      <FaqComponent
        title="Will there be a whitelist for the project and how do I get a whitelist?"
        text={
          <FaqChild>
            <Column>
              Whitelists will be awarded to early supporters and there will be
              two tiers.
            </Column>
            <Column>
              The whitelist tier will be determined by the order in which
              someone connects their wallet to our website after the function
              goes live.
            </Column>
            <Column>
              Whitelist Tier I will have 300 spots and Tier II will have 900,
              each whitelist will allow the holder to mint up to 5 digital
              collectibles.
            </Column>
            <Column>
              Whitelist can be purchased on the secondary market shortly after
              they are distributed.
            </Column>
          </FaqChild>
        }
      />
      <FaqComponent
        title="Where do I mint?"
        text="All digital collectibles will be minted under the “mint” tab of our
            website."
      />
      <FaqComponent
        title="How do I mint?"
        text="From the mint tab of our website, you can either select each individual attribute, creating your own unique collectible (as long as it does not replicate a previous mint) or you can choose to generate a random collectible (with a chance to mint 1 of 10 ultra rare collectibles)."
      />
      <FaqComponent
        title="How is rarity determined?"
        text={
          <FaqChild>
            <Column>
              The 10 ultra rare collectibles are the most rare because all their
              attributes are unique.
            </Column>
            <Column>
              Rarity for the rest of the collection is determined at mint.
            </Column>
            <Column>
              Whichever combination of attributes are selected the least by
              minters who picked traits will be the most rare, and therefore the
              combination of attributes selected the most will be the least
              rare.
            </Column>
          </FaqChild>
        }
      />
      <FaqComponent
        title=" What kind of wallet do I need to mint an NFT?"
        text="Any wallet integrated with the Solana Network (Phantom, SolFlare, etc.)"
      />
      <FaqComponent
        title="Where can I buy a Shucked Up Oyster Club NFT after mint?"
        text={
          <FaqChild>
            <Column>Magic Eden: TBA</Column>
            <Column>Opensea: TBA</Column>
          </FaqChild>
        }
      />
      <FaqComponent
        title="Is there a whitepaper I can read before I mint an oyster?"
        text="Yes, our gitbook will be released soon. "
      />
      <FaqComponent
        title="What is the mission and purpose of The Shucked Up Oyster Club?"
        text="A Kosha Creations brand, The SUOC’s mission is to foster the transition to a sustainable community, grind culture and bio-based economy. "
      />
      <FaqComponent
        title="Who are the artists?"
        text="@esktn (Nick) and @Etnica82 (Ryan Khatam)"
      />
      <FaqComponent title=" What is the mint price?" text="TBA" />
      <FaqComponent
        title="How many NFT’s can I mint?"
        text={
          <FaqChild>
            <Column>If you mint using a whitelist: 5.</Column>
            <Column>If you mint during the public sale: unlimited</Column>
          </FaqChild>
        }
      />
      <FaqComponent
        title="Why should I mint a Shucked Up Oyster?"
        text={
          <FaqChild>
            <Column>The option to personalize your collectible.</Column>
            <Column>Access to utilities and core community.</Column>
            <Column>You’re not a normie.</Column>
          </FaqChild>
        }
      />
    </FaqContent>
  );
};
const FaqContent = styled(Column)`
  max-width: 700px;
  width: 100%;
  gap: 10px;
  margin: 0 20px;
`;
const FaqChild = styled(Column)`
  align-items: flex-start;
  gap: 10px;
`;
export default General;
