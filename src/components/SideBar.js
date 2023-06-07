
import React, { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SideBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className=''>
      <div className='bg-green-500 py-3 fixed top-0 left-0 inset-x-0 right-0 shadow-md'>
        <button className='ml-4 text-white' onClick={() => setOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>

      <div className={`${open ? "w-80" : "w-0"} bg-green-500 min-h-screen fixed top-0 left-0 transition-all duration-300`}>
        <div className={`${!open && "hidden"} pt-3`}>
          
          <button className='ml-4 text-white mb-14' onClick={() => setOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>          
          
          <div className="font-sans justify-center text-xl" >
            <Menu as="div" >
              <div>
                <Menu.Item className="no-underline inline-flex w-full justify-center gap-x-1.5 rounded-md bg-green-500 px-3 py-2 text-white font-medium ring-1 ring-inset ring-green-500 hover:bg-green-600 ">
                  {({ active }) => (<a href="/Eva" >                    
                    Evaluaciones
                  </a>
                  )}
                </Menu.Item>
              </div>
            </Menu>

            <Menu as="div" >
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-green-500 px-3 py-2 text-white font-medium ring-1 ring-inset ring-green-500 hover:bg-green-600 ">
                  Informes-Reportes
                  <ChevronDownIcon className="-mr-1 h-6 w-6 text-white-400" aria-hidden="true" />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="">
                    <div className="py-1">
                      <Menu.Item className="rounded-md text-align:center">
                        {({ active }) => (<a href="/Evaluaron" className={classNames(active ? 'bg-gray-100 text-black no-underline' : ' no-underline text-white','block px-4 py-2 ')}>                    
                            Evaluaron
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (<a href="/IRCuantitativos" className={classNames(active ? 'bg-gray-100 text-black no-underline' : ' no-underline text-white','block px-4 py-2 ')}>
                            Informe Resultados Cuantitativos
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (<a href="/" className={classNames(active ? 'bg-gray-100 text-black no-underline' : ' no-underline text-white','block px-4 py-2 ')}>
                            Informe Resultados Cualitativos u Observaciones (Docentes)
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </div>
            </Menu>

            <Menu as="div" >
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-green-500 px-3 py-2 text-white font-medium ring-1 ring-inset ring-green-500 hover:bg-green-600 ">
                  Informes Directivos
                  <ChevronDownIcon className="-mr-1 h-6 w-6 text-white-400" aria-hidden="true" />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="">
                    <div className="py-1">
                      <Menu.Item className="rounded-md text-align:center">
                        {({ active }) => (<a href="/Evaluaron" className={classNames(active ? 'bg-gray-100 text-black no-underline' : ' no-underline text-white','block px-4 py-2 ')}>                    
                            Evaluaron
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (<a href="/IRCuantitativos" className={classNames(active ? 'bg-gray-100 text-black no-underline' : ' no-underline text-white','block px-4 py-2 ')}>
                            Informe Resultados Cuantitativos
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (<a href="/" className={classNames(active ? 'bg-gray-100 text-black no-underline' : ' no-underline text-white','block px-4 py-2 ')}>
                            Informe Resultados Cualitativos u Observaciones '(Docentes)'
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </div>
            </Menu>


            <Menu as="div" className="" >
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-green-500 px-3 py-2 text-white font-medium ring-1 ring-inset ring-green-500 hover:bg-green-600 ">
                  Gestion
                  <ChevronDownIcon className="-mr-1 h-6 w-6 text-white-400" aria-hidden="true" />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (<a href="/Cuestionarios" className={classNames(active ? 'bg-gray-100 text-black no-underline' : 'no-underline text-white','block px-4 py-2 ')}>                    
                            Cuestionarios
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (<a href="/InformeCuantitativo" className={classNames(active ? 'bg-gray-100 text-black no-underline' : ' no-underline text-white','block px-4 py-2 ')}>
                            Informe Cuantitativo
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (<a href="/" className={classNames(active ? 'bg-gray-100 text-black no-underline' : 'no-underline text-white','block px-4 py-2 ')}>
                            Categorias de Preguntas
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (<a href="/" className={classNames(active ? 'bg-gray-100 text-black no-underline' : 'no-underline text-white','block px-4 py-2 ')}>
                            Base de Preguntas
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (<a href="/" className={classNames(active ? 'bg-gray-100 text-black no-underline' : 'no-underline text-white','block px-4 py-2 ')}>
                            Grupos Persona
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </div>
            </Menu>
          </div>
        </div>
      </div>
    
    </div>
  )
}
export default SideBar

/*
const SideBar = () => {
  const [open, setOpen] = useState(false)
  return (
          <div className='bg-green-500 py-3 fixed top-0 left-0 right-0 shadow-md'>
      <button className='ml-4' onClick={() => setOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>

      <div className={`${open ? "w-80" : "w-0"} bg-green-500 min-h-screen fixed top-0 left-0 transition-all duration-300`}>
        <div className={`${!open && "hidden"} pt-3`}>
          
          <button className='ml-4 text-white mb-14' onClick={() => setOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

    <div>  
      <Menu as="div" className="relative inline-block text-left" >



        <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-green-500 px-3 py-2 text-sm text-white font-semibold ring-1 ring-inset ring-green-500 hover:bg-gray-50 ">
              Informes-Reportes
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
          

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a href="/InfoDirectivos" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>                    
                        Evaluaciones
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (<a href="/" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                        Informe Resultados Cuantitativos
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (<a href="/" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                        Informe Resultados Cualitativos u Observaciones '(Docentes)'
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
        </div>

      </Menu>
              </div>
        </div>
       </div> 
    </div>
  )
}

export default SideBar*/