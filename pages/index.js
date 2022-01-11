import Head from 'next/head'
import Image from 'next/image'
import { Fade } from "react-awesome-reveal";


export default function Home() {
  return (
    <section className="bg-gray-900 bg-cover min-h-screen min-w-screen">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>JTWI</title>
        <meta name="description" content="Jordan Twiggs Personal Website" />
        <meta name="keywords" content="" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

        <section className="text-white body-font h-full item-centerflex flex">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <Fade delay={350}>
              <h1 className=" text-6xl md:text-7xl opacity-100 font-bold leading-relaxed text-center md:text-left mb-4 md:mb-10 bg-clip-text text-ellipsis text-transparent bg-gradient-to-r md:px-0 from-sky-500 via-blue-500 to-sky-500 pb-3">Jordan Twiggs</h1>
            </Fade>
            <Fade delay={400}>
              <p className="leading-relaxed text-white font-medium text-2xl sm:text-2xl md:text-2xl mb-6 md:mb-10">When I was 17 I started design and development work for a hand full of local businesses. Five years later I now focus on Business Development and Management, Marketing and Frontend Development for worldwide businesses.</p>
            </Fade>  
              <div className="flex justify-center">
            <Fade delay={400}>
              <div>
                <a className="inline-block text-sky-500 no-underline hover:text-blue-500 hover:text-underline text-center h-10 p-3 md:h-auto  transform hover:scale-125 duration-200 ease-in-out" href="https://www.linkedin.com/in/jordan-twiggs-21a67b207/">
                  <svg className="fill-current h-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
            </div>
            <div>
                <a className="inline-block text-sky-500 no-underline hover:text-blue-500 hover:text-underline text-center h-10 p-3 md:h-auto  transform hover:scale-125 duration-200 ease-in-out" href="https://github.com/Jtwi">
                  <svg className="fill-current h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
            </div>
            <div>
                <a className="inline-block text-sky-500 no-underline hover:text-blue-500 hover:text-underline text-center h-10 p-3  md:h-auto  transform hover:scale-125 duration-200 ease-in-out" href="mailto:hello@jtwi.me">
                  <svg className="fill-current h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                  </svg>
                </a>
            </div>
            <div>
                <a className="inline-block text-sky-500 no-underline hover:text-blue-500 hover:text-underline text-center h-10 p-3  md:h-auto  transform hover:scale-125 duration-200 ease-in-out" href="https://drive.google.com/file/d/1mG26tx2WXjIGv5mk9qTjzioeJ5iTAgkx/view?usp=sharing">
                  <svg className="fill-current h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/>
                  </svg>
                </a>
            </div>
            </Fade>  
              </div>
            </div>
            <section className="bg-gray-900 bg-cover">
            <div className="lg:max-w-2xl md:pt-4 pt-0 lg:w-full md:w-1/2 max-w-3xl bg-gray-900 w-6/6">
            <Fade delay={400}>
            <Image eager src={'/pngmoji.png'} width={'750'} height={'750'} alt="Nest Pro"/>
            </Fade>  
            </div>
            </section>
          </div>
        </section>


    </section>
  )
}
