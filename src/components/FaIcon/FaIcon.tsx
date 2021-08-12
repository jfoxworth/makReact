/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*/

// Standard React items
import { FC, ReactElement } from 'react';

// The icons needed
import { FaTag, 
         FaQuestionCircle, 
         FaUserAstronaut, 
         FaUser, 
         FaInfoCircle, 
         FaList, 
         FaCogs,
         FaEnvelope,
         FaCog,
         FaChevronRight,
         FaChevronLeft,
         FaChevronUp,
         FaChevronDown,
         FaTasks,
         FaCubes,
         FaPlusSquare,
         FaBook,
         FaBriefcase,
         FaLaptop,
        FaKey, 
        FaDollarSign,
        FaCalendar,
        FaCalendarAlt,
        FaCalendarDay,
        FaCross,
        FaTrash,
        FaCopy} from 'react-icons/fa';


type propsObj = {
  icon:string
}



const FaIcon:FC<propsObj> = ({icon}):ReactElement => {

  return (
    <>
      { (icon==="Tag") && <FaTag /> }
      { (icon==="QuestionCircle") && <FaQuestionCircle /> }
      { (icon==="UserAstronaut") && <FaUserAstronaut /> }
      { (icon==="User") && <FaUser /> }
      { (icon==="InfoCircle") && <FaInfoCircle /> }
      { (icon==="List") && <FaList /> }
      { (icon==="Cogs") && <FaCogs /> }
      { (icon==="Envelope") && <FaEnvelope /> }
      { (icon==="Key") && <FaKey /> }
      { (icon==="Cog") && <FaCog /> }
      { (icon==="ChevronRight") && <FaChevronRight /> }
      { (icon==="ChevronLeft") && <FaChevronLeft /> }
      { (icon==="ChevronUp") && <FaChevronUp /> }
      { (icon==="ChevronDown") && <FaChevronDown /> }
      { (icon==="Cubes") && <FaCubes /> }
      { (icon==="Tasks") && <FaTasks /> }
      { (icon==="PlusSquare") && <FaPlusSquare /> }
      { (icon==="Book") && <FaBook /> }
      { (icon==="Briefcase") && <FaBriefcase /> }
      { (icon==="Laptop") && <FaLaptop /> }
      { (icon==="Dollar") && <FaDollarSign /> }
      { (icon==="Copy") && <FaCopy /> }
      { (icon==="Calendar") && <FaCalendar /> }
      { (icon==="CalendarAlt") && <FaCalendarAlt /> }
      { (icon==="CalendarDay") && <FaCalendarDay /> }
      { (icon==="Cross") && <FaCross /> }
      { (icon==="Trash") && <FaTrash /> }
    </>
  )
}

export default FaIcon;
