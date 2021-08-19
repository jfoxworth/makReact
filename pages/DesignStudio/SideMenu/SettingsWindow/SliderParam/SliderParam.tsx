
// Standard React items
import { FC, ReactElement} from 'react';
import styled from 'styled-components';

// Components
import FormInput from '../../../../../src/components/Forms/FormInput';


interface propTypes {
  param : any
}

const SliderParam:FC<propTypes> = ({param}:propTypes):ReactElement => {

  return(
    
    <StyledWrapper>
      
      <StyledLabel>{param.label}</StyledLabel>

      <StyledLine>
        <StyledSlider>Slider</StyledSlider>

        <StyledInput>
          <FormInput value={param.value} handleChange={()=>{}} />
        </StyledInput>
      </StyledLine>

    </StyledWrapper>
    
  )

}


export default SliderParam

const StyledWrapper =  styled.div`
  width:100%;
  margin:10px 0px;
`;

const StyledLabel =  styled.div`
  width:auto;
  margin:auto;
  margin:0px 0px 15px 0px;
  text-align:center;
`;

const StyledLine =  styled.div`
  width:100%;
  display:inline-block;
`;

const StyledSlider =  styled.div`
  float:left;
  width:65%;
  margin:0px 5%;
  padding:0px;
`;

const StyledInput =  styled.div`
  float:right;
  width:20%;
  margin:0px 5% 0px 0px;
  padding:0px;
`;
