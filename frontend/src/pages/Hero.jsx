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

    return (
        <div className="relative font-custom flex flex-col justify-between items-center w-full overflow-hidden">
            <div className='w-full h-screen'>
                <div className="flex justify-between w-full px-[40px] py-[20px]">
                    <img className="h-[2rem] object-cover" src={Logo}/>
                    <Button className="rounded-full px-[25px] drop-shadow-lg shadow-inner shadow-white ">Try now</Button>
                </div>
                <div className='relative flex flex-col justify-center items-center w-full mt-[4rem]'>
                    <img className="h-[25rem] object-cover" src={StickNote}/>
                    <h1 className='absolute bottom-[4.3rem] text-[2.7rem] font-medium'>Point of Sales kept simple</h1>
                    <Input className="mt-4 rounded-full w-[400px] h-[2.s3rem]"></Input>
                </div>
            </div>
            <div className='flex w-full h-screen overflow-visible relative'>
                <img className="absolute top-[-25vh] left-[-6vw] h-[400px] object-cover" src={BlackPen}/>
                <img className="absolute top-[-30vh] left-[1vw] h-[860px] object-cover" src={Receipt}/>
                <img className="absolute top-[-20vh] left-[15vw] h-[500px] object-cover z-[2]" src={Carrot}/>
                <img className="absolute top-[-15vh] left-[47vw] h-[400px] object-cover z-[1]" src={CreditCard}/>
                <img className="absolute top-[-14vh] left-[63vw] h-[200px] object-cover" src={BarCode}/>
                <img className="absolute top-[-35vh] left-[70vw] h-[800px] object-cover" src={PosTerminal}/>
            </div>
        </div>
    )
}

export default Hero