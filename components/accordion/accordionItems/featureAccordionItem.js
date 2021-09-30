import Image from 'next/image'
import { useState } from 'react';

import { motion, AnimatePresence } from "framer-motion";

import Icon from '../../shared/icon';

export default function FeatureAccordionItem({key,feature,active,onToggle}) {

    const [toggleAccordion, setToggleAccordion] = useState(false)

    const resizeAccordion = (resize) =>{
      setToggleAccordion(!resize)
      console.log('resize')
    } 


    return (
            <div className='mb-3 border-b border-feature ease-in-out pb-3'  onClick={()=>resizeAccordion(toggleAccordion)}>
                <div className='flex cursor-pointer justify-between items-center ' onClick={onToggle}>
                    <h4 className='font-medium text-base text-primary'>{feature.title}</h4>
                    {  active  ? (
                            <div className='rotate-90 transition-all animate-turn'>
                                <Icon name='arrow-down' width={15} height={15} />
                            </div>
                        ) : (
                            <div className='rotate-90 transition-all animate-rturn'>
                                <Icon name='arrow-down' width={15} height={15}  />
                            </div>
                        )
                    }
                </div>
                <p className={`${active ? ' text-feature  transition-all text-justify pr-5 py-2 block animate-drop' : 'hidden' }`}>{feature?.body}</p>
            </div>
    );
}