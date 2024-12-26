// React Icons
import { LuMoveUp } from 'react-icons/lu';

// Assets
import Logo from '/logo.png'
import PieChart from '/pie-chart.png';
import LogoSvg from '/logo-svg.png';
import { useState } from 'react';

const features = [
  {
    label: 'Language support',
    number: '30+'
  },
  {
    label: 'Developers',
    number: '10K+'
  },
  {
    label: 'Hours saved',
    number: '100+'
  },
]

const saasAuthOptions = [
  {
    label: 'GitHub',
    icon: '/github.png'
  },
  {
    label: 'BitBucket',
    icon: '/bitbucket.png'
  },
  {
    label: 'Azure DevOps',
    icon: '/azure.png'
  },
  {
    label: 'GitLab',
    icon: '/gitlab.png'
  },
]

const selfAuthOptions = [
  {
    label: 'GitLab',
    icon: '/gitlab.png'
  },
  {
    label: 'SSO',
    icon: '/sso.png'
  },
]

export default function SignIn() {
  const [tabIndex, setTabIndex] = useState("saas");

  const handleTabClick = (index) => {
    setTabIndex(index);
  }

  return (
    <div className="flex w-full h-fit">

      {/* Left Container */}
      <div className="h-screen hidden lg:flex flex-col items-center justify-center lg:w-1/2 border-r-[1.5px] border-r-outline bg-white">
        {/* Blob 1 */}
        <div className="h-fit w-[450px] p-6 rounded-3xl shadow-intense">
          {/* Header */}
          <div className='flex items-center gap-x-3'>
            <img
              src={Logo}
              alt="logo"
              className='h-8 w-8'
            />
            <p className='font-semibold'>AI to Detect & Autofix Bad Code</p>
          </div>

          <hr className='w-full bg-light my-4' />

          {/* Features */}
          <div className='flex items-center justify-between w-full'>
            {features.map((feats, index) => (
              <div key={index} className='grid gap-y-1'>
                <h1 className='text-lg font-semibold'>{feats.number}</h1>
                <p className='text-sm'>{feats.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Blob 2 */}
        <div className='relative left-36 bottom-3 h-fit w-[250px] p-6 rounded-3xl bg-white shadow-intense'>
          {/* Header */}
          <div className='h-fit w-full flex justify-between items-center'>
            <img
              src={PieChart}
              alt='pie_chart_icon'
              className='h-14 w-14'
            />
            <div>
              <div className='flex items-center gap-x-1'>
                <LuMoveUp className='h-6 text-primary' />
                <p className='text-primary font-semibold'>14%</p>
              </div>
              <p className='text-sm'>This week</p>
            </div>
          </div>

          {/* Feature */}
          <div className='grid gap-y-1 mt-6'>
            <h1 className='font-medium text-subHeading'>Issues fixed</h1>
            <p className='text-3xl font-semibold'>500K+</p>
          </div>
        </div>

        {/* Logo Svg at the bottom */}
        <img
          src={LogoSvg}
          alt="logo_svg"
          className='absolute left-0 bottom-0 h-fit w-fit'
        />
      </div>

      {/* Right Container */}
      <div className="h-screen flex justify-center items-center w-full px-4 lg:px-0 lg:w-1/2 bg-light">
        <div className='bg-white w-full lg:w-[650px] mx-auto rounded-3xl border-x-outline p-4 lg:p-6'>
          {/* Branding */}
          <div className='flex gap-x-3 w-fit mt-3 mx-auto items-center'>
            <img src={Logo} alt="logo" className='h-7 w-7' />
            <h1 className='text-lg'>CodeAnt AI</h1>
          </div>

          {/* Header */}
          <p className='font-medium my-6 text-center text-xl'>Welcome to CodeAnt AI !</p>

          {/* Auth Options Tab */}
          <div className='flex h-fit w-full bg-light rounded-xl'>
            {/* SaaS Tab */}
            <div
              onClick={() => handleTabClick('saas')}
              className={`h-[40px] w-1/2 rounded-xl p-4 flex items-center justify-center ${tabIndex === 'saas' ? 'bg-primary text-white' : 'bg-light text-black cursor-pointer'}`}
            >
              <h1>SAAS</h1>
            </div>

            {/* Self Hosted Tab */}
            <div
              onClick={() => handleTabClick('self-hosted')}
              className={`h-[40px] w-1/2 rounded-xl p-4 flex items-center justify-center ${tabIndex === 'self-hosted' ? 'bg-primary text-white' : 'bg-light text-black cursor-pointer'}`}
            >
              <h1>Self Hosted</h1>
            </div>
          </div>

          <hr className='w-full my-7' />
          
          {/* Conditional Rendering */}
          {tabIndex === 'saas' ? (
            <div className='w-full grid gap-y-3'>
              {saasAuthOptions.map((options, index) => (
                <div
                  key={index}
                  className='h-fit w-full py-4 flex gap-x-4 items-center justify-center rounded-xl border border-outline cursor-pointer transition-colors duration-200 ease-in-out hover:bg-light/80'
                >
                  <img
                    src={options.icon}
                    alt={options.label + "_logo"}
                    className='h-7 w-7'
                  />
                  <h1>Sign in with <span className='font-semibold'>{options.label}</span></h1>
                </div>
              ))}
            </div>
          ) : (
            <div className='w-full grid gap-y-3'>
              {selfAuthOptions.map((options, index) => (
                <div
                  key={index}
                  className='h-fit w-full py-4 flex gap-x-4 items-center justify-center rounded-xl border border-outline cursor-pointer transition-colors duration-200 ease-in-out hover:bg-light/80'
                >
                  <img
                    src={options.icon}
                    alt={options.label + "_logo"}
                    className='h-7 w-7'
                  />
                  <h1>Sign in with <span className='font-semibold'>{options.label}</span></h1>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
