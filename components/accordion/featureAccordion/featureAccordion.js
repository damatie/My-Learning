import { useState } from 'react';
import Image from 'next/image'

import { motion, AnimatePresence } from "framer-motion";
// import { ContentPlaceholder } from "./ContentPlaceholder";

import FeatureAccordionItem from '../accordionItems/featureAccordionItem';
import { dataFeatures } from '../../data/dataFeatures';

export default function FeatureAccordion() {

    const [clicked,setClicked] = useState("0")
    
    const handleFeatureToggled = (index) => {
        if(clicked === index)  {
            return setClicked("0") 
        } 
        setClicked(index)
    }    

    return (
        <div>
            {dataFeatures?.map((dataFeature, index) =>{
                return  (
                    <FeatureAccordionItem 
                        key={index}
                        feature={dataFeature} 
                        onToggle={() => handleFeatureToggled(index)}
                        active={clicked === index}
                    />
                )
            } 
            )}
        </div>
    );
}