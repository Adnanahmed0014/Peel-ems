"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { getSizeName } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  product: SanityProduct
}

export function ProductInfo({product}: Props) {

  const etsyLink = 'https://www.etsy.com/shop/Peelems';
  const cowLink = 'https://www.etsy.com/listing/1495983253/eid-mubarak-cow-eid-stickers-set-of-10?click_key=9d40a10e00a992b5a30eaed8a79acf9280190886%3A1495983253&click_sum=5dbf581c&ref=shop_home_active_7';
  const weddingsLink = 'https://www.etsy.com/listing/1495988595/elegant-digital-card-for-muslim-weddings?click_key=6e1a3f26d657721fe5aac27e32ec114c3dee9066%3A1495988595&click_sum=616bede8&ref=shop_home_active_6';
  const soccerLink = 'https://www.etsy.com/listing/1497316613/holographic-soccer-ball-sticker-set-of-5?click_key=d0948eaabe587c20c840c402462f23618e6ec499%3A1497316613&click_sum=fa6a1112&ref=shop_home_active_5';
  const basketballLink = 'https://www.etsy.com/listing/1502102319/holographic-basketball-sticker-set-of-5?click_key=0e1d1a66ec93f88e04213e9540b7c029732fec70%3A1502102319&click_sum=818b1f86&ref=shop_home_active_4';
  const sheepLink = 'https://www.etsy.com/listing/1479017982/eid-mubarak-sticker-set-of-10-sheep?click_key=de95748e2620ae2b2c2b74f2bc55af5ee04fd243%3A1479017982&click_sum=0f8b8ae7&ref=shop_home_active_3';
  const goatLink = 'https://www.etsy.com/listing/1495216983/goat-sticker-set-of-8-new-eid-mascot?click_key=cb9de75ede4aa6146f4a6d3fafb9725ea3033a39%3A1495216983&click_sum=a3bbb70a&ref=shop_home_active_2';
  const moonLink = 'https://www.etsy.com/listing/1481788176/eid-mubarak-sticker-set-of-10-custom?click_key=5ee78b2e00263afdfdeca60357fd6391f084523a%3A1481788176&click_sum=d154243c&ref=shop_home_active_1';


  { /* const [selectedSize, setSelectedSize] = useState(product.sizes[0]) */}
  const {addItem, incrementItem, cartDetails} = useShoppingCart()
  const { toast } =  useToast()
  const isInCart = !!cartDetails?.[product._id]


  function addToCart() {

    const item = {

      ...product, 
      product_data: {
        //size: selectedSize
      }

    }
    isInCart ? incrementItem(item._id) : addItem(item)
    toast({
      title: `${item.name}`, 
      description: "Product added to cart", 
      action: (
        <Link href='/cart'>
          <Button variant="link" className="gap-x-2 whitespace-nowrap"> 
            <span>Open cart</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      )
    })

    /*
    toast({
      title: `${item.name} (${getSizename(selectedSize)})`, 
      description: "Product added to cart", 
      action: (
        <Link href='/cart'>
          <Button variant="link" className="gap-x-2 whitespace-nowrap"> 
            <span>Open cart</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      )
    })
    */ 
  }

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">${product.price}</p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{product.description}</div>
      </div>

      <div className="mt-4">
        <p>
          { /* Size: <strong>{getSizeName(selectedSize)}</strong> */}
          
        </p>
        { 
          /*
            {product.sizes.map((size) => (
          <Button onClick={() => setSelectedSize(size)} key={size} variant="{selectedSize === size ? 'default' : 'outline'}" className="mr-2 mt-4">
            {getSizeName(size)}
          </Button>
        ))}
          */ 
        }
    
      </div>

     { 
     /*
      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
            type="button"
            className="w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Add to cart
          </Button>
        </div>
      </form>
      */
      }
    
        {/* 
        
        <a href="https://www.etsy.com/shop/Peelems" target="_blank" rel="noopener noreferrer">
          <Button
            type="button"
            className="w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
            View on Etsy
          </Button>
        </a>
        
        */}
          

        
      {/* RENDERING FOR 7 DIFFERENT PRODUCTS */}


      <div>
      {product.name === 'Eid Mubarak - Cow Sticker' ? (
        <a href={cowLink} target="_blank" rel="noopener noreferrer">
          <Button
            type="button"
            className="w-full bg-blue-600 py-6 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View on Etsy
          </Button>
        </a>
      ) : product.name === 'Digital Card for Muslim Weddings' ? (
        <a href={weddingsLink} target="_blank" rel="noopener noreferrer">
          <Button
            type="button"
            className="w-full bg-blue-600 py-6 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View on Etsy
          </Button>
        </a>
      ) : product.name === 'Holographic Soccer ball Sticker' ? (
        <a href={soccerLink} target="_blank" rel="noopener noreferrer">
          <Button
            type="button"
            className="w-full bg-blue-600 py-6 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View on Etsy
          </Button>
        </a>
      ) : product.name === 'Holographic Basketball Sticker' ? (
        <a href={basketballLink} target="_blank" rel="noopener noreferrer">
          <Button
            type="button"
            className="w-full bg-blue-600 py-6 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View on Etsy
          </Button>
        </a>
      ) : product.name === 'Eid Mubarak - Sheep Sticker' ? (
        <a href={sheepLink} target="_blank" rel="noopener noreferrer">
          <Button
            type="button"
            className="w-full bg-blue-600 py-6 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View on Etsy
          </Button>
        </a>
      ) : product.name === 'Goat Sticker' ? (
        <a href={goatLink} target="_blank" rel="noopener noreferrer">
          <Button
            type="button"
            className="w-full bg-blue-600 py-6 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View on Etsy
          </Button>
        </a>
      ) : (
        <a href={moonLink} target="_blank" rel="noopener noreferrer">
          <Button
            type="button"
            className="w-full bg-blue-600 py-6 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View on Etsy
          </Button>
        </a>
      )}
    </div>
    
    </div>
  )
}
