import React from 'react';
import Tree from 'react-hierarchy-tree-graph';
import Marquee from "react-fast-marquee";
const BecomeProgrammer = () => {
    const myTreeData = [
        {
          name: 'Skills',
          
          children: [
            {
              name: 'Programming',
              children: [
                {
                  name: 'Algorithms',
                  
                },
                {
                  name: 'data structures',
                },
                {
                    name: 'software design',
                  }
              
              ],
              
            },
            {
              name: 'Communication',
            },
            {
                name: 'Teamwork',
                children:[
                    {
                        name:"Share ideas"
                    },
                    {
                        name:"Work towards"
                    }
                ]
              },
              {
                name: 'Analytical',
              },
              {
                name: 'Creativity',
              },
              {
                name: 'Continuous Learning',
                children:[
                    {
                        name:"Tools",
                        
                    },
                    {
                      
                        name:"Technologies",
                     
                    },
                    {
                       
                        name:"up-to-date"
                    }
                ]
              },
          ],
        },
      ];
      
   
         
    return (
        <div>
            <div id="treeWrapper" className='hidden md:block' style={{height: '23em'}}>
          <Tree 
        data={myTreeData} 
         orientation="vertical"
         collapsible={false}
         translate={{
            x:600,
            y:50
          }}
        />
         </div>
         <div id="treeWrapper" className='block md:hidden lg:hidden' style={{height: '15em'}}>
          <Tree 
        data={myTreeData} 
         orientation="vertical"
         zoomable={true}
         zoom={0.5}
         collapsible={false}
         translate={{
            x:130,
            y:20
          }}
        />
         </div>
         <div className='card text-red-700  my-2 p-5 text-center'>
         <Marquee speed={50}>
         <p>Remember, these skills are not developed overnight. CSE students should continuously work on developing these skills and strive to improve themselves throughout their academic and professional careers(End).......</p>
       </Marquee>
         
         </div>
        </div>
    );
};

export default BecomeProgrammer;