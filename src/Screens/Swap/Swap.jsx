import React from 'react';
import { Image, InputGroup, Form, FormControl, Button } from 'react-bootstrap';

import './Swap.scss';

const Banner = () => {
	return (
		<div id='landing' className='d-flex align-items-center justify-content-center'>
			<Image className='baby-logo d-none d-md-block' src='/images/LBD FullBody.png' height='180px' alt='logo' />
			<div className='box p-3'>
				<div className='d-flex align-items-center justify-content-between'>
					<h1 className='exchange'>Exchange</h1>
					<Image src='/images/settings.png' alt='logo' width='40px' />
				</div>
				<div className='white-box mt-3 p-3'>
					<InputGroup className='mb-3 align-items-center'>
						<p className='from'>from</p>
						<FormControl
							className='ml-3'
							style={{ border: '0px' }}
							aria-label='Example text with button addon'
							aria-describedby='basic-addon1'
						/>
					</InputGroup>

					<div className='d-flex align-items-center justify-content-between'>
						<h1 className='currency'>0,0</h1>
						<select className='select'>
							<option>Select a Currency</option>
							<option>o 1</option>
							<option>o 2</option>
							<option>o 3</option>
							<option>o 4</option>
						</select>
					</div>
				</div>
				<div className='d-flex align-items-center justify-content-center mt-3'>
					<Image src='/images/arrow.png' alt='logo' width='55px' />
				</div>
				<div className='white-box mt-3 p-3'>
					<InputGroup className='mb-3 align-items-center'>
						<p className='from'>to</p>
						<FormControl
							className='ml-3'
							style={{ border: '0px' }}
							aria-label='Example text with button addon'
							aria-describedby='basic-addon1'
						/>
					</InputGroup>

					<div className='d-flex align-items-end justify-content-between'>
						<h1 className='currency'>0,0</h1>
						<div className='d-flex align-items-end'>
							<Image src='/images/LBD FullBody.png' alt='logo' height='30px' />
							<select className='select'>
								<option>LBD</option>
								<option>o 1</option>
								<option>o 2</option>
								<option>o 3</option>
								<option>o 4</option>
							</select>
						</div>
					</div>
				</div>
				<div className='d-flex align-items-center justify-content-center mt-4'>
					<Button className='swap-button'>
						<Image src='/images/text.PNG' alt='logo' width='100px' />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
