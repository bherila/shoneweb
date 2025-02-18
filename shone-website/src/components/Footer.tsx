import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa'

function Icon({ children }) {
  return (
    <div
      className="rounded-full flex items-center justify-center... border"
      style={{
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
      }}
    >
      {children}
    </div>
  )
}

const AddressLine = ({ children }) => (
  <div style={{ color: '#222d39' }} className="font-medium pt-2">
    {children}
  </div>
)

AddressLine.propTypes = Icon.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function Footer(): React.ReactElement {
  return (
    <div>
      <div className="container mx-auto my-10">
        <div className="flex grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1">
          <div className="flex-2">
            <Image src="/shone-logo.svg" width={140} height={70} />
            <br />
            &copy; Shone Live Co. All Rights Reserved.
          </div>
          {/* <div className="flex-1 ... flex-row" /> */}
          <div className="flex-1 ...">
            <div style={{ color: '#222d39' }} className="font-bold pt-2">
              Home
            </div>
            {/*<div style={{ color: '#222d39' }} className="font-medium pt-2">*/}
            {/*  Blogs*/}
            {/*</div>*/}
            {/*<div style={{ color: '#222d39' }} className="font-medium pt-2">*/}
            {/*  Features*/}
            {/*</div>*/}
          </div>
          <div className="flex-1 ...">
            <div className="font-bold">Support</div>
            <div style={{ color: '#222d39' }} className="font-medium pt-2">
              FAQ
            </div>
            <div style={{ color: '#222d39' }} className="font-medium pt-2">
              How it works
            </div>
            <div style={{ color: '#222d39' }} className="font-medium pt-2">
              Contact
            </div>
            <div style={{ color: '#222d39' }} className="font-medium pt-2">
              <Link href="/careers">Careers</Link>
            </div>
          </div>
          <div className="flex-1 ...">
            <div className="font-bold">Contact Us</div>
            <AddressLine>Shone Live Co.</AddressLine>
            <AddressLine>99 Rausch St. Unit 526</AddressLine>
            <AddressLine>San Francisco, CA 94103</AddressLine>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="lg:px-40 mt:30 bg-gray-800">
        <nav className="flex items-center justify-between flex-wrap py-5 lg:flex-row sm:flex-column sm:justify-center">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <h5>&copy; Shone Live Co. All Rights Reserved.</h5>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              flexWrap: 'wrap',
            }}
            className="lg:flex-1 sm:flex-0"
          >
            <Icon>
              <FaFacebookF size={20} color="#19B5FE" />
            </Icon>

            {/* <div className="px-2 w-8 h-8 border-2 rounded-full"></div> */}
            <Icon>
              <FaTwitter size={20} color="#fff" />
            </Icon>
            <Icon>
              <FaLinkedinIn size={20} color="#fff" />
            </Icon>
            <Icon>
              <FaPinterestP size={20} color="#fff" />
            </Icon>
          </div>
        </nav>
      </div>
    </div>
  )
}
