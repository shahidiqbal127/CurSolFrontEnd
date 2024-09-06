import {
  AutoGraph,
  CompareArrowsOutlined,
  CurrencyExchange,
  GraphicEqRounded,
  PercentOutlined,
  Security,
} from "@mui/icons-material";
import link from "assets/theme/components/link";
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultAvatarCards from "examples/Cards/AvatarCards/DefaultAvatarCards";
import CurrencyRatePrediction from "pages/LandingPages/RatesPrediction";

function AvatarCards() {
  return (
    <MKBox className="py-12 bg-gray-100">
      <MKBox className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MKBox className="lg:text-center">
          <MKBox className="flex flex-wrap -m-4">
            <MKBox className="p-4 lg:w-1/3 md:w-1/2">
              <DefaultAvatarCards
                fill="#02165F"
                icon={<CurrencyExchange fontSize="large" />}
                title="Hisotrical Rates"
                description="We provide you the historical exchange rates for different currency exchange companies at one platform"
                align="top"
                component={link}
              />
            </MKBox>
            <MKBox className="p-4 lg:w-1/3 md:w-1/2">
              <DefaultAvatarCards
                fill="#02165F"
                icon={<AutoGraph fontSize="large" />}
                title="Exchange Rate Prediction"
                description="We provide you the exchange rate prediction for 15 days of market with minimum and maximum confidence value of rate"
                align="top"
              />
            </MKBox>
            <MKBox className="p-4 lg:w-1/3 md:w-1/2">
              <DefaultAvatarCards
                fill="#02165F"
                icon={<CompareArrowsOutlined fontSize="large" />}
                title="Compare Exchange Rate"
                description="We enable you to compare exchange rates of different currency exchange companies at one platform with filtering on the exchange rate, delivery fee and tranfer time"
                align="top"
              />
            </MKBox>
          </MKBox>
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

export default AvatarCards;
