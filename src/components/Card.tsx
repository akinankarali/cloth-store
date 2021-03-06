import Button from './Button'
import Star from'../assets/star.png';

export interface Props {
  title: string
  description: string
  currency: '$' | '€' | '£'
  price: Number
  score: Number
  category: string
  isInCart: Boolean
  img: string
}

export const Card = ({ ...props }: Props) => {
  return (
    <div className="card w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 m-4 block bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
      <div className="relative pb-96 overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-contain"
          src={props.img}
          alt=""
        />
      </div>
      <div className="p-4 border-t border-b text-xl text-gray-700">
        <h2 className="mt-2 mb-2 font-bold line-clamp-2">{props.title}</h2>
        <p className="text-base line-clamp-3">{props.description}</p>
        <div className="mt-3 flex items-center">
          <span className="text-sm font-semibold mr-1">{props.currency}</span>
          <span className="font-bold text-xl">{props.price}</span>
        </div>
      </div>
      <div className="p-4 flex items-center text-sm text-gray-600 justify-between">
        <div className="info flex">
          <p>{props.score}</p>
          <img className="ml-1 w-4 h-4" src={Star} alt="" />
        </div>

        {!props.isInCart && (
          <div className="add-button">
            <Button variant="primary">Add to Cart</Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
