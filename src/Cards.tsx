import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import React from 'react';
import Editcard from './Editcard';


function Cards(props: any) {

  function handleClick(_Editcheck: any): void {
    throw new Error('How to loose your patience in 1 min..');
  }
  
  

  // ---------------------------------------------------------

  // const CardDetail = props. any;

  // const [Userdetail, setUserdetail] = useState(!!CardDetail)

  // const handleEditClick = async (id: any,isCardedit: (props: any) => void) => {
  //   if (isCardedit()) {
  //     await createCardDetail(id)()
  //     setCarddetail(true)
  //   } else {
  //     await deleteCardDetail(id)()
  //     if (setCarddetail) {
  //       setReloadData(!reloadData)
  //     } else setCardedit(!isCardedit)
  //   }
  // }
  // ----------------------------------------------------------
  return (
    <div>
      <li key={props.user.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div className="w-full flex items-center justify-between p-6 space-x-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="text-gray-900 text-sm font-medium truncate">{props.user.first_name} {props.user.last_name}</h3>
              <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                {props.user.employment.key_skill}
              </span>
            </div>
            <p className="mt-1 text-gray-500 text-sm truncate">{props.user.employment.title}</p>
          </div>
          <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={props.user.avatar} alt="" />
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="w-0 flex-1 flex">
              <a
                href={`mailto:${props.user.email}`}
                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                <span className="ml-3">Email</span>
              </a>
            </div>
            <div className="-ml-px w-0 flex-1 flex">
              <a
                href={`tel:${props.user.phone_number}`}
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                <span className="ml-3">Call</span>
              </a>
            </div>
            <div className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                <div>
                <span className="inline-flex rounded-md shadow-sm">
                    <button>
                      <svg className="w-6 h-6" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => handleClick(props.user.id, users)}
                        >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                        <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path>
                      </svg>
                    </button>
                </span>
                </div>
              </a>
            </div>
          </div>
        </div>

      </li>
    </div>
  )
}
export default Cards;


function handleClick(_id: any, _users: any): void {

  class Editcheck extends React.Component {

    handleClick(value: string) {
      return function() {
        console.log(value)
      }
    };
  
    render() {
      console.log('xxxxx')
      return <button onClick={this.handleClick('Editcard')}>Editcard</button>;
    }
  }
  // throw new Error('Function not implemented.');
}

function users(_id: any, _users: any): void {
  throw new Error('Function not implemented.');
}

