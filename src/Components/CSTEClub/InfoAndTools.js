import React from 'react';

const InfoAndTools = () => {
    return (
        <div className='max-w-screen mx-auto my-10'> 
        <h1 className='text-center my-10 text-3xl font-bold'>Information</h1>
            <div className='md:flex md:justify-around'>
            <div className='card1 my-2 md:w-1/4'>
                <h1 className='text-center font-bold text-lg'>TOOLS</h1>
                <hr></hr>
               <ul className='my-5'>
                <li>CODEBLOCKS</li>
                <li>VS CODE</li>
                <li>ANDRIOD STUDIO</li>
                <li>LIME</li>
                
               </ul>
            </div>
            <div className='card1 my-2 md:w-1/4'>
                <h1 className='text-center font-bold text-lg'>ONLINE JUDGE</h1>
                <hr></hr>
               <ul className='my-5'>
                <li className='text-blue-700 hover:text-green-700'><a href='https://www.beecrowd.com.br/judge/en/login'>BEECROWD</a></li>
                <li className='text-blue-700 hover:text-green-700'><a href='https://atcoder.jp/'>ATCODER</a></li>
                <li className='text-blue-700 hover:text-green-700'><a href='https://codeforces.com/'>CODEFORCES</a></li>
                <li className='text-blue-700 hover:text-green-700'><a href='https://www.codechef.com/'>CODECHEF</a></li>
                <li className='text-blue-700 hover:text-green-700'><a href='https://lightoj.com/'>LIGHTOJ</a></li>
               </ul>
            </div>
            <div className='card1 my-2 md:w-1/4'>
                <h1 className='text-center font-bold text-lg'>RESOURCE</h1>
                <hr></hr>
               <ul className='my-5'>
                <li className='text-green-700 hover:text-blue-700'><a href='https://www.w3schools.com/'>W3SCHOOL</a></li>
                <li className='text-green-700 hover:text-blue-700'><a href='https://www.youtube.com/@anisul-islam'>ANISUL ISLAM</a></li>
                <li className='text-green-700 hover:text-blue-700'><a href='https://www.programming-hero.com/'>PROGRAMMING HERO</a></li>
                <li className='text-green-700 hover:text-blue-700'><a href='https://learnwithsumit.com/'>LEARN WITH SUMIT</a></li>
               </ul>
            </div>
        </div>
        </div>
    );
};

export default InfoAndTools;