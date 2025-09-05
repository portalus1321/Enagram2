import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
    MicrophoneIcon,
    CheckIcon,
    ArrowRightIcon,
    EllipsisHorizontalIcon
} from '@heroicons/react/24/outline'
import { SpellingIcon, TextCompIcon, SpeechIcon, PdfIcon } from '../../Components/SvgIcons'

import EnagramLogo from "../../Components/Images/EnagramLogo.png"

const navigation = [
    { name: 'მართლმწერი', href: '#', icon: SpellingIcon, current: false },
    { name: 'ტექსტის შედარება', href: '#', icon: TextCompIcon, current: true },
    { name: 'ხმა', txt2: 'ტექსტი', divisor: ArrowRightIcon, href: '#', icon: MicrophoneIcon, current: false },
    { name: 'ტექტი', txt2: 'ხმა', divisor: ArrowRightIcon, href: '#', icon: SpeechIcon, current: false },
    { name: 'PDF კონვერტაცია', href: '#', icon: PdfIcon, current: false },
]
const user = { name: 'თამარ ონიანი', imgurl: null }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>

            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#132450] px-[25px] pb-2 ring-1 ring-white/10">
                                        <div className="flex h-16 shrink-0 items-center">
                                            <a
                                                href="#"
                                                className="flex w-full relative items-center gap-x-4 mt-3 py-4 text-sm font-semibold leading-6 text-white "
                                            >
                                                {user.imgurl ? (
                                                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">

                                                        <img
                                                            className="h-7 w-7 rounded-full bg-gray-800"
                                                            src={user.imgurl}
                                                            alt=""
                                                        />
                                                    </div>

                                                ) :

                                                    (
                                                        <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                                                            <div className="h-7 w-7 rounded-full bg-blue-300 flex items-center justify-center text-sm text-gray-900 leading-[12px]">
                                                                <div>თ</div>
                                                            </div>
                                                        </div>
                                                    )}

                                                <span className="sr-only">Your profile</span>
                                                <span aria-hidden="true">{user.name}</span>
                                                <div className='absolute w-[25px] h-[25px] right-3 flex items-center justify-center'><EllipsisHorizontalIcon /></div>
                                            </a>
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul role="list" className="-mx-2 space-y-1">
                                                        {navigation.map((item) => (
                                                            <li key={item.name} className='group' >
                                                                <a
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        item.current
                                                                            ? 'bg-white text-[#132450]'
                                                                            : 'text-white hover:text-white  hover:bg-white group-hover:text-[#132450]',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <item.icon aria-hidden="true"
                                                                        className={classNames(
                                                                            item.current
                                                                                ? 'text-[#132450]'
                                                                                : 'text-white hover:text-[#132450] group-hover:text-[#132450]',
                                                                            'h-6 w-6 shrink-0 '
                                                                        )}

                                                                    />
                                                                    {item.name}
                                                                    {item.txt2 && (
                                                                        <div className='flex  items-center left-0 text-xs '>
                                                                            <item.divisor

                                                                                className={classNames(
                                                                                    item.current
                                                                                        ? ' text-[#132450]'
                                                                                        : 'text-white hover:text-[#132450] group-hover:text-[#132450]',
                                                                                    'relative h-4 w-4 stroke-[3] mr-1 text-[#132450]'
                                                                                )}

                                                                            />
                                                                            <div

                                                                                className={classNames(
                                                                                    item.current
                                                                                        ? ' text-[#132450]'
                                                                                        : 'text-white hover:text-[#132450] group-hover:text-[#132450]',
                                                                                    'ml-3 text-[#132450]'
                                                                                )}
                                                                            >
                                                                                {item.txt2}
                                                                            </div>

                                                                        </div>
                                                                    )}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>

                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <div className="hidden h-screen lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#132450] pt-5">
                        <div className="flex h-[60px] shrink-0 items-center ml-6 my-5">
                            <img
                                className="h-[50px] w-auto"
                                src={EnagramLogo}
                                alt="Your Company"
                            />
                            <a className='text-white ml-[10px]'>ENAGRAM</a>
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className=" right-0 space-y-1 ml-3">
                                        {navigation.map((item) => (
                                            <li key={item.name} className='relative group' >
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-white text-[#132450] rounded-l-full'
                                                            : 'text-white hover:text-[#132450]  rounded-l-full',
                                                        'group hover:z-[10] flex gap-x-3 rounded-md h-[60px] p-2 text-lg leading-6 font-semibold items-center z-[1]'
                                                    )}
                                                >
                                                    <item.icon className="h-6 w-6 shrink-0 ml-3 group-hover:text-[#132450] z-[10] " aria-hidden="true" />
                                                    <div className='relative z-20'>
                                                        {item.name}
                                                    </div>
                                                    {item.txt2 && (
                                                        <div className='flex  items-center left-0 text-xs '>
                                                            <item.divisor
                                                                className={classNames(
                                                                    item.current
                                                                        ? ' text-[#132450]'
                                                                        : ' hover:text-[#132450] ',
                                                                    'relative text-white group-hover:text-[#132450] z-10 h-4 w-4 stroke-[3] mr-1'
                                                                )}
                                                            />
                                                            <div
                                                                className={classNames(
                                                                    item.current
                                                                        ? ' text-[#132450]'
                                                                        : ' hover:text-[#132450] ',
                                                                    'ml-3 text-lg text-white group-hover:text-[#132450] z-10'
                                                                )}
                                                            >
                                                                {item.txt2}
                                                            </div>

                                                        </div>
                                                    )}
                                                    <div className='absolute opacity-0 top-[0] right-0 h-[60px] w-full z-[2] group-hover:opacity-100 pr-1'>
                                                        <div className='relative w-full h-[60px] bg-white top-[0px] right-[0px] rounded-l-[30px] rounded-r-[17px]'></div>

                                                    </div>

                                                    {item.current && (
                                                        <div className='absolute bg-white -top-[20px] right-0 h-[100px] w-[20px] z-[0]'>
                                                            <div className='absolute w-[40px] h-[40px] bg-[#132450] -top-[20px] -left-[20px] rounded-full'></div>
                                                            <div className='absolute w-[40px] h-[40px] bg-[#132450] -bottom-[20px] -left-[20px] rounded-full'></div>
                                                        </div>
                                                    )}

                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                <li className=" mt-auto">
                                    <hr className='h-[2px] bg-[#9eb9ff33] border-0' />
                                    <a
                                        href="#"
                                        className="flex relative items-center gap-x-4 px-3 py-4 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                                    >
                                        {user.imgurl ? (
                                            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">

                                                <img
                                                    className="h-7 w-7 rounded-full bg-gray-800"
                                                    src={user.imgurl}
                                                    alt=""
                                                />
                                            </div>

                                        ) :

                                            (
                                                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                                                    <div className="h-7 w-7 rounded-full bg-blue-300 flex items-center justify-center text-sm text-gray-900 leading-[12px]">
                                                        <div>თ</div>
                                                    </div>
                                                </div>
                                            )}

                                        <span className="sr-only">Your profile</span>
                                        <span aria-hidden="true">{user.name}</span>
                                        <div className='absolute w-[25px] h-[25px] right-3 flex items-center justify-center'><EllipsisHorizontalIcon /></div>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="sticky top-0 z-40 flex items-center gap-x-1 bg-[#132450] px-[25px] py-4 shadow-sm sm:px-6 lg:hidden">


                    <a href="#">
                        <img
                            className="h-8 w-auto"
                            src={EnagramLogo}
                        />
                    </a>
                    <div className="flex-1  font-semibold leading-6 text-white flex justify-start text-[10px]">ENAGRAM</div>
                    <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>

                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray h-[60px] shadow-sm sm:px-6 lg:hidden">
                    <ul role="list" className=" right-0  w-full">
                        {navigation.map((item) => (
                            <li key={item.name} className='relative group' >
                                {item.current && (
                                    <div className='relative  right-0 h-[60px] w-full flex items-center z-[0]'>
                                        <item.icon className="h-6 w-6 shrink-0 ml-[25px] group-hover:text-[#132450] z-[10] " aria-hidden="true" />
                                        <div className='relative z-20 ml-3 font-extrabold'>
                                            {item.name}
                                        </div>
                                    </div>
                                )}
                            </li>))}
                    </ul>

                </div>
                <hr />
            </div>
        </>
    )
}
