import styled from "styled-components";
import { Column } from "../element";
import FaqComponent from "./faq";

const Utility = () => {
  return (
    <FaqContent>
      <FaqComponent
        title="What can holders expect from corporate partnerships?"
        text={
          <FaqChild>
            <Column>
              Access to exclusive benefits and discounts on established brands
              (gyms, hotels/travel, wellness, etc).
            </Column>
            <Column>List of corporate partners coming soon.</Column>
          </FaqChild>
        }
      />
      <FaqComponent
        title="What are the intellectual property rights granted to holders?"
        text={
          <FaqChild>
            <Column>
              All holders are guaranteed “Non-Exclusive Commercial Rights with
              Creator Retention and Hate Speech”.
            </Column>
            <Column>
              This means as a holder you have the right to commercialize your
              NFT.
            </Column>
            <Column>
              However, as creators, we reserve the right to terminate use of the
              NFT if it is associated with any hate speech.
            </Column>
            <Column>More on this coming soon.</Column>
          </FaqChild>
        }
      />
      <FaqComponent
        title="Does your NFT provide profit sharing or holder rewards/staking?"
        text={
          <FaqChild>
            <Column>
              Because SUOC is a Kosha Creations Brand, operating in the U.S., we
              must be careful operating in an unknown regulatory environment.
            </Column>
            <Column>
              We will reward holders whenever and with whatever possible while
              awaiting more legislative clarity.
            </Column>
          </FaqChild>
        }
      />
      <FaqComponent
        title="How long do I need to hold a SUOC collectible to use the utilities?"
        text={
          <FaqChild>
            <Column>
              If you minted the collectible, utility will be available
              immediately.
            </Column>
            <Column>
              If you purchase one on the secondary market, you will have to hold
              it for 24 hours to receive access to utilities.
            </Column>
          </FaqChild>
        }
      />
      <FaqComponent
        title=" How is your mint Unique?"
        text={
          <FaqChild>
            <Column>
              Minters will have the option to either A) choose your own
              attributes or B) have all your attributes assigned randomly for a
              chance to receive an Ultra Rare collectible.
            </Column>
            <Column>Rarity is decided by minters.</Column>
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
export default Utility;
