import { CreditCard, LocationOnOutlined, MobileFriendly } from "@mui/icons-material";
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultAvatarCards from "examples/Cards/AvatarCards/DefaultAvatarCards";

function AvatarPayments() {
  return (
    <MKBox className="py-12 bg-gray-100">
      <MKBox className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MKBox className="lg:text-center">
          <MKBox className="flex flex-wrap -m-4">
            <MKBox className="p-4 lg:w-1/3 md:w-1/2">
              <DefaultAvatarCards
                fill="#76329C"
                icon={<LocationOnOutlined fontSize="large" />}
                title="NimbaPay Authorized Agent"
                description="Opt for the flexibility of collecting your funds from a nearby NimbaPay authorized agent. Our extensive agent network ensures that you can easily access your funds in person, providing a convenient solution for receiving money."
                align="top"
              />
            </MKBox>
            <MKBox className="p-4 lg:w-1/3 md:w-1/2">
              <DefaultAvatarCards
                fill="#76329C"
                icon={<CreditCard fontSize="large" />}
                title="Direct Bank Deposit"
                description="Choose the convenience of direct deposit with NimbaPay. Your funds will be securely transferred directly into the recipient's bank account, ensuring a seamless and efficient transaction process."
                align="top"
              />
            </MKBox>
            <MKBox className="p-4 lg:w-1/3 md:w-1/2">
              <DefaultAvatarCards
                fill="#76329C"
                icon={<MobileFriendly fontSize="large" />}
                title="Wallet Account Transfer"
                description="Experience the ease of transferring funds directly into the recipient's digital or mobile wallet with NimbaPay. This method provides instant access to the funds, making it a convenient and efficient option for seamless money transfers."
                align="top"
              />
            </MKBox>
          </MKBox>
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

export default AvatarPayments;
