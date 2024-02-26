
import '../pages/css/LoanQuantum.css';
const LoanQuantum = () => {
  return (
    <div className="loan-limits-container">
      <div className="loan-limits-card">
        <h2>Loan Quantum</h2>
        <h3>Short Term Limit</h3>
        <p>
          The short term limit for the first year, for cultivating a single crop, is calculated as follows:
        </p>
        <ul>
          <li>Scale of finance for the crop (as decided by District Level Technical Committee) x Extent of area cultivated</li>
          <li>Plus 10% of limit towards post-harvest/household/consumption requirements</li>
          <li>Plus 20% of limit towards repairs and maintenance expenses of farm assets</li>
          <li>Plus crop insurance and/or accident insurance including PAIS, health insurance & asset insurance</li>
        </ul>
        <h3>Limit for Second & Subsequent Year</h3>
        <p>
          The limit for the second and subsequent years is calculated based on the first year limit for crop cultivation purpose plus 10% of the limit towards cost escalation/increase in scale of finance for every successive year.
        </p>
        <h3>For Cultivating More Than One Crop in a Year</h3>
        <p>
          The limit is calculated based on the proposed cropping pattern for the first year plus an additional 10% of the limit towards cost escalation/increase in scale of finance for every successive year.
        </p>
        <h3>Long Term Loan</h3>
        <p>
          The term loan for investment is made towards land development, minor irrigation, purchase of farm equipment, and allied agricultural activities. The term loan limit is based on the proposed investments during the five-year period and the bank perception of the farmer repaying capacity.
        </p>
        <h3>Maximum Permissible Limit</h3>
        <p>
          The Maximum Permissible Limit (MPL) is calculated as the short term loan limit arrived for the 5th year plus the estimated term loan requirement.
        </p>
      </div>
    </div>
  );
};

export default LoanQuantum;
