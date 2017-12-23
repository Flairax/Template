import React from 'react';


const page = ({header, ...sections}) => {
   /*================RENDER==================*/ 
   return(
      <article>
         <h1>{header}</h1>
         {sections.map(section => {
            return(
               <section>
                  {section.text}
               </section>
         )})}
      </article>
   )
}

export default page;