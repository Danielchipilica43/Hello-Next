
import '@fortawesome/fontawesome-free/css/all.min.css'
import Image from 'next/image';
export default function Nav(){
    return(
     <nav className='flex justify-between items-center bg-yellow-500 h-16 p-4 font-mono font-normal'>
        <div>
        <Image src="/log.png" unoptimized width={55}  height={55} alt='Carregando imagem'/>
        </div>
        <ul className='xl:text-xs flex justify-center items-center'>
            <a href="#" className='ml-4 hover:text-white hover:border-b-2 hover:transform-gpu '><li>INICIO</li></a>
            <a href="#" className='ml-4 hover:text-white hover:border-b-2 hover:transform-gpu'><li>SERVIÇOS</li></a>
            <a href="#" className='ml-4 hover:text-white hover:border-b-2 hover:transform-gpu'><li>SOBRE</li></a>
        </ul>
       
        
       <button type="button" 
            className=' sm:text-sm border-2 p-1 rounded-xl shadow-xl bg-green-400 hover:font-semibold hover:bg-green-500'>
            INCREVER-SE
            <i className='fas fa-arrow-right-from-bracket ml-1'></i>
        </button>
     </nav>
    );
}