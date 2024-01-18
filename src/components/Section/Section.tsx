/* Section component used to encapsulate components into sections with
 custom dimensions and styling */

 import './Section.css'

 import React, { ReactNode, CSSProperties } from 'react';

 interface SectionProps {
   width?: number;
   height?: number;
   className?: CSSProperties;
   children: ReactNode;
 }
 
 const Section: React.FC<SectionProps> = ({ width, height, className, children }) => {
   const sectionStyle: CSSProperties = {
     width: width || '100%', 
     height: height || 'auto', 
     ...className
   };
 
   return (
     <div style={sectionStyle}>
       {children}
     </div>
   );
 };
 
 export default Section;
 
