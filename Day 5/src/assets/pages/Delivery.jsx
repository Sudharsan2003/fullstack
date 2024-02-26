
import '../pages/css/Delivery.css';

function Delivery() {
  return (
    <div className="delivery-channels-container">
      <div className="delivery-channels-card">
        <h2>Delivery Channels for Agro Funds</h2>
        <ul>
          <li>Withdrawal through ATMs / Micro ATM</li>
          <li>Withdrawal through BCs using smart cards</li>
          <li>PoS machine through input dealers</li>
          <li>Mobile Banking with IMPS capabilities / IVR</li>
          <li>Aadhaar enabled Cards</li>
        </ul>
        <p>
          The beneficiaries under the scheme will be issued with a Smart card / Debit card (Biometric smart card compatible for use in the ATMs / Hand held Swipe Machines and capable of storing adequate information on farmer’s identity, assets, land holdings and credit profile etc).
        </p>
        <p>
          All KCC holders should be provided with any one or a combination of the following types of cards:
        </p>
        <ul>
          <li>A Rupay complied chip card with PIN (Personal Identification Number) with an ISO IIN (International Standards Organization International Identification Number) to enable access to all banks ATMs and micro ATMs.</li>
          <li>In cases where the Banks would want to utilize the centralized biometric authentication infrastructure of the UIDAI (Aadhaar authentication), debit cards with chip and PIN with ISO IIN with biometric authentication of UIDAI can be provided.</li>
          <li>Mobile Banking / Other Channels: Provide Mobile banking functionality for KCC Cards / Accounts as well along with Interbank Mobile Payment Service (IMPS of NPCI) capability to allow customers to use this inter-operable IMPS for funds transfer between banks and also to do merchant payment transactions as additional capability for purchases of agricultural inputs.</li>
        </ul>
        <p>
          The banks having a call centre / Inter active Voice Response (IVR), may provide SMS based mobile banking with a call back facility from bank for mobile PIN (MPIN) verification through IVR, thus making a secured SMS based mobile banking facility available to card holders.
        </p>
      </div>
    </div>
  );
}

export default Delivery;
