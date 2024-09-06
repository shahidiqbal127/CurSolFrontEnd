import React from "react";
import MKBox from "components/MKBox";
import { DesktopWindowsOutlined, MobileFriendly, Person2Outlined } from "@mui/icons-material";
import DefaultAvatarCards from "examples/Cards/AvatarCards/DefaultAvatarCards";
import "../../../../CustomCSS.css";
function RemittanceTransfer() {
  return (
    <MKBox className="py-12 bg-gray-100">
      <div className="horizontal-line horizontal-line-1"></div>
      <div className="arrow arrow-1"></div>

      <div className="horizontal-line horizontal-line-2"></div>
      <div className="arrow arrow-2"></div>

      <MKBox className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MKBox className="lg:text-center">
          <MKBox className="flex flex-wrap -m-4">
            <MKBox className="p-4 lg:w-1/3 md:w-1/2">
              <DefaultAvatarCards
                fill="#76329C"
                icon={<DesktopWindowsOutlined fontSize="large" />}
                title="Online Platform"
                description="Log in to your NimbaPay account through our user-friendly online platform. Follow the intuitive steps to enter the recipient's details, select the transfer method, and confirm the transaction."
                align="top"
              />
            </MKBox>
            <MKBox className="p-4 lg:w-1/3 md:w-1/2">
              <DefaultAvatarCards
                fill="#76329C"
                icon={<MobileFriendly fontSize="large" />}
                title="Mobile App"
                description="Download the NimbaPay mobile app for on-the-go convenience. With just a few taps, you can initiate a remittance transfer anytime, anywhere, ensuring your funds reach their destination swiftly."
                align="top"
              />
            </MKBox>
            <MKBox className="p-4 lg:w-1/3 md:w-1/2">
              <DefaultAvatarCards
                fill="#76329C"
                icon={<Person2Outlined fontSize="large" />}
                title="Agent Network"
                description="Visit a local NimbaPay agent near you and provide the necessary information for the remittance transfer. Our agents are trained to assist you through the process."
                align="top"
              />
            </MKBox>
          </MKBox>
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

export default RemittanceTransfer;
