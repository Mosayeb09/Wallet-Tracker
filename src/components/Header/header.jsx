import { SignedOut, SignedIn, UserButton, SignInButton } from '@clerk/nextjs'
import { Link } from 'lucide-react'
import React from 'react'

export default function header() {
  return (
    <div className='flex top-0'>

      <nav>
        <Link href='/'>
          <Image 
          src={"/logo_wallet.png"}
          alt="Wallet Logo" 
          width={60} 
          height={200}
          className="h-12 w-auto object-contain" 
          />
        </Link>
      </nav>


       <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
    </div>
  )
}
