import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => {
	return (
		<div id='navbar'>
			<Navbar collapseOnSelect expand='lg' bg='none' variant='dark' className='navWrapper'>
				<Navbar.Brand href='#home' className='logo'>
					<Link to='/'>
						<div className='d-flex align-items-center'>
							<Image src='/images/LBD Coin.png' alt='logo' width='30px' />
							<Image src='/images/LBD Text.png' alt='logo' width='140px' className='ml-2' />
						</div>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto customNav'>
						<Nav.Link className='navlink'>
							<Link to='/'>Swap</Link>
						</Nav.Link>
						<Nav.Link className='navlink'>
							<Link to='/farm'>Farm</Link>
						</Nav.Link>
						<Nav.Link className='navlink'>
							<Link to='/NFTs'>NFTs</Link>
						</Nav.Link>
						<Nav.Link className='navlink'>
							<Link to='/lottery'>Lottery</Link>
						</Nav.Link>
						<Nav.Link className='navlink'>
							<Link to='/lottery'>Store</Link>
						</Nav.Link>
						<Nav.Link className='navlink'>
							<Link to='/change-the-world'>Change The World</Link>
						</Nav.Link>
						<Nav.Link eventKey={4} href='/bextools-board'>
							<Button type='primary' className='appButton'>
								<div className='innerButton d-flex align-items-center justify-content-center'>
									Connect Wallet
								</div>
							</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
