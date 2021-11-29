import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className = "py-1.5 flex w-screen pl-5 text-3xl bg-green-500"> 
          <h1>Cookie Stand Admin</h1>
        </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center bg-green-100">
      <form className= "w-9/12 h-40 bg-green-300 ">
        <legend>Cookie Stand Admin</legend>
        <label className= "">Location</label>
        <input className="w-10/12"></input>
        <div className="flex justify-center text-xs ">
        <label className = "">Min. Customer per hour</label>
        <label>Max. Customer per hour</label>
        <label>Average Cookie per Sale</label>
        
        <input></input>
        <input></input>
        <input></input>
        <button className="bg-green-500">Create</button>
        </div>
      </form>

      </main>

      <footer className="flex items-center justify-center w-full ">
        
          <h3 className = "py-1.5 w-screen pl-5 text-2xl bg-green-600">@2021</h3>
        
      </footer>
    </div>
  )
}
