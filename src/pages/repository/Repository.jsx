import { useState } from 'react';
import Logo from '/logo.png';
import { Add, Book, BoxSearch, Call, Cloud, Code, Home, Logout, Refresh, Setting, Size } from 'iconsax-react';

const menuComponents = [
    {
        label: 'Repository',
        icon: Home
    },
    {
        label: 'AI Code review',
        icon: Code
    },
    {
        label: 'Cloud Security',
        icon: Cloud
    },
    {
        label: 'How to use',
        icon: Book
    },
    {
        label: 'Settings',
        icon: Setting
    },
]

const userControls = [
    {
        label: 'Support',
        icon: Call
    },
    {
        label: 'Logout',
        icon: Logout
    },
]

const repos = [
    {
        name: 'design-system',
        isPrivate: false,
        language: 'React.js',
        size: '7320',
        dateUpdated: '1 day'
    },
    {
        name: "task-manager",
        isPrivate: "true",
        language: "Python",
        size: "4820",
        dateUpdated: "3 days"
    },
    {
        name: "ecommerce-app",
        isPrivate: "false",
        language: "React.js",
        size: "10540",
        dateUpdated: "2 hours"
    },
    {
        name: "portfolio-site",
        isPrivate: "true",
        language: "HTML/CSS",
        size: "3200",
        dateUpdated: "1 month"
    },
    {
        name: "blog-engine",
        isPrivate: "false",
        language: "Ruby on Rails",
        size: "8630",
        dateUpdated: "6 days"
    },
    {
        name: "weather-dashboard",
        isPrivate: "false",
        language: "JavaScript",
        size: "5190",
        dateUpdated: "8 hours"
    },
    {
        name: "machine-learning-pipeline",
        isPrivate: "true",
        language: "Python",
        size: "15230",
        dateUpdated: "5 days"
    },
    {
        name: "chat-application",
        isPrivate: "false",
        language: "Node.js",
        size: "10850",
        dateUpdated: "12 hours"
    }
]

export default function Repository() {
    const [isActive, setIsActive] = useState("Repository");

    const handleActiveLink = (link) => {
        if (link === 'Logout') {
            window.location.href = '/';
        } else setIsActive(link);
    }

    return (
        <div className="w-full">
            {/* Left Container */}
            <div className="w-[20%] fixed flex flex-col justify-between p-6 h-screen bg-white border-r border-r-outline">
                <div>
                    {/* Branding */}
                    <div className='flex gap-x-3 w-fit mt-4 mx-auto items-center'>
                        <img src={Logo} alt="logo" className='h-7 w-7' />
                        <h1 className='text-lg'>CodeAnt AI</h1>
                    </div>

                    {/* Select User */}
                    <select className='mt-9 w-full py-3 px-4 rounded-2xl border-[1.75px] border-outline'>
                        <option value="select-value">Select User</option>
                        <option value="prathmesh-gaidhane">Prathmesh Gaidhane</option>
                    </select>

                    {/* Menu Components */}
                    <div className='grid mt-4'>
                        {menuComponents.map((items, index) => (
                            <div
                                key={index}
                                onClick={() => handleActiveLink(items.label)}
                                className={`w-full h-fit flex gap-x-3 items-center rounded-2xl p-4 cursor-pointer ${isActive === items.label ? 'bg-primary my-1 text-white' : 'hover:bg-light text-black bg-none'}`}
                            >
                                <items.icon className="h-5 w-5" />
                                <h1 className="text-sm">{items.label}</h1>
                            </div>
                        ))}
                    </div>
                </div>

                {/* User Controls */}
                <div className='grid mt-4'>
                    {userControls.map((items, index) => (
                        <div
                            key={index}
                            onClick={() => handleActiveLink(items.label)}
                            className={`w-full h-fit flex gap-x-3 items-center rounded-2xl p-4 cursor-pointer ${isActive === items.label ? 'bg-primary my-1 text-white' : 'hover:bg-light text-black bg-none'}`}
                        >
                            <items.icon className="h-5 w-5" />
                            <h1 className="text-sm">{items.label}</h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Container */}
            <div className="w-[80%] absolute right-0 h-fit bg-light p-6">
                <div className='h-full w-full rounded-2xl bg-white border border-outline p-6'>
                    <div>
                        {/* Header */}
                        <div className='w-full h-fit flex items-center justify-between'>
                            <div>
                                <h1 className='font-semibold text-xl'>Repositories</h1>
                                <p className='text-sm text-subHeading'>7 Repositories</p>
                            </div>

                            <div className='flex gap-x-3 h-fit w-fit'>
                                <div className='flex items-center h-fit w-fit gap-x-3 py-3 px-5 rounded-xl border border-outline hover:bg-light cursor-pointer'>
                                    <Refresh className='h-5 w-5 text-subHeading' />
                                    <p className='text-sm'>Refresh</p>
                                </div>
                                <div className='flex items-center h-fit w-fit gap-x-3 py-3 px-5 rounded-xl text-white bg-primary hover:bg-primary/90 cursor-pointer'>
                                    <Add className='h-5 w-5 ' />
                                    <p className='text-sm'>Add Repository</p>
                                </div>
                            </div>
                        </div>

                        <div className='relative h-fit w-fit mt-4'>
                            <input className='bg-white h-fit w-fit px-12 py-3 rounded-xl border border-outline' placeholder='Search repositories' />
                            <div className='absolute h-fit my-auto mx-4 inset-0'>
                                <BoxSearch className='h-5 w-5 text-subHeading' />
                            </div>
                        </div>

                    </div>

                    <hr className='w-full mt-8' />

                    <div className=''>
                        {repos.map((repos, index) => (
                            <div key={index} className='hover:bg-light cursor-pointer'>
                                <div className='p-6'>
                                    <div className='flex items-center gap-x-3'>
                                        <h1 className='font-semibold'>{repos.name}</h1>
                                        <div className='px-3 py-1 rounded-full border-[1.5px] border-primary bg-primary/20'>
                                            <h1 className='text-xs font-semibold text-primary'>{repos.isPrivate ? 'Private' : 'Public'}</h1>
                                        </div>
                                    </div>
                                    <div className='mt-4 flex gap-x-12 items-center text-sm'>
                                        <div className='flex items-center gap-x-3'>
                                            <h1>{repos.language}</h1>
                                            <div className='h-2 w-2 rounded-full bg-primary'>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <Size className='h-4 w-4' />
                                            <h1>{repos.size} KB</h1>
                                        </div>
                                        <div>
                                            <h1>Updated <span className='font-semibold'>{repos.dateUpdated}</span> ago</h1>
                                        </div>
                                    </div>
                                </div>
                                <hr className='w-full' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
