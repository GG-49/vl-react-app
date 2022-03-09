import { useState } from 'react'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import Modal from './Modal'

export const Cards = ({ user }: any) => {
  const [showModal, setShowModal] = useState(false)

  // const [userUpdate, setUserUpdate] = useState(false)
  
  return (
    <div>
      <li key={user.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div className="w-full flex items-center justify-between p-6 space-x-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="text-gray-900 text-sm font-medium truncate">{user.first_name} {user.last_name}</h3>
              <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                {user.employment.key_skill}
              </span>
            </div>
            <p className="mt-1 text-gray-500 text-sm truncate">{user.employment.title}</p>
          </div>
          <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={user.avatar} alt="" />
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="w-0 flex-1 flex">
              <a
                href={`mailto:${user.email}`}
                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                <span className="ml-3">Email</span>
              </a>
            </div>
            <div className="-ml-px w-0 flex-1 flex">
              <a
                href={`tel:${user.phone_number}`}
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
                    <button onClick={() => (setShowModal(true))}>
                      <svg className="Openedit w-6 h-6" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
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
        {showModal && <Modal showModal={showModal} setShowModal={setShowModal} 
          userId={user.id}
          firstName={user.first_name} 
          lastName={user.last_name}
          eMail={user.email}
          phoneNumber={user.phone_number} 
          user={user}
        />}
      </li>
  
    </div>
  )
}
export default Cards;


