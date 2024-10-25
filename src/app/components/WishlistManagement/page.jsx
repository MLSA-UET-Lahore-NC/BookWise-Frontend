"use client"
import React from 'react'
import { ImCross } from "react-icons/im";
import { useState } from 'react';

function page() {

    const removeBook = (data) =>{
        let updatedList = books.filter((val)=> val !== data)
        setBooks(updatedList)
    }



    const [books, setBooks] = useState([
        {
          image: "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg",
          title: "Becoming",
          price: "$11.89"
        },
        {
          image: "https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg",
          title: "1984",
          price: "$9.99"
        },
        {
          image: "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg",
          title: "Where the Crawdads Sing",
          price: "$15.60"
        },
        {
          image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
          title: "The Alchemist",
          price: "$8.99"
        },
        {
          image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
          title: "The Silent Patient",
          price: "$12.79"
        },
        {
          image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
          title: "Atomic Habits",
          price: "$16.20"
        },
        {
          image: "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg",
          title: "Sapiens: A Brief History of Humankind",
          price: "$14.29"
        },
        {
          image: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg",
          title: "Can't Hurt Me",
          price: "$20.99"
        }
      ]);
      
  return (
    <>
        <h1 className='text-white my-5 text-center font-bold text-4xl mb-10'>My Wish List</h1>
        <div class="relative overflow-x-auto text-white mx-10 h-[32rem] ">
            <table class="w-full text-sm text-left rtl:text-right text-white">
                <thead class="text-white uppercase border-b-4 text-xl">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                        THUMBNAIL
                        </th>
                        <th scope="col" class="px-6 py-3">
                        TITLE
                        </th>
                        <th scope="col" class="px-6 py-3">
                        PRICE
                        </th>
                        <th scope="col" class="px-6 py-3">
                        ADD TO CART
                        </th><th scope="col" class="px-6 py-3">
                        REMOVE
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((val, i)=>{
                        return(
                        <tr class="border-b ">
                        <th scope="row" class="px-6 py-4 font-medium">
                           <img src={val.image} className='h-24' alt="" />
                        </th>
                        <td class="px-6 py-4">
                            {val.title}
                        </td>
                        <td class="px-6 py-4 ps-9">
                            {val.price}
                        </td>
                        <td class="px-6 py-4">
                            <div className='ps-4'>
                                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add to cart</button>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div className='flex ps-10 text-2xl cursor-pointer' onClick={()=>{
                                removeBook(val)
                            }}>
                                <ImCross className=''/>
                            </div>
                        </td>
                    </tr>
                    )
                    })
                    }
                    
                </tbody>
            </table>
        </div>

    </>
  )
}

export default page