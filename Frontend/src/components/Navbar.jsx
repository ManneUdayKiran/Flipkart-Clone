import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Dropdown, Button } from 'antd';
import { DownCircleFilled, DownOutlined,GiftOutlined,HeartOutlined,SearchOutlined } from '@ant-design/icons';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Fuse from 'fuse.js';

import '../App.css'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Categorys from './Categorys';

// const searchItems = [
//   'Mobiles',
//   'Laptops',
//   'Headphones',
//   'Shoes',
//   'Watches',
//   'Refrigerators',
//   'Television',
//   'Books',
//   'Fashion',
//   'Beauty Products'
// ];

const loginMenu = [
  {
    key: '0',
    label:<div className='d-flex gap-5'> <strong style={{ color: 'black' }}>New Customer?</strong><a href="/signup" style={{textDecoration:'none', color: 'blue',gap:'5px' }}>Sign Up</a></div>,
    
  },
  {
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: <a style={{textDecoration:'none', color: 'black',gap:'5px' }} href="/account"><AccountBoxOutlinedIcon/>My Profile</a>,
  },
  {
    key: '3',
    label: <a style={{textDecoration:'none', color: 'black',gap:'5px' }} href="/orders"><img width="27" height="27" src="https://img.icons8.com/color/48/waitress-skin-type-1.png" alt="waitress-skin-type-1"/>Orders</a>,
  },
  {
    key: '4',
    label: <a style={{textDecoration:'none', color: 'black',gap:'5px' }} href="/wishlist"><HeartOutlined />Wishlist</a>,
  },
  {
    key: '5',
    label: <a style={{textDecoration:'none', color: 'black',gap:'5px' }} href="/rewards"><GiftOutlined />
Rewards</a>,
  },
  {
    key: '6',
    label:<div > <a  style={{textDecoration:'none', color: 'black' }} href="/giftcards"><CardGiftcardOutlinedIcon  fontSize='xsmall'/>Gift Cards</a></div>,
  },
];


const NavBar = () => {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState('');
  const [productList, setProductList] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [fuse, setFuse] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';

    // Load products for search

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'Products'));
      const items = querySnapshot.docs.map(doc => doc.data());
      setProductList(items);

      const fuseInstance = new Fuse(items, {
        keys: ['product_name', 'brand', 'product_category_tree'],
        threshold: 0.3,
      });

      setFuse(fuseInstance);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (fuse && search.trim()) {
      const results = fuse.search(search);
      const matched = results.map(res => res.item.product_name);
      setSuggestions(matched.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [search, fuse]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };
  const handleSearch = (event, value) => {
    if (value) {
      navigate(`/products?search=${encodeURIComponent(value)}`);
    }
  };
  const accountMenu = [
    {
      key: '1',
    label: <a style={{textDecoration:'none', color: 'black',gap:'5px' }} href="/account"><AccountCircleOutlinedIcon className='m-2' size='xsmall'/>My Profile</a>,
    },
    {
      key: '9',
      label: <span onClick={handleLogout}><span><img className='m-2' width="20" height="20" src="https://img.icons8.com/fluency/48/cheap-2--v1.png" alt="cheap-2--v1"/></span>Super coin Zone</span>,
    },
    {
      key: '2',
    label: <a style={{textDecoration:'none', color: 'black',gap:'5px' }} href="/orders"><svg className='m-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 50 50">
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 16 L 4 40 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 40 L 46 16 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 12.029297 C 43.160943 11.392748 42.127936 11 41 11 L 9 11 C 7.8720637 11 6.8390569 11.392748 6 12.029297 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 9 13 L 41 13 C 42.668484 13 44 14.331516 44 16 L 44 40 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 40 L 6 16 C 6 14.331516 7.3315161 13 9 13 z M 14.984375 17.986328 A 1.0001 1.0001 0 0 0 14 19 C 14 25.063407 18.936593 30 25 30 C 31.063407 30 36 25.063407 36 19 A 1.0001 1.0001 0 1 0 34 19 C 34 23.982593 29.982593 28 25 28 C 20.017407 28 16 23.982593 16 19 A 1.0001 1.0001 0 0 0 14.984375 17.986328 z"></path>
</svg>Orders</a>,
    },
    {
      key: '3',
    label: <a style={{textDecoration:'none', color: 'black',gap:'5px' }} href="/wishlist"><HeartOutlined className='m-2'/>Wishlist</a>,
    },
    {
      key: '4',
label: <a style={{textDecoration:'none', color: 'black',gap:'5px' }} href="/rewards"><GiftOutlined className='m-2'/>
Rewards</a>,    },
    {
      key: '5',
    label:<div > <a  style={{textDecoration:'none', color: 'black' }} href="/giftcards"><CardGiftcardOutlinedIcon className='m-2'  fontSize='xsmall'/>Gift Cards</a></div>,
    },
    {
      key: '7',
      label: <span onClick={handleLogout}><LocalOfferOutlinedIcon className='m-2 p-1'/>Coupons</span>,
    },
    {
      key: '8',
      label: <span onClick={handleLogout}><NotificationsNoneOutlinedIcon className='m-2 p-1'/>Notifications</span>,
    },
    {
      key: '6',
      label: <span onClick={handleLogout}><LogoutOutlinedIcon className='m-2'/>Logout</span>,
    },
  ];
  return (
    <>
    <Navbar bg="" expand="lg" className=" " style={{ backgroundColor: isHome ? 'white' : 'rgb(40, 115, 240)', boxShadow: isHome ? 'none' : '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Container>
        <Navbar.Brand style={{color: isHome ? 'white' : 'white' }} className='brand' href="/">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            width="160"
            height="40"
            alt="Flipkart"
            
            />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="flipkart-navbar" />
        <Navbar.Collapse id="flipkart-navbar" className="justify-content-between">
          <div className="mx-auto" style={{ width:isHome? '700px':'600px', }}>
            <Autocomplete
            style={{backgroundColor:isHome ? '#dde8fa91' : 'white',border:"none",borderRadius:"5px",boxShadow:'0 2px 4px rgba(0,0,0,0.1)'}}
            freeSolo
  options={suggestions}
  onChange={handleSearch}
  renderInput={(params) => (
    <TextField
      {...params}
      placeholder="Search for products, brands and more"
      variant="outlined"
      size="small"
      fullWidth
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSearch(null, search);
        }
      }}
      value={search}
      InputProps={{
        ...params.InputProps,
        startAdornment: (
          <SearchOutlined onClick={handleSearch} style={{ marginLeft: '10px', color: '#888' }} />
        ),
        style: {
          backgroundColor: '#dde8fa91',
          borderRadius: '5px',
          border: 'none',
        }
      }}
      />
    )}
/>
            
          </div>

          <Nav className=" align-items-center gap-5">
            <Dropdown arrow={true}  className='p-0' menu={{ items:user?accountMenu: loginMenu }} placement="top">
              <Button type="" color='blue' size="small">
                  
               {user ?<Nav.Link style={{color:isHome?'black':'white',fontSize:'1rem',backgroundColor:isHome?'':'rgb(40, 115, 240)',padding:isHome?'30px 30px 30px 30px':'' }} href="#">{isHome?<AccountCircleOutlinedIcon/>:<DownOutlined/>}<span className='m-1'>Account</span></Nav.Link>   :
               <>
               <Nav.Link style={{color:isHome?'black':'white',fontSize:'1rem',backgroundColor:isHome?'white':'rgb(40, 115, 240)' }} href='/login'>Login  <DownOutlined /></Nav.Link>
               </>}
                
              </Button>
            </Dropdown>
          
            
            <Nav.Link style={{ color:isHome? 'black':'white',fontSize:'1rem'}} href="#"><ShoppingCartOutlinedIcon/>Cart</Nav.Link>
            <Nav.Link style={{color:isHome?'black':'white'}} href="#"><StorefrontOutlinedIcon/>Become a Seller</Nav.Link>

            {/* Ant Design Login Button Dropdown */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          {isHome ? '':<Categorys/>}

    </>
    
  );
};

export default NavBar;
