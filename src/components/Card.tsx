import Button from './Button'

export interface Props {

}

export const Card = ({...props}: Props) => {
    return (
        <div className="card w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 m-4 block bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
            <div className="relative pb-96 overflow-hidden">
                <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80" alt="" />
            </div>
            <div className="p-4 border-t border-b text-sm text-gray-700">
                <h2 className="mt-2 mb-2 font-bold">Title</h2>
                <p className="text-sm">Description</p>
                <div className="mt-3 flex items-center">
                    
                    <span className="text-sm font-semibold mr-1">
                        €
                    </span>
                    <span className="font-bold text-xl">
                        45,00
                    </span>
                </div>
            </div> 
            <div className="p-4 flex items-center text-sm text-gray-600 justify-between">
                <div className="info flex">
                    <p>4/5 Score</p>
                    <span className="ml-2">Category</span>
                </div>
                <div className="add-button">
                    <Button variant="primary">Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default Card