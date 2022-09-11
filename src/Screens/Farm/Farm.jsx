import React from 'react';
import { Row, Col } from 'antd';
import { Image } from 'react-bootstrap';
import { CaretDownOutlined } from '@ant-design/icons';

import './Farm.scss';
const Farm = () => {
	const data = [
		{
			id: 1,
			lbd: 'LBD/BNB',
			X80: '80x',
			arp: '4080.29%',
			tvl: '21.405 Bn',
			deposite: 'LBD',
			image: '/images/bnb logo.png',
			earn: 'BNB',
			deposited: 'LBD Deposited',
			earned: 'BNB Earned'
		},
		{
			id: 2,
			lbd: 'LBD/BUSD',
			X80: '40x',
			arp: '1704.55%',
			tvl: '5.425 Bn',
			deposite: 'LBD',
			image: '/images/busd logo.png',
			earn: 'BUSD',
			deposited: 'LBD Deposited',
			earned: 'BUSD Earned'
		},
		{
			id: 3,
			lbd: 'LBD/LBD',
			X80: '40x',
			arp: '1704.55%',
			tvl: '5.425 Bn',
			deposite: 'LBD',
			image: '/images/LBD Coin.png',
			earn: 'LBD',
			deposited: 'LBD Deposited',
			earned: 'LBD Earned'
		}
	];
	return (
		<div id='farm' className='p-2 px-4'>
			<Row gutter={40} className='pt-3'>
				{data.map((item, index) => {
					return (
						<Col md={8} xs={24} className=' pb-5' key={index}>
							<div className='rectangleBox p-3'>
								<div className='d-flex align-items-center justify-content-between'>
									<Image src='/images/LBD Coin.png' alt='logo' width='50px' />
									<div className='text-right'>
										<h5 className='lbd'>{item.lbd}</h5>
										<button className='x80 px-3'>{item.X80}</button>
									</div>
								</div>
								<div className='d-flex align-items-center justify-content-between mt-4'>
									<p className='apr'>APR:</p>
									<p className='apr'>{item.arp}</p>
								</div>
								<div className='d-flex align-items-center justify-content-between'>
									<p className='apr'>TVL:</p>
									<p className='apr'>{item.tvl}</p>
								</div>
								<div className='d-flex align-items-center justify-content-between'>
									<p className='apr'>Deposit:</p>
									<p className='apr' style={{ fontWeight: '600' }}>
										{item.deposite}
									</p>
								</div>
								<div className='d-flex align-items-center justify-content-between'>
									<p className='apr'>Earn:</p>
									<div className='d-flex align-items-center'>
										<Image src={item.image} alt='logo' width='30px' />
										<p className='apr ml-2' style={{ fontWeight: '600' }}>
											{item.earn}
										</p>
									</div>
								</div>
								<div className='line mt-2' />
								<div className='mt-3 d-flex align-items-center justify-content-between'>
									<p className='apr'>{item.deposited}</p>
									<p className='apr' style={{ fontWeight: '600' }}></p>
								</div>
								<div className='d-flex align-items-center justify-content-between'>
									<div style={{ width: '75%' }}>
										<input type='text' className='inputBox' />
									</div>
									<div style={{ width: '20%' }}>
										<button className='unstake'>Unstake</button>
									</div>
								</div>
								<div className='mt-3 d-flex align-items-center justify-content-between'>
									<p className='apr'>{item.earned}</p>
									<p className='apr' style={{ fontWeight: '600' }}></p>
								</div>
								<div className='d-flex align-items-center justify-content-between'>
									<div style={{ width: '75%' }}>
										<input type='text' className='inputBox' />
									</div>
									<div style={{ width: '20%' }}>
										<button className='unstake'>Claim</button>
									</div>
								</div>
								<div className='mt-4 d-flex align-items-center justify-content-center reactangle'>
									<p className='apr0'>0,0</p>
								</div>
								<div className='d-flex mt-3 align-items-center justify-content-center'>
									<div style={{ width: '20%' }}>
										<button className='unstake'>Stake</button>
									</div>
								</div>
								<div className='line mt-3' />
								<div className='mt-2 d-flex align-items-center justify-content-center'>
									<p className='apr'>
										detail <CaretDownOutlined />
									</p>
								</div>
							</div>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};
export default Farm;
