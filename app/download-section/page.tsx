"use client"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button";
import Link from "next/link"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input } from "@/components/ui/input"

const DownloadSection = ()=>{
    const [code, setCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const checkCode = () => {
      setErrorMessage('');
      if (code === '123456') {
        
        // router.push('/download');
        window.location.href = ' https://drive.google.com/drive/folders/1WwKAIxTexDBc7fazmjYvktDTxtUNisn8?usp=sharing  ';
      } else {

        setErrorMessage('Kode yang dimasukkan salah. Silakan coba lagi.');
      }
    };
  
  
    return(
    <section className="md:py-20 py-10 md:px-20 px-5  ">
        <div className=" text-center">
            <div className="sm:text-6xl text-5xl flex justify-center font-bold md:px-20 pb-10 text-gradient bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Aplikasi Manajemen Pertanian Berbasis Teknologi
            </div>
            <p className="text-lg md:text-xl md-10  bg-gradient-to-r from-black to-green-500 bg-clip-text text-transparent dark:text-white font-bold">Unduh aplikasi TaniLand untuk pengalaman terbaik dalam pertanian.</p>
            <div className=" flex gap-4 justify-center pt-10 ">
     <Dialog>
      <DialogTrigger asChild>
      <Link href="/download" className="bg-primary text-white  px-10 py-4 rounded-md text-lg font-bold">Unduh Sekarang</Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Masukkan Kode Akses:</DialogTitle>
          <DialogDescription>
          Aplikasi kami saat ini sedang dalam tahap closed testing (alpha).
          <div>Masukkan Kode untuk Download Aplikasi</div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-start space-x-2">
          <div className="grid flex-1 gap-2">
            {/* <Label htmlFor="link" className="sr-only">
              Link
            </Label> */}
           <Input  onChange={(e) => setCode(e.target.value)} className="py-2" placeholder="Masukkan kode"  value={code} />
      {errorMessage && <p style={{ color: 'red' }} className="text-sm ">{errorMessage}</p>}
          </div>
          <Button type="submit" size="sm" onClick={checkCode} className="px-3">
            <span className="">Verifikasi</span>
           
          </Button>
        </div>
        <div>
        Coba Pengalaman UI kami <Link href ="https://www.figma.com/proto/9x5kyTtfBZ2iltuHcHg0rh/update-Prototype?type=design&node-id=1901-7231&t=seTq11UxfXER2HMy-1&scaling=scale-down&page-id=421%3A4402&starting-point-node-id=1901%3A7213&show-proto-sidebar=1&mode=design"className="text-primary ">disini</Link> 
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

               
                <Link href="https://www.instagram.com/taniland.co" className="bg-secondary px-10 py-4 rounded-md text-lg font-bold">Join Our Community</Link>

            </div>
            {/* <div className="pt-10">
            <Image className="rounded-xl  " src="/content/landscape.jpg" layout="responsive"  width={100}   height={400} objectFit="cover" alt="logo" />
            </div>
            <div className="text-3xl bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent font-bold pt-5">
            #Growing Together, greening the future
            </div> */}
        </div>
           
           
    </section>
    )

}

export default DownloadSection;