import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar1 from '../NavBar1';
import Header from './Header'
import './Home.css'
import { WhatsappShareButton } from 'react-share';
import SharedState from '../Componenets/SharedState';

const SchemeDetails = () => {
  const baseUrl = 'https://www.tn.gov.in/scheme/data_view'; // Replace this with the actual base URL
  const shareText = 'Check out to Various Scheme to get benificial!!';
  const shareUrl = `${baseUrl}?text=${encodeURIComponent(shareText)}`;
  const handleShareClick = () => {
    console.log("dfdf");
    SharedState.setSharedContent('Hi');
    window.location.href = '/loan'; 
  };
  return (
    <div className='App1'>
    <NavBar1/>
     <div className="SideMenuAndPageContent">
     <Header/>
     
     <div className="das">
    <div className='nn'style={{ backgroundSize: 'cover', minHeight: '100vh',height:'1000px'}}>
    
      <br/><br/>
     
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://bankofindia.co.in/documents/20121/135615/Tractor_Farm+Mechanization_Banner.jpg/d9a011cf-4e6c-a4e0-3fac-f3a0e51e5070?t=1675745656229"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The sprint campaign of <a>Kisan Credit Card</a> (KCC) saturation drive, titled as Kisan Bhagidari Prathmikta Humaari (KBPH),from April 24 to May 1
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         
        </CardActions>
      </Card>

      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ndtvimg.com/i/2016-02/agriculture-farm-generic-istock_650x400_61455603415.jpg"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Ministry of Agriculture & Farmers Welfare of India will conduct ‘Fasal Bima Pathshala’ under ‘Kisan Bhagidari Prathmikta Campaign’ as a Jan Bhagidari movement.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="http://admin.risingkashmir.com/Source/News/72ed493e-f00c-4822-96ba-8fdf16af445d.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A Special Drive has been undertaken by the Department for providing all dairy farmers of Milk Cooperatives and Milk Producer Companies with Kisan Credit Cards (KCC).
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://navi.com/blog/wp-content/uploads/2022/06/Agriculture-Loan-Guide.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Nationwide AHDF KCC Campaign from 15th November 2021 to 15th February 2022, for providing Kisan Credit Card facility to all eligible Animal Husbandry and Fishery Farmers.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      

    <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://media.assettype.com/TNIE%2Fimport%2F2020%2F9%2F30%2Foriginal%2Ffarmer_EPS45.jpg?w=1200&auto=format%2Ccompress&fit=max"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          50% of the cost of the seed subject to a maximum of Rs.1200/-per Quintal whichever is less
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}} href="https://www.tn.gov.in/scheme/data_view/6853" size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://sharadbank.com/images/agri-loan.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Soil health card will be distributed to all the farmers who have offered the soil sample for testing by paying prescribed fee of Rs.5/- each for Macro and Micro nutrient testing

          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}}  href="https://www.tn.gov.in/scheme/data_view/6849" size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://5.imimg.com/data5/YQ/JO/MY-16318921/7-5hp-solar-pump-500x500.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          50 farmers / Agricultural labourers will be trained in a cluster with the financial assistance of Rs.5000/- per training.
          </Typography>
        </CardContent>
        <CardActions>
          <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}} href="https://www.tn.gov.in/scheme/data_view/6847"size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.unsplash.com/photo-1508857650881-64475119d798?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          20% on power consumption charges for 36 months from Date of Commence -ment of Production or date of power connection whichever is later.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}}href="https://www.tn.gov.in/scheme/data_view/19670" size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}
export default SchemeDetails;