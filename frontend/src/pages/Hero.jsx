import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import Logo from '../assets/webp/Carrot_logo.webp'
import StickNote from '../assets/webp/stick_note.webp'
import BlackPen from '../assets/webp/black_pen.webp'
import Receipt from '../assets/webp/receipt.webp'
import Carrot from '../assets/webp/carrot.webp'
import CreditCard from '../assets/webp/credit_card.webp'
import BarCode from '../assets/webp/bar_code.webp'
import PosTerminal from '../assets/webp/pos_terminal.webp'


const Hero = () => {
    const [email, setEmail] = useState('');
    const [shake, setShake] = useState(false);
    const navigate = useNavigate()

    const validateEmail = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
        return regex.test(email);
    };

    const handleStartNow = () => {
        if (email && validateEmail(email)) {
            navigate('/signup', { state: { email } });
        } else {
            setShake(true);
            setTimeout(() => setShake(false), 500);
            console.error('Invalid email format');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleStartNow();
        }
    };

    return (
        <div className="relative font-custom flex flex-col justify-between items-center w-full overflow-hidden">
            <div className='w-full h-screen'>
                <div className="flex justify-between w-full px-[40px] py-[20px]">
                    <img className="h-[2rem] object-cover" src={Logo}/>
                    <Button onClick={() => navigate("/login")}className="rounded-full px-[25px] drop-shadow-lg shadow-inner shadow-white ">Sign in</Button>
                </div>
                <div className='relative flex flex-col justify-center items-center w-full mt-[4rem]'>
                    <img className="h-[25rem] object-cover" src={StickNote}/>
                    <h1 className='absolute bottom-[4.3rem] text-[2.7rem] font-medium'>Point of Sales kept simple.</h1>
                    <Input 
                        type="email"
                        className={`mt-4 rounded-full w-[400px] h-[2.3rem] pl-4 ${shake ? 'shake' : ''}`} 
                        placeholder="Enter the business email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onKeyDown={handleKeyDown}
                    > 
                        <Button 
                            className="rounded-full px-[15px] h-8 drop-shadow-lg shadow-inner shadow-white"
                            onClick={() => handleStartNow()}
                        >
                            Start Now
                        </Button>                    
                    </Input>
                </div>
            </div>
            <div className='flex w-full h-screen overflow-visible relative'>
                <img className="absolute top-[-26vh] left-[-9vw] h-[550px] object-cover z-[2]" src={BlackPen}/>
                <img className="absolute top-[-26vh] left-[1vw] h-[860px] object-cover z-[1]" src={Receipt}/>
                <img className="absolute top-[-21vh] left-[8vw] h-[700px] object-cover z-[2]" src={Carrot}/>
                <img className="absolute top-[-11vh] left-[47vw] h-[400px] object-cover z-[1]" src={CreditCard}/>
                <img className="absolute top-[-10vh] left-[63vw] h-[200px] object-cover" src={BarCode}/>
                <img className="absolute top-[-32vh] left-[68vw] h-[900px] object-cover" src={PosTerminal}/>
            </div>
        </div>
    )
}

export default Hero