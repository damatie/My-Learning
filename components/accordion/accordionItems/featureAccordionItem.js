import Image from 'next/image'
import Icon from '../../shared/icon';

export default function FeatureAccordionItem({feature,active,onToggle}) {
    return (
        <div className='mb-3 border-b border-feature transition-all pb-3 '>
            <div className='flex cursor-pointer justify-between items-center ' onClick={onToggle}>
                <h4 className='font-medium text-base text-primary'>{feature.title}</h4>
                {  active  ? (
                        <div className='rotate-90 transition-all'>
                            <Icon name='arrow-down' width={15} height={15} />
                        </div>
                    ) : (
                        <Icon name='arrow-down' width={15} height={15} />
                    )
                }
            </div>
            <p className={`transition-all ${active ? ' text-feature  transition-all text-justify pr-5 py-2 block opacity-100' : 'opacity-0 hidden' }`}>{feature?.body}</p>
        </div>
    );
}