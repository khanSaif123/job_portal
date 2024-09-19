import Header from "@/components/header"
import { Outlet } from "react-router-dom"


const AppLayout = () => {
  return (
    <div className="">
        <div className="grid-background"></div>
           <div className="px-24">
           <main className="min-h-screen container">
                <Header/>
                <Outlet/>
            </main>
           </div>
            <div className="p-10 text-center bg-gray-800 mt-10">
                Made with 💗 Mohd Saif Khan
            </div>  
        
        
    </div>
  )
}

export default AppLayout