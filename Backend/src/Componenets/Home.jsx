import  {useEffect,useState}from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from '../NavBar';
import axios from 'axios';
import './Home.css'
import SharedState from './SharedState';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

const Home = () => {
  const navigate = useNavigate();
  const baseUrl = 'https://www.tn.gov.in/scheme/data_view'; // Replace this with the actual base URL

const a="Kisan Bhagidari Prathmikta Humaari ";
const b="Kisan Bhagidari Prathmikta Campaign ";
const c="Kisan Milk Credit Cards ";
const d="Kisan Animal Husbandry ";
const e="Kisan Bhagidari Prathmikta Campaign ";
const [schemeData, setSchemeData] = useState([]);

useEffect(() => {
  // Fetch data from the backend using axios
  const authToken = localStorage.getItem('Token');

  axios.get('http://localhost:8080/api/schemes', {
    headers: {
      Authorization: `Bearer ${authToken}` // Include the token in the headers
    }
  })
    .then(response => {
      // Set the fetched data to state
      setSchemeData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);

const handleClick = (content) => {
  SharedState.setSharedContent(content);
  console.log(SharedState.content);
  navigate('/loan');
};

  const[text,setText]=useState('');
  const handleShareClick = () => {
    
    SharedState.setSharedContent(a);
    console.log(SharedState.content);
    navigate('/loan')
 
  };
  const handleShareClick2 = () => {
    
    SharedState.setSharedContent(b);
    console.log(SharedState.content);
    navigate('/loan')
 
  };
  const handleShareClick3 = () => {
    
    SharedState.setSharedContent(c);
    console.log(SharedState.content);
    navigate('/loan')
 
  };
  const handleShareClick4 = () => {
    
    SharedState.setSharedContent(d);
    console.log(SharedState.content);
    navigate('/loan')
 
  };
  return (
    <div>
    <div className='nn'style={{ backgroundSize: 'cover', minHeight: '100vh',height:'1000px',paddingLeft:'20px'}}>
      <NavBar />
      <br/><br/>
     
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        
        <CardMedia
          sx={{ height: 140 }}
          image="https://bankofindia.co.in/documents/20121/135615/Tractor_Farm+Mechanization_Banner.jpg/d9a011cf-4e6c-a4e0-3fac-f3a0e51e5070?t=1675745656229"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: Central Government
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The sprint campaign of Kisan Credit Card (KCC) saturation drive, titled as <u>{a}</u> (KBPH),from April 24 to May 1
          </Typography>
        </CardContent>
        <CardActions>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ndtvimg.com/i/2016-02/agriculture-farm-generic-istock_650x400_61455603415.jpg"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central Government
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Ministry of Agriculture & Farmers Welfare of India will conduct ‘Fasal Bima Pathshala’ under ‘<u>{b}</u>’ as a Jan Bhagidari movement.
          </Typography>
        </CardContent>
        <CardActions>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick2}>
          Apply
        </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="http://admin.risingkashmir.com/Source/News/72ed493e-f00c-4822-96ba-8fdf16af445d.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central Government
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A Special Drive has been undertaken by the Department for providing all dairy farmers of Milk Cooperatives and Milk Producer Companies with <u>{c}</u> (KCC).
          </Typography>
        </CardContent>
        <CardActions>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick3}>
          Apply
        </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://navi.com/blog/wp-content/uploads/2022/06/Agriculture-Loan-Guide.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central Government
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Nationwide AHDF KCC Campaign from 15th November 2021 to 15th February 2022, for providing Kisan Credit Card facility to all eligible <u>{c}</u> and Fishery Farmers.
          </Typography>
        </CardContent>
        <CardActions>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick4}>
          Apply
        </Button>
        </CardActions>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://media.assettype.com/TNIE%2Fimport%2F2020%2F9%2F30%2Foriginal%2Ffarmer_EPS45.jpg?w=1200&auto=format%2Ccompress&fit=max"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State Government
          </Typography>
          <Typography variant="body2" color="text.secondary">
          50% of the cost of the seed subject to a maximum of Rs.1200/-per Quintal whichever is less
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{color:'green'}} href="https://agritech.tnau.ac.in/banking/crbank_nasb_10indianbank.html" size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://5.imimg.com/data5/YQ/JO/MY-16318921/7-5hp-solar-pump-500x500.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Sponsored By: State Government
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Soil health card will be distributed to all the farmers who have offered the soil sample for testing by paying prescribed fee of Rs.5/- each for Macro and Micro nutrient testing

          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{color:'green'}}  href="https://www.tn.gov.in/scheme/data_view/6849" size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.unsplash.com/photo-1508857650881-64475119d798?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State Government
          </Typography>
          <Typography variant="body2" color="text.secondary">
          50 farmers / Agricultural labourers will be trained in a cluster with the financial assistance of Rs.5000/- per training.
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{color:'green'}} href="https://agritech.tnau.ac.in/banking/crbank_nasb_10indianbank.html"size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.pinimg.com/564x/0c/85/6c/0c856c888523da6127f5a322edcd8b43.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State Government
          </Typography>
          <Typography variant="body2" color="text.secondary">
          20% on power consumption charges for 36 months from Date of Commence -ment of Production or date of power connection whichever is later.
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{color:'green'}}href="https://www.tn.gov.in/scheme/data_view/19670" size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Add a conditional check for schemeData */}
          {Array.isArray(schemeData) && schemeData.length > 0 ? (
            schemeData.map((scheme, index) => (
              <Card key={index} sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
                <CardMedia
                  sx={{ height: 140 }}
                 
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Sponsored By: {scheme.sponsor}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {scheme.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button style={{ color: 'green' }} size="small" onClick={() => handleShareClick(scheme.content)}>
                    Apply
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <p>To Contact Us Scroll Down</p>
          )}
        </div>
    </div>
     <Footer/>
     </div>
  );
}
export default Home;