import styled from "styled-components";
import { Column } from "../element";
import FaqComponent from "./faq";

const Faq = () => {
  return (
    <FaqContent>
      <FaqComponent
        title="What is the Shucked Up Oysters Club?"
        text="The Shucked Up Oyster Club (SUOC) is the first brand by Kosha Creations LLC. Each collectible is 1/6,000 hand drawn, unique pieces of art which grants holders access to benefits such as corporate partnership discounts, IP rights and more!"
      />
      <FaqComponent
        title="What is Kosha Creations, LLC?"
        text=" Kosha Creations is a registered US conglomerate founded in 2022. Their brands aim to integrate traditional business sectors with aspects of web 3.0 technology. Their mission is to accelerate the transition to a sustainable community, culture and biobased economy."
      />
      <FaqComponent
        title=" Why Solana rather than Ethereum or another chain?"
        text={
          <FaqChild>
            <Column>The strength and size of the community.</Column>
            <Column>
              We believe the blockchain is better suited for digital
              collectibles and other uses which have a high amount of
              micro-transactions (No expensive gas fees on Solana).
            </Column>
            <Column>
              The current Solana ecosystem is more user friendly than other
              ecosystems.
            </Column>
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
export default Faq;
