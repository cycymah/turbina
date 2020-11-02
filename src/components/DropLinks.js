import React from 'react';
import LinkTab from './LinkTab';
import LinkHead from './LinkHead';

import { LINK_TAB_DATA as linkTabData } from '../constants/linkTabData';

function DropLinks() {
    const [isOpened, setIsOpened] = React.useState(false);
    const [viewWidth, setViewWidth] = React.useState(400);

    React.useEffect(() => {
        setViewWidth(window.innerWidth);
        if(viewWidth>500){setIsOpened(true)}
        window.addEventListener('resize', () => (setViewWidth(window.innerWidth)))
    }, []);

    const handleOpenMenu = (() => {
        setIsOpened(true);
    });
    const handleCloseMenu = (() => {
        setIsOpened(false);
    })
    console.log(viewWidth);
    console.log(isOpened);

    return (
        <ul className="dropLinks">
            {viewWidth < 500 && (isOpened? <LinkHead title='X' onClick={handleCloseMenu} />
                : <LinkHead title="Стриминги" onClick={handleOpenMenu} />)}
            
            {linkTabData.map((item, idx) => {
                const position = idx * 35 + 45;
                return (<LinkTab
                    key={idx}
                    title={item.title}
                    pos={position}
                    url={item.url}
                    isActive={isOpened} />);
            })}
        </ul>
    )
}
export default DropLinks;
