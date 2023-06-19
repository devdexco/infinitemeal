import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full  items-center justify-between p-24 ">
      <div className='grid grid-cols-2 '>
        <div className=''>
          <Image src="/pizza.jpg" width={400} height={400}/>
        </div>
        <div>
          <h1 className='text-white/50 text-5xl mx-auto'>
            Dive into the magical world of Recipes
          </h1>
        </div>

      </div>
    </main>
  )
}
