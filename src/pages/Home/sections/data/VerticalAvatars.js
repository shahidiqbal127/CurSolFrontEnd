import { AccountBalance, ChatRounded, Security } from "@mui/icons-material";
import MKBox from "components/MKBox";
import "../../../../CustomCSS.css";

// Material Kit 2 React examples
import DefaultAvatarCards from "examples/Cards/AvatarCards/DefaultAvatarCards";

function VerticalAvatars() {
  return (
    <>
      <>
        <MKBox className="-m-4">
          <div className="dotted-line"></div>
          <DefaultAvatarCards
            fill="#76329C"
            icon={<AccountBalance fontSize="large" />}
            title="More Affordable"
            description="Experience the advantage of cost savings with NimbaPay's wallet-friendly approach to international money transfers."
            align="left"
          />

          <DefaultAvatarCards
            fill="#76329C"
            icon={<ChatRounded fontSize="large" />}
            title="Consistently Providing Assistance"
            description="Count on NimbaPay's unwavering commitment to offer dependable and responsive support whenever you need assistance."
            align="left"
          />

          <DefaultAvatarCards
            fill="#76329C"
            icon={<Security fontSize="large" />}
            title="Precise Exchange Rates"
            description="Experience the assurance of precise exchange rates with NimbaPay."
            align="left"
          />
        </MKBox>
      </>
    </>
  );
}

export default VerticalAvatars;
