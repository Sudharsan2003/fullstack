
import '../pages/css/LoanInterest.css';

function LoanInterest() {
  return (
    <div className="loan-interest-container">
      <div className="loan-interest-card">
        <h2>Loan Interest Rates for Agriculture Loans</h2>
        <table>
          <thead>
            <tr>
              <th>Loan Type</th>
              <th>Interest Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Crop Loan</td>
              <td>7.5% - 10% p.a.</td>
            </tr>
            <tr>
              <td>Agricultural Term Loan</td>
              <td>8% - 12% p.a.</td>
            </tr>
            <tr>
              <td>Solar Pump Set Loan</td>
              <td>9% - 11% p.a.</td>
            </tr>
            <tr>
              <td>Loan for Allied Agricultural Activities</td>
              <td>8.5% - 11.5% p.a.</td>
            </tr>
            <tr>
              <td>Farm Mechanisation Loan</td>
              <td>8% - 12% p.a.</td>
            </tr>
            <tr>
              <td>Agricultural Gold Loan</td>
              <td>6% - 8% p.a.</td>
            </tr>
            <tr>
              <td>Forestry Loan</td>
              <td>8% - 11% p.a.</td>
            </tr>
            <tr>
              <td>Horticultural Loan</td>
              <td>8.5% - 11% p.a.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LoanInterest;
