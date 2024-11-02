import ContrastRoundedIcon from '@mui/icons-material/ContrastRounded';
import React from 'react'
import { ChatBubble, Home, School, Terminal, WhatsApp, Work } from '@mui/icons-material';
import CustomBtn from '../ui/CustomBtn';
import {useTheme} from '../../context/themeContext'
import { Link} from 'react-scroll';

function RigthBar() {
	const {darkMode, toggleTheme} = useTheme();
	const number = process.env.REACT_APP_PHONE_NUMBER;
	const text = encodeURIComponent(process.env.REACT_APP_CONVERSATION);
	return (
		<div className='w-[75px] bg-white dark:bg-gray-900 flex flex-col items-center justify-between py-8'>
			<div className="theme">
				<CustomBtn text={<ContrastRoundedIcon/>} color={darkMode ? 'text-white' : 'text-gray-900'} bgColor={'transparent'}
					onClick={() => {toggleTheme()}} />
			</div>

			<div className="links flex flex-col items-center space-y-8">
				<CustomBtn text={
						<Link
							to="home"
							smooth={true}
							duration={500}
						>
							<Home/>
						</Link>
					} 
					color={'text-white'} bgColor={'bg-primary'} bgFonced={'bg-primary-fonced'} />

				<CustomBtn 
					text={
						<Link
							to="services"
							smooth={true}
							duration={500}
						>
							<Terminal/>
						</Link>
					}  
					color={'text-primary'} bgColor={darkMode ? 'bg-gray-900' : 'bg-white'} className={'hover:bg-primary hover:text-white duration-300'} />
					
					
				<CustomBtn 
					text={
						<Link
							to="services"
							smooth={true}
							duration={500}
						>
							<School/>
						</Link>
					}  
					color={'text-primary'} bgColor={darkMode ? 'bg-gray-900' : 'bg-white'} className={'hover:bg-primary hover:text-white duration-300'} />
					
				<CustomBtn 
					text={
						<Link
							to="services"
							smooth={true}
							duration={500}
						>
							<Work/>
						</Link>
					}  
					color={'text-primary'} bgColor={darkMode ? 'bg-gray-900' : 'bg-white'} className={'hover:bg-primary hover:text-white duration-300'} />
					
				<CustomBtn 
					text={
						<Link
							to="services"
							smooth={true}
							duration={500}
						>
							<Terminal/>
						</Link>
					}  
					color={'text-primary'} bgColor={darkMode ? 'bg-gray-900' : 'bg-white'} className={'hover:bg-primary hover:text-white duration-300'} />
				
				<CustomBtn 
					text={
						<Link
							to="services"
							smooth={true}
							duration={500}
						>
							<ChatBubble/>
						</Link>
					}  
					color={'text-primary'} bgColor={darkMode ? 'bg-gray-900' : 'bg-white'} className={'hover:bg-primary hover:text-white duration-300'} />
			</div>

			<div className="whatsapp">
			<CustomBtn text={<WhatsApp/>} onClick={() => {window.open(`https://wa.me/${number}?text=${text}`, '_blank')}} color={!darkMode ? 'text-green-700' : 'text-green-400'} bgColor={'#fff'} bgFonced={''} />
			</div>
		</div>
	)
}

export default RigthBar