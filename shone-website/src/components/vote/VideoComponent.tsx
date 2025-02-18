import { number } from 'prop-types'
import React from 'react'
import Header from '../Header'

interface Props {
  setStep?: any
}

const VideoComponent = ({ setStep }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <div className="video-wrap">
        <video className="w-full h-screen object-cover" autoPlay loop muted>
          <source src="/test.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 text-center">
        <button
          type="submit"
          className="mt-3 p-2 border-2 border-solid bg-error border-error w-16 h-16 rounded-full mx-2 focus:outline-none"
          onClick={() => setStep && setStep(2)}
        >
          <img className="mx-auto table" src="/cross-icon.svg" alt="" />
        </button>
        <button
          type="submit"
          className="mt-3 p-2 border-2 border-solid border-orange w-16 h-16 rounded-full mx-2 focus:outline-none"
          onClick={() => setStep && setStep(2)}
        >
          <img className="mx-auto table" src="/like.svg" alt="" />
        </button>
        <div className="mt-5 pb-4">
          <h6 className="text-white font-normal text-sm mb-3">
            Springtime in Paris
          </h6>
          <span className="text-white border-b border-solid border-white pb-1 font-normal text-sm">
            Alex Turner
          </span>
        </div>
      </div>
    </>
  )
}

export default VideoComponent
