import './App.css';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MailIcon, MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline'
import Dashboard from './Dashboard';
import React from 'react';
// import EditCard from './EditCard'

const data = {
  first_name: 'Tom',
  last_name: 'Cook',
  email: 'tom@example.com',
  employment_title: 'The Boss',
  employment_skill: 'Admin',
  phone_number: '011 555 1234',
  avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
 }
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Cards', href: '#', current: false },
  { name: 'Modal', href: '#', current: false },
  { name: 'EditCard', href: '#', current: false },
]
const dataNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">

        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">User Data Dashboard</h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-8 sm:px-0">
                
                <Dashboard/>


              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
    );
}

export default App;