/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*
*/


// Standard React items
import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import styles from '../../../../styles/styles.module.css';

// Hooks
import useFirestoreImage from '../../Hooks/useFirestoreImage';

// Components
import Image from 'next/image';
import ImageWrapper from '../../ImageWrapper/ImageWrapper';

type propItems = {
  imageURL:string,
  percent:number,
  height?:string
}


const ListImage = ({imageURL, percent, height}:propItems):ReactElement => {
 
  const thisImage = useFirestoreImage(imageURL);

  return (
    <>
    {
      thisImage &&
        <StyledText percent={percent} height={height}>
          <ImageWrapper>
            <Image width={'50px'} height={'50px'} className={styles.roundedSmall} src={thisImage} alt={'User Image'} />
          </ImageWrapper>
        </StyledText>
    }
    </>
  )
}


interface IProps {
  percent:number,
  height?:number|string
}


const StyledText = styled.div<IProps>`
  display:inline-block;
  margin:auto;
  text-align:center;
  ${css`
  width: ${(props:IProps)=>props.percent+'%'};
  height:${(props:IProps)=>props.height};
  `}
`



export default ListImage


