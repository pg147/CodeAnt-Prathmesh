import { LuMoveUp } from 'react-icons/lu';
import Logo from '/logo.png'
import PieChart from '/pie-chart.png';
import LogoSvg from '/logo-svg.png';

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

export default function SignIn() {
  return (
    <div className="flex w-full h-fit">
      <div className="h-screen flex flex-col items-center justify-center lg:w-1/2 border-r-[1.5px] border-r-outline bg-white">
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
          <div className='grid gap-y-1 mt-6'>
            <h1 className='font-medium text-subHeading'>Issues fixed</h1>
            <p className='text-3xl font-semibold'>500K+</p>
          </div>
        </div>

        <img
          src={LogoSvg}
          alt="logo_svg"
          className='absolute left-0 bottom-0 h-fit w-fit'
        />
      </div>
      <div className="h-screen lg:w-1/2 bg-light">

      </div>
    </div>
  )
}
