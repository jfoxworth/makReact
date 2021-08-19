
// Standard React items
import { FC, ReactElement} from 'react';
import styled from 'styled-components';

// Components
import FormDropdown from '../../../../../src/components/Forms/FormDropdown';


interface propTypes {
  param : any
}

const DropdownParam:FC<propTypes> = ({param}:propTypes):ReactElement => {

  return(
    
    <StyledWrapper>
      
      <StyledLabel>{param.label}</StyledLabel>

      <StyledLine>
        <StyledDropdown>
          <FormDropdown value={param.value} options={param.options} handleChange={()=>{}} />
        </StyledDropdown>
      </StyledLine>

    </StyledWrapper>
    
  )

}


export default DropdownParam

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

const StyledDropdown =  styled.div`
  float:right;
  width:90%;
  margin:0px 5% 0px 5%;
  padding:0px;
`;
