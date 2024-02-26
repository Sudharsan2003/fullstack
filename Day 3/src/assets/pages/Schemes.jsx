import '../pages/css/Schemes.css'
import '../pages/LoanForm.jsx';

import { Link } from 'react-router-dom';
import CropLoanImage from '../Images/croploan.jpg';
import AgriculturalTermLoanImage from '../Images/termloan.jpg';
import SolarPumpSetLoanImage from '../Images/solar.png';
import LoanForAlliedAgriActivitiesImage from '../Images/alliedagri.webp';
import FarmMechanisationLoanImage from '../Images/formmachine.jpg';
import AgriculturalGoldLoanImage from '../Images/goldloan.jpg';
import ForestryLoanImage from '../Images/fortesty.jpg';
import HorticulturalLoanImage from '../Images/horticulture.webp';
import LandPurchaseImage from '../Images/landpurchase.jpg';
import WareHouseRecipetImage from '../Images/warehouse.webp';

const Schemes = () => {
  return (
    <div className="loan-schemes">
      <div className="scheme-card">
        <img src={CropLoanImage} alt="Crop Loan" />
        <h2>Crop Loan</h2>
        <p>Crop loans, also known as Retail Agri Loans, allow farmers to meet short-term expenses arising due to cultivation of crops, maintenance of farm equipment, and other post-farm activities.</p>
        <Link to="/loanform" className="apply-loan-btn">Apply Loan</Link>
      </div>

      <div className="scheme-card">
        <img src={AgriculturalTermLoanImage} alt="Agricultural Term Loan" />
        <h2>Agricultural Term Loan</h2>
        <p>Agricultural term loans are long-term loan schemes designed to meet non-seasonal expenses. Farmers can avail this loan to buy or upgrade equipment such as windmills, solar power systems, etc.</p>
        <Link to="/loanform" className="apply-loan-btn">Apply Loan</Link>
      </div>

      <div className="scheme-card">
        <img src={SolarPumpSetLoanImage} alt="Solar Pump Set Loan" />
        <h2>Solar Pump Set Loan</h2>
        <p>Farmers involved in small irrigation projects and requiring capital to buy photovoltaic pumping systems can avail a solar pump set loan.</p>
        <Link to="/loanform" className="apply-loan-btn">Apply Loan</Link>
      </div>

      <div className="scheme-card">
        <img src={LoanForAlliedAgriActivitiesImage} alt="Loan for Allied Agricultural Activities" />
        <h2>Loan for Allied Agricultural Activities</h2>
        <p>Farmers engaged in allied agricultural activities can apply for such types of loans if they need to raise working capital to meet their farming expenses.</p>
        <Link to="/loanform" className="apply-loan-btn">Apply Loan</Link>
      </div>

      <div className="scheme-card">
        <img src={FarmMechanisationLoanImage} alt="Farm Mechanisation Loan" />
        <h2>Farm Mechanisation Loan</h2>
        <p>Farm mechanisation loans are for farmers who need working capital to purchase new farming machinery or upgrade existing ones, such as buying a new tractor or repairing an old one.</p>
        <Link to="/applyloan" className="apply-loan-btn">Apply Loan</Link>
      </div>

      <div className="scheme-card">
        <img src={AgriculturalGoldLoanImage} alt="Agricultural Gold Loan" />
        <h2>Agricultural Gold Loan</h2>
        <p>Agricultural gold loans allow applicants to pledge their gold ornaments as security.</p>
        <Link to="/applyloan" className="apply-loan-btn">Apply Loan</Link>
      </div>

      <div className="scheme-card">
        <img src={ForestryLoanImage} alt="Forestry Loan" />
        <h2>Forestry Loan</h2>
        <p>Forestry loans are for individuals involved in growing crops that grow on trees.</p>
        <Link to="/loanform" className="apply-loan-btn">Apply Loan</Link>
      </div>

      <div className="scheme-card">
        <img src={HorticulturalLoanImage} alt="Horticultural Loan" />
        <h2>Horticultural Loan</h2>
        <p>Horticultural loans are for farmers setting up vegetable farms and orchards.</p>
        <Link to="/loanform" className="apply-loan-btn">Apply Loan</Link>
      </div>
      <div className="scheme-card">
        <img src={LandPurchaseImage} alt="Horticultural Loan" />
        <h2>Land PurchaseLoan</h2>
        <p>Land Purchase  are for farmers setting up vegetable farms in Land.</p>
        <Link to="/loanform" className="apply-loan-btn">Apply Loan</Link>
      </div>
      <div className="scheme-card">
        <img src={WareHouseRecipetImage} alt="Horticultural Loan" />
        <h2>WareHouse RecipetLoan </h2>
        <p>Warehouse receipt loans are particularly beneficial for farmers who need immediate funds but prefer to wait for better market prices to sell their produce..</p>
        <Link to="/loanform" className="apply-loan-btn">Apply Loan</Link>
      </div>
    </div>
  );
};

export default Schemes;
