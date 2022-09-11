import React from 'react';
import { Row, Col } from 'antd';
import { Image, Button } from 'react-bootstrap';
import './ChangeTheWorld.scss';

const ChangeTheWorld = () => {
	return (
		<div id='changeTheWorld'>
			<div className='text-center pt-5 px-3'>
				<h1> Change The World</h1>
				<h5 style={{ color: '#FFF' }}>
					with <span style={{ color: '#64cbf4' }}>LittleBaby</span>
					<span style={{ color: '#FFB52D' }}>Doge</span>
				</h5>
				<p className='mt-5 paragraph' style={{ color: '#FFF', marginBottom: 0 }}>
					Climate change is a critical global challenge with long-term implications for the sustainable
					development of all countries. The Little Baby Doge team will maintain its unwavering support towards
					fighting climate change. This is why we have partnered with several climate change organizations and
					created donation wallets for charitable individuals and organizations to donate to them through the
					LBD platform. Our focus is on harnessing the transparency of blockchain technology and
					decentralization to ensure worthy causes can benefit through charitable donations.
				</p>
			</div>
			<div className='mt-5 px-5'>
				<Row gutter={40} className='pt-3'>
					<Col md={8} className=' pb-5'>
						<div className='white-area px-2 py-3'>
							<Image src='/images/jobone for humanity.png' alt='logo' width='100%' />
							<h2 className='heading mt-2'>JobOne For Humanity</h2>
							<p className='para'>
								Job One for Humanity is a non-profit organization with a complete plan for how to
								prepare for, adapt to, and slow and lessen the global warning and climate change
								emergency.
								<br />
								<br />
							</p>
						</div>
						<div className='d-flex align-items-center justify-content-center mt-4'>
							<Button className='px-4'>Donate</Button>
						</div>
					</Col>
					<Col md={8} className=' pb-5'>
						<div className='white-area px-2 py-3'>
							<Image src='/images/gretha thunberg doundation.png' alt='logo' width='100%' />
							<h2 className='heading mt-2'>Greta Thunberg's Foundation</h2>
							<p className='para'>
								Greta Tintin Ekeonora Ernman Thunberg is a Swedish environmental activist who is known
								for challenging world leaders to take immediate action for climate change mitigation.
								<br />
								<br />
							</p>
						</div>
						<div className='d-flex align-items-center justify-content-center mt-4'>
							<Button className='px-4'>Donate</Button>
						</div>
					</Col>
					<Col md={8} className=' pb-5'>
						<div className='white-area px-2 py-3'>
							<Image src='/images/Green Faith.png' alt='logo' width='100%' />
							<h2 className='heading mt-2'>Green Faith</h2>
							<p className='para'>
								GreenFaith is building a worldwide, multi-faith climate and environmental movement.
								Together our members create communities to transform ourselves, our spiritual
								institutions, and society to protect the planet and create a compassionate, loving and
								just world.
							</p>
						</div>
						<div className='d-flex align-items-center justify-content-center mt-4'>
							<Button className='px-4'>Donate</Button>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default ChangeTheWorld;
