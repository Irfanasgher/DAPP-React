import React from 'react';
import { Row, Col } from 'antd';
import { Image, Button } from 'react-bootstrap';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './Lottery.scss';

const Lottery = () => {
	return (
		<div id='lottery' className='px-md-5 d-md-flex align-items-center'>
			<Image src='/images/lottery illustration.png' alt='logo' className='lotteryImage' />
			<div className='ml-md-5'>
				<h1 className='littleBabay'>LittleBabyDoge's</h1>
				<h1 className='lotteryText'>Lottery</h1>
				<div className='text-center mt-3'>
					<p className='prize'>Prize Pot</p>
				</div>
				<div className='text-center mt-2'>
					<div className='priceContainer'>
						<p className='price'>$ 341,650</p>
					</div>
				</div>
				<div className='text-center mt-3'>
					<p className='draw'>Next Draw in: 1h 20m</p>
				</div>
				<div>
					<Image src='/images/Tickets.png' alt='logo' className='lotteryBadge' />
				</div>
				<div className='text-right mt-3'>
					<p className='text-white detail'>
						<QuestionCircleOutlined /> Lottery Details <QuestionCircleOutlined />
					</p>
				</div>
			</div>
		</div>
	);
};
export default Lottery;
