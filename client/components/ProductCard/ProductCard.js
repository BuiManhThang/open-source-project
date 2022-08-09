import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { convertPrice } from '../../js/commonFn'
import { useCart } from '../../hooks/cartHook'
import Img from '../../assets/images/sign-in-background.jpg'

const ProductCard = ({ name, image, price, _id }) => {
  const formattedPrice = convertPrice(price)
  const url = `/products/${_id}`

  const { addProduct } = useCart()

  const addToCart = (e) => {
    e.preventDefault()
    addProduct(_id)
  }

  return (
    <div className="group w-full rounded-xl overflow-hidden shadow-[0_0_5px_0px_rgba(0,0,0,0.15)] cursor-pointer hover:shadow-[0_0_15px_3px_rgba(0,0,0,0.15)] transition-all">
      <Link href={url}>
        <div>
          <div className="relative w-full h-64">
            <Image
              className="object-cover object-center group-hover:scale-125 transition-all duration-300"
              layout="fill"
              src={image || Img}
            />
          </div>
          <div className="text-left px-2 flex items-center justify-between">
            <div>
              <div className="mt-2 font-medium text-sm">{name}</div>
              <div className="mb-2 text-sm">Giá từ: {formattedPrice}</div>
            </div>
            <div
              className="relative flex items-center px-2 py-2 bg-primary gap-x-2 rounded-lg overflow-hidden
                before:absolute before:w-[200%] before:h-[400%] before:bg-[rgba(255,255,255,0.2)] before:rotate-45 before:left-[45%] before:top-[-300%] before:transition-all before:duration-300
                hover:before:left-[-80%]"
              onClick={addToCart}
            >
              <span className="text-white font-medium text-xs">Thêm vào giỏ hàng</span>
              <div className="text-white text-base leading-none">
                <i className="fa-solid fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
