import React from 'react';
import { Row, Col } from 'antd';
import { Image } from 'react-bootstrap';

import './NFTs.scss';
const NFTs = () => {
	const data = [
		{
			id: 1,
			heading: 'Bronze Warrior'
		},
		{
			id: 2,
			heading: 'Doctor Baby'
		},
		{
			id: 3,
			heading: 'Swag Baby'
		},
		{
			id: 4,
			heading: 'Cute Firefighter'
		},
		{
			id: 5,
			heading: 'Angel Baby'
		},
		{
			id: 6,
			heading: 'Golden Warrior'
		},
		{
			id: 7,
			heading: 'Mafia Boss'
		},
		{
			id: 8,
			heading: 'AstroBabyNaut'
		},
		{
			id: 9,
			heading: 'Silver Warrior'
		},
		{
			id: 10,
			heading: 'Diamond Warrior'
		}
	];

	return (
		<div id='nfts' className='p-3 px-4 d-flex flex-wrap justify-content-between'>
			{/* <Row gutter={40} className='pt-3'> */}
			{data.map((item, index) => {
				return (
					// <Col lg={4} xs={24} className=' pb-5' key={index}>
					<div className='bronzeBox px-2 py-3 mt-4' key={index}>
						<Image src='/images/baby.jpg' alt='logo' width='100%' />
						<div className='d-flex align-items-center justify-content-between mt-2'>
							<p className='little'>LittleBabyDoge Original Art</p>
							<p className='price'>Price</p>
						</div>
						<div className='d-flex align-items-center justify-content-between'>
							<p className='bronze'>{item.heading}</p>
							<div className='d-flex align-items-center'>
								<Image src='/images/LBD Coin.png' alt='logo' width='20px' />
								<p className='little ml-2'>150Bn 1 BD</p>
							</div>
						</div>
						<div className='d-flex align-items-center justify-content-between mt-2'>
							<p className='little1'>LittleBabyDog</p>
							<button className='buy px-3 p-1'>BUY</button>
						</div>
					</div>
					// </Col>
				);
			})}
			{/* </Row> */}
		</div>
	);
};
export default NFTs;
