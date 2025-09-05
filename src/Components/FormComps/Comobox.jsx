import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

const Languages = [
    { id: 1, name: 'ქართული', selected: true },
    { id: 2, name: 'ინგლისური', selected: false },
    { id: 3, name: 'რუსული', selected: false },
    { id: 4, name: 'ფრანგული', selected: false },
    { id: 5, name: 'გერმანული', selected: false },
    { id: 6, name: 'ესპანური', selected: false },
    { id: 7, name: 'იტალიური', selected: false },
    { id: 8, name: 'პორტუგალიური', selected: false },
    { id: 9, name: 'ჩინური', selected: false },
    { id: 10, name: 'იაპონური', selected: false },
    { id: 11, name: 'არაბული', selected: false },
    { id: 12, name: 'თურქული', selected: false },
    { id: 13, name: 'ჰინდი', selected: false },
    { id: 14, name: 'კორეული', selected: false },
    { id: 15, name: 'უკრაინული', selected: false },
    { id: 16, name: 'პოლონური', selected: false },
    { id: 17, name: 'ნიდერლანდური', selected: false },
    { id: 18, name: 'შვედური', selected: false },
    { id: 19, name: 'ნორვეგიული', selected: false },
    { id: 20, name: 'ფინური', selected: false },
    { id: 21, name: 'დანიელი', selected: false },
    { id: 22, name: 'ბერძნული', selected: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Lcomobox() {
  const [query, setQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [boxopened,setboxopened] = useState(false)
  function openbox() {
    setboxopened(!boxopened);
  }  
  const filteredLanguages =
    query === ''
      ? Languages
      : Languages.filter((Language) => {
          return Language.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
<div className="relative w-full md:w-52 ">
    <div
        className={classNames(
            "border rounded-[10px] px-4 py-2 flex justify-between items-center cursor-pointer",
            boxopened ? "border-blue-500" : "border-gray-300"
        )}
        onClick={openbox}
    >
        <span>
            {selectedLanguage ? selectedLanguage.name : "აირჩიეთ ენა"}
        </span>
        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
    </div>
    {boxopened && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-[10px] shadow-lg z-10 ring-1 overflow-hidden">
            <input
                spellCheck={false}
                className="appearance-none  border-none w-full px-4 py-2 ring-transparent rounded-t-[10px] focus:ring-0 "
                placeholder="ძებნა..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <div className=' max-h-[300px] overflow-y-auto'>
                {filteredLanguages.length === 0 ? (
                    <div className="px-4 py-2 text-gray-500">ვერ მოიძებნა</div>
                ) : (
                    filteredLanguages.map(lang => (
                        <div
                            key={lang.id}
                            className={classNames(
                                "px-4 py-2 cursor-pointer flex justify-start items-center",
                                selectedLanguage && selectedLanguage.id === lang.id
                                    ? "bg-blue-100"
                                    : "hover:bg-gray-100"
                            )}
                            onClick={() => {
                                setSelectedLanguage(lang)
                                setboxopened(false)
                                setQuery('')
                            }}
                        >
                            
                            {selectedLanguage && selectedLanguage.id === lang.id ? (
                              <div className='h-[20px] w-[20px] rounded-full bg-blue-300 flex items-center justify-center'> 
                              <div className='h-[14px] w-[14px] rounded-full bg-blue-500 flex items-center justify-center'> 
                              
                            </div>
                            </div>
                            ):
                            (<div className='h-[20px] w-[20px] rounded-full bg-gray-200 flex items-center justify-center'> 
                              <div className='h-[14px] w-[14px] rounded-full bg-gray-300 flex items-center justify-center'> 
                              
                            </div>
                            </div>)
                            }
                            <span className='ml-3' >{lang.name}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    )}
</div>
  )
}
