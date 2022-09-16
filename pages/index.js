import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FoodForm from '../Components/FoodForm'
import FoodCard from '../Components/FoodCard'
import { useState } from 'react'
export default function Home() {
  //todo: build a new other page each of the foods link to, get food data by id to populate it using 
  // https://api.spoonacular.com/recipes/{id}/information
  const [foodData, SetFoodData] = useState({})

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col justify-center items-center min-h-screen'>
        <div className='bg-slate-400 p-5 rounded-lg'>
          <FoodForm passData={SetFoodData}/>


        </div>
        { //if no data returned, display no food found
          foodData.result?.results.length < 1 ? <h2>No food found</h2> : 
          foodData.result?.results.map(food =>{
            return <FoodCard key={food.id} food={food} />
          })


        }
        




      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
