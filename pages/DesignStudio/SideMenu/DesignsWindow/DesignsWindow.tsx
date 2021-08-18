
// Standard React items
import {useEffect, FC, ReactElement} from 'react';
import styled from 'styled-components';

// Components
import Image from 'next/image';

interface propTypes {
  clickHandler : Function
}

const SideMenu:FC<propTypes> = ({clickHandler}:propTypes):ReactElement => {

  const designOptions =[
    {
      name : 'Twisting Bench',
      icon : '/mak-icons/MAKICONS-5.png',
      id : 'bhaNuq9CwpL5a6PitJcI'
    },
    {
      name : 'Planter Bench',
      icon : '/mak-icons/MAKICONS-4.png',
      id : 'jBRzSildNc16fQjAmLkh'
    },
    {
      name : 'Flower Wall',
      icon : '/mak-icons/MAKICONS-10.png',
      id : '1pbM0lb5hcHureiiX239'
    },
    {
      name : 'Fossil Wall',
      icon : '/mak-icons/MAKICONS-11.png',
      id : 'rdTLJhZqGZ1uhLa59vVC'
    },
    {
      name : 'Faceted Wall',
      icon : '/mak-icons/MAKICONS-6.png',
      id : 'SzBOwe2odgJubMPI5kB7'
    },
    {
      name : 'Slat Wall',
      icon : '/mak-icons/MAKICONS-7.png',
      id : 'k3Ah6psRFJs12MJfsmxL'
    },
    {
      name : 'Desk',
      icon : '/mak-icons/MAKICONS-9.png',
      id : 'b5l1bSKOWeXrHGJcd6vE'
    },
    {
      name : 'Backlit Wall',
      icon : '/mak-icons/MAKICONS-8.png',
      id : 'eLHfWkL4GA2LFeuoVQkx'
    }
  ];

  return(
    
    <>
    {
      designOptions.map((design:any, index:number)=>(
        <StyledMenuItem key={`designMenItem${index}`}>
          <Image src={design.icon} width={'50px'} height={'50px'} alt={'design icon'} />
        </StyledMenuItem>
      ))
    }
    </>

    
  )

}

const StyledMenuItem = styled.div`
  float:left;
  width:40px;
  margin: 15px 29px;
  cursor:pointer;
`;

export default SideMenu