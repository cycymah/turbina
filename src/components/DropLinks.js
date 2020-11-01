import React from 'react';
import LinkTab from './LinkTab';
import LinkHead from './LinkHead';

import { LINK_TAB_DATA as linkTabData } from '../constants/linkTabData';

function DropLinks() {
    const [isOpened, setIsOpened] = React.useState(false);

    const handleOpenMenu=(()=>{
        setIsOpened(true);
        //console.log(isOpened);
        //setTimeout(()=>{ console.log(isOpened);},2000);
    });
    const handleCloseMenu=(()=>{
        setIsOpened(false);
        //setTimeout(()=>{ console.log(isOpened);},2000);
    })

    if (isOpened) {
        return (
            <ul>
                <LinkHead title="XXXXXXXXXXXXXXXXXX" onClick={handleCloseMenu}/>
                {linkTabData.map((item, idx) => {
                    const dimention = item.title.length * 15;
                    const position = idx * 50 + 50;
                    //console.log(item,idx, LinkTab);
                    return (<LinkTab
                        key={idx}
                        title={item.title}
                        dim={dimention}
                        pos={position}
                        url={item.url}
                        isActive={isOpened} />);
                })}

            </ul>

        )
    }else{
        return(<ul>
            <LinkHead title="Стриминги" onClick={handleOpenMenu}/>
            {linkTabData.map((item, idx) => {
                    const dimention = item.title.length * 15;
                    const position = idx * 50 + 50;
                    //console.log(item,idx, LinkTab);
                    return (<LinkTab
                        key={idx}
                        title={item.title}
                        dim={dimention}
                        pos={position}
                        url={item.url}
                        isActive={isOpened} />);
                })}
            </ul>
            )
    }
}
export default DropLinks;
  //kljlk
  // key={idx}
                // title={item.title}
                // link={item.link}
                // size={dimension}

    //const avatarRef = React.useRef();

    //const [submitButtonText, setSubmitButtonText] = React.useState('Сохранить');

    //   React.useEffect(() => {
    //     setSubmitButtonText('Сохранить');
    //   }, [isOpen, setSubmitButtonText]);

    //   React.useEffect(() => {
    //     const form = document.forms.avatar;
    //     validatorRef.current = new Validator(validationConfig, form);
    //     validatorRef.current.enableValidation();
    //   }, []);

    //   function handleSubmit(e) {
    //     setSubmitButtonText('Сохранение...');
    //     e.preventDefault();
    //     onUpdateAvatar(avatarRef.current.value);
    //   }
    //   function handleClose() {
    //     avatarRef.current = '';
    //     validatorRef.current.clearErrors();
    //     onClose();
    //   }






